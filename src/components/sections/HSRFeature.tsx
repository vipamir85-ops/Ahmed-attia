import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Zap, Train, Clock } from "lucide-react";

import railHero   from "../../assets/dji-20251111164339-0251-d_1775751492679.jpeg";
import railImg4   from "../../assets/dji-20251111163919-0237-d_1775751492708.jpeg";
import railImg5   from "../../assets/dji-20251111164335-0250-d_1775751492711.jpeg";
import railImg6   from "../../assets/FB_IMG_1775651592518_1775751492713.jpg";
import railScope  from "../../assets/work-of-scope_1775751492704.jpg";
import railMap    from "../../assets/6342346321610868473_1775911124562.jpg";

const thumbnails = [
  { src: railImg4,  caption: "Aerial — Structural progress" },
  { src: railImg5,  caption: "Aerial — Beam placement phase" },
  { src: railImg6,  caption: "On-site — Bridge deck execution" },
  { src: railScope, caption: "Scope of work documentation" },
];

const allImages = [
  { src: railHero,  caption: "Aerial — Bridge alignment overview" },
  ...thumbnails,
  { src: railMap,   caption: "Egypt National High-Speed Rail Network — route map" },
];

const stats = [
  { value: "2,000+", label: "km total network", icon: Train },
  { value: "250",    label: "km/h top speed",   icon: Zap   },
  { value: "2027",   label: "expected operation",icon: Clock },
];

const statsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const statItemVariants: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function HSRFeature() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const lbPrev = () => setLightbox(i => i != null ? (i - 1 + allImages.length) % allImages.length : null);
  const lbNext = () => setLightbox(i => i != null ? (i + 1) % allImages.length : null);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden border-t border-white/6" id="featured">
      <div className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(184,115,51,0.5) 40%, rgba(184,115,51,0.5) 60%, transparent 100%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(184,115,51,0.04) 0%, transparent 100%)" }} />

      <div className="container mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20 space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono"
              style={{ borderColor: "rgba(184,115,51,0.4)", color: "rgba(184,115,51,0.9)", background: "rgba(184,115,51,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Featured Project
            </div>
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">National Megaproject — Egypt</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[0.95] mb-4">
            Egypt National
            <br />
            <span className="text-primary">High-Speed Rail Network</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            One of the largest electrified rail networks in the Middle East & Africa — often described as{" "}
            <span className="text-white/80 italic">"a new Suez Canal on rails."</span>
          </p>
        </motion.div>

        {/* Hero image with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-sm cursor-pointer group"
          style={{ aspectRatio: "21/9" }}
          onClick={() => setLightbox(0)}
        >
          <motion.img
            src={railHero}
            alt="Egypt High-Speed Rail Network — aerial overview"
            className="w-full h-full object-cover scale-110"
            style={{ y: heroImgY, filter: "brightness(0.82) contrast(1.08)" }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 50%)" }} />
          <div className="absolute bottom-5 left-6 z-10">
            <p className="text-[10px] font-mono text-primary/80 tracking-[0.3em] uppercase mb-1">Hassan Allam Roads & Bridges · Jan 2024 – Jul 2025</p>
            <p className="text-white/60 text-xs font-mono">6th of October City, Egypt · Aerial survey documentation</p>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-white/40 bg-black/40 px-2.5 py-1.5 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ↗ view full size
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={statItemVariants}
              className="border border-white/8 rounded-sm group"
              style={{ background: "rgba(184,115,51,0.04)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}
              whileHover={{ borderColor: "rgba(184,115,51,0.3)", background: "rgba(184,115,51,0.07)" }}
              transition={{ duration: 0.25 }}
            >
              <Icon size={14} className="text-primary mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              <p className="font-serif text-primary text-xl"
                style={{ fontWeight: 600, letterSpacing: "-0.5px", lineHeight: 1, whiteSpace: "nowrap" }}>
                {value}
              </p>
              <p className="font-mono text-muted-foreground/60 uppercase mt-2"
                style={{ fontSize: "12px", letterSpacing: "1px", opacity: 0.7 }}>{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Description + thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-sm text-muted-foreground leading-relaxed"
          >
            <p>
              The Egypt National High-Speed Rail Network is a landmark infrastructure initiative spanning approximately{" "}
              <span className="text-white/90 font-medium">2,000 km across three main lines</span>, connecting Ain Sokhna Port on the Red Sea to Alamein on the Mediterranean coast.
            </p>
            <p>The system includes:</p>
            <ul className="space-y-2 pl-2">
              {[
                "High-speed trains (Velaro) operating at up to 250 km/h",
                "Regional trains (Desiro) at up to 160 km/h",
                "Freight locomotives (Vectron) at up to 120 km/h",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                  className="flex items-start gap-2 text-white/75"
                >
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <p>
              Delivered through a global consortium led by{" "}
              <span className="text-white/90 font-medium">Siemens</span> — one of the most significant rail investments in Africa and the Middle East.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest mb-3">Site Photography</p>
            <div className="grid grid-cols-2 gap-2">
              {thumbnails.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-sm cursor-pointer border border-white/8 hover:border-primary/50 transition-colors"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => setLightbox(i + 1)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img src={img.src} alt={img.caption} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-[9px] font-mono text-white/60 leading-tight">{img.caption}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Network Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase mb-3">Network Coverage</p>
          <div
            className="relative overflow-hidden rounded-sm cursor-pointer group mb-5"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightbox(allImages.length - 1)}
          >
            <img
              src={railMap}
              alt="Egypt National High-Speed Rail Network — full route map"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              style={{ filter: "brightness(0.75) contrast(1.1) saturate(0.9)" }}
            />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, transparent 30%, transparent 70%, rgba(8,8,8,0.5) 100%)" }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)" }} />
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-white/50 bg-black/50 px-2.5 py-1.5 rounded-sm border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
              ↗ view full size
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed max-w-3xl"
            style={{ color: "rgba(255,255,255,0.72)", borderLeft: "2px solid rgba(184,115,51,0.55)", paddingLeft: "14px" }}>
            The network spans from{" "}
            <span style={{ color: "rgba(184,115,51,1)", fontWeight: 600 }}>Ain Sokhna on the Red Sea</span>{" "}
            to{" "}
            <span style={{ color: "rgba(184,115,51,1)", fontWeight: 600 }}>Alamein on the Mediterranean</span>,
            {" "}forming a strategic logistics corridor across Egypt.
          </p>
        </motion.div>

        {/* Status + contribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-sm border border-white/10 overflow-hidden"
          >
            <div className="px-4 py-2.5 border-b border-white/6" style={{ background: "rgba(255,255,255,0.02)" }}>
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">Project Status</p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/6">
              {[
                { label: "Status",    value: "Under Construction", color: "text-amber-400" },
                { label: "Progress",  value: "Testing started",    color: "text-primary"   },
                { label: "Operation", value: "Expected 2027",      color: "text-green-400" },
              ].map(({ label, value, color }) => (
                <div key={label} className="p-4 text-center">
                  <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider mb-1">{label}</p>
                  <p className={`text-xs font-mono font-medium ${color}`}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 p-4 rounded-sm border border-primary/20 h-full"
            style={{ background: "rgba(184,115,51,0.05)" }}
          >
            <div className="w-1 shrink-0 self-stretch rounded-full bg-primary/60" />
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1.5">Ahmed's Contribution</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Surveyor on the 6th of October City bridge segment (Jan 2024 – Jul 2025) under Hassan Allam Roads & Bridges — responsible for precision setting-out, pier positioning, and beam alignment to rail-grade tolerances.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox != null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); lbPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-primary text-white hover:text-primary transition-all z-10"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronLeft size={22} />
            </motion.button>
            <motion.button
              onClick={(e) => { e.stopPropagation(); lbNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-primary text-white hover:text-primary transition-all z-10"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronRight size={22} />
            </motion.button>
            <motion.button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-destructive text-white hover:text-destructive transition-all z-10"
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} />
            </motion.button>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-white/50 z-10">
              {lightbox + 1} / {allImages.length}
            </div>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightbox].src}
              alt={allImages[lightbox].caption}
              className="max-w-[90vw] max-h-[88vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/50 z-10">
              {allImages[lightbox].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
