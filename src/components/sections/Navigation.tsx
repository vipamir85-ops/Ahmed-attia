import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Profile",  id: "profile"      },
  { label: "Projects", id: "projects"     },
  { label: "Map",      id: "map"          },
  { label: "Experience", id: "experience" },
  { label: "Contact",  id: "contact"      },
];

export function Navigation() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY, scrollYProgress }    = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // منع التمرير في الخلفية عندما تكون قائمة الهاتف مفتوحة
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left pointer-events-none"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #B87333 0%, #f5c87a 50%, #B87333 100%)",
          boxShadow: "0 0 8px rgba(184,115,51,0.55)",
        }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-400 ${
          scrolled || mobileOpen
            ? "bg-background/95 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            className="text-xl font-serif font-bold tracking-wider text-primary z-[95]"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            AMA<span className="text-white">.</span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative uppercase tracking-widest text-xs transition-colors duration-300 py-1"
                  style={{ color: isActive ? "#B87333" : "hsl(0 0% 60%)" }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-[1px] bg-primary rounded-full"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <motion.button
            className="md:hidden text-white/70 hover:text-primary transition-colors z-[95] p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 80, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block" }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile drawer full screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] bg-background/98 backdrop-blur-lg flex flex-col justify-center pt-20 overflow-hidden"
          >
            <div className="container mx-auto px-8 py-6 flex flex-col gap-2">
              {navLinks.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    onClick={() => scrollTo(item.id)}
                    className="text-center uppercase tracking-widest text-base py-4 border-b border-white/5 flex items-center justify-between transition-colors duration-200"
                    style={{ color: isActive ? "#B87333" : "hsl(0 0% 70%)" }}
                  >
                    <span className="text-sm font-mono text-white/20">0{i+1}</span>
                    <span className="font-medium tracking-[0.2em]">{item.label}</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#B87333]"
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
