import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, Linkedin } from "lucide-react";
import { Button } from "../ui/button"; 
import profileImg from "../../assets/IMG20250616132315(1)_1781728333261.jpg";
import cvPdf from "../../assets/Ahmed_Attia_-_Surveyor_C.V_1775753299249.pdf";

const heroStats = [
  { target: 10, suffix: "+", label: "Years" },
  { target: 8,  suffix: "+", label: "Projects" },
  { target: 3,  suffix: "",  label: "Companies" },
  { target: 2,  suffix: "",  label: "Countries" },
];

function HeroStat({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      const start = performance.now();
      const dur = 1300;
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(ease * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 900 + delay * 160);
    return () => clearTimeout(id);
  }, [target, delay]);

  return (
    <div className="group flex flex-col items-center md:items-start text-center md:text-left">
      <p
        className="text-xl md:text-4xl font-serif font-bold text-primary tabular-nums"
        style={{ textShadow: "0 0 20px rgba(184, 115, 51, 0.5)" }}
      >
        {value}{suffix}
      </p>
      <p className="text-[9px] md:text-[10px] text-white/55 font-mono uppercase tracking-wider mt-0.5 md:mt-1">
        {label}
      </p>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // تم ضبط مصفوفات أرقام الـ Parallax بدقة لمنع أي أخطاء برمجية
  const imgY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [0.42, 0.2]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative overflow-hidden pt-16 md:pt-20" id="hero">

      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <motion.img
          src={profileImg}
          alt="Background"
          className="w-full h-full object-cover object-top scale-110"
          style={{ opacity: imgOpacity, filter: "brightness(0.95) saturate(0.85) sepia(0.1)" }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[1]" style={{
        background: `
          radial-gradient(ellipse at 75% 45%, rgba(15,61,46,0.45) 0%, transparent 60%),
          radial-gradient(ellipse at 25% 80%, rgba(184,115,51,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.25) 0%, transparent 50%),
          linear-gradient(180deg, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.30) 50%, rgba(8,8,8,0.62) 100%)
        `
      }} />

      <div className="absolute z-[1] pointer-events-none" style={{
        right: "10%", top: "15%", width: "500px", height: "700px",
        background: "radial-gradient(ellipse at center, rgba(184,115,51,0.07) 0%, rgba(15,61,46,0.12) 40%, transparent 75%)",
        filter: "blur(40px)",
      }} />

      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" style={{ top: "30%" }} />
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" style={{ top: "65%" }} />
      </div>
      <div className="container relative z-10 px-5 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 pt-10 pb-4 md:min-h-[calc(100vh-5rem)] md:items-center md:py-32">

        <motion.div style={{ y: textY }}>

          <motion.div
            initial={{ opacity: 0, y: 48, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h1 className="font-serif font-bold leading-[0.92] mb-2 md:mb-6">
              <span className="block text-white tracking-tight whitespace-nowrap"
                style={{
                  fontSize: "clamp(2.05rem, 7vw, 5.8rem)",
                  textShadow: "0 2px 40px rgba(0,0,0,0.6), 0 0 80px rgba(15,61,46,0.3)"
                }}>
                AHMED M.
              </span>
              <motion.span
                className="block name-glow text-shimmer tracking-tight whitespace-nowrap"
                style={{ fontSize: "clamp(2.05rem, 7vw, 5.8rem)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              >
                ATTIA
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
              <motion.div
                className="h-[2px] bg-primary shrink-0"
                initial={{ width: 0 }}
                animate={{ width: "clamp(20px, 2vw, 32px)" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
              />
              <h2 className="text-[0.8rem] md:text-xl text-white font-semibold tracking-wide leading-snug">
                Surveyor <span className="text-primary">|</span> Bridges, Roads & Infrastructure Projects
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.62 }}
            className="ml-0 mb-4 md:mb-8"
          >
            <p className="text-[0.82rem] md:text-base text-muted-foreground leading-relaxed max-w-lg">
              Delivering High-Precision Surveying for Bridges, Roads and Heavy Civil Construction Projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.76 }}
            className="flex flex-wrap items-center gap-2.5 md:gap-4 mb-6 md:mb-12"
          >
            <motion.button
              onClick={scrollToProjects}
              className="cta-strong px-6 md:px-10 h-10 md:h-14 font-bold tracking-[0.2em] text-[0.7rem] md:text-sm uppercase text-white rounded-none"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              View Projects
            </motion.button>

            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="border-2 border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-5 md:px-8 h-9 md:h-13 font-semibold tracking-widest text-[0.7rem] md:text-sm uppercase bg-transparent transition-all duration-300 group"
                >
                  <Download size={13} className="mr-1.5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download CV
                </Button>
              </motion.div>
            </a>

            <motion.a
              href="https://www.linkedin.com/in/ahmed-surveyor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-flex"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-6 md:pt-10 max-w-md mx-auto md:mx-0">
            {heroStats.map((stat, i) => (
              <HeroStat key={i} target={stat.target} suffix={stat.suffix} label={stat.label} delay={i} />
            ))}
          </div>

        </motion.div>

        {/* ── البطاقة العائمة الصغيرة المطابقة تماماً مئة بالمئة للصورة الأولى ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative flex items-center justify-center lg:justify-end w-full"
        >
          <div className="relative p-3 glass-card border border-white/10 max-w-sm w-full aspect-[3/4] overflow-hidden group copper-glow-box-hover transition-all duration-500">
            <div className="absolute top-3 left-3 text-[10px] font-mono text-white/30">┌</div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-white/30">┐</div>
            
            <img 
              src={profileImg} 
              alt="Ahmed Attia - Profile Card" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-12">
              <p className="text-[9px] font-mono text-primary tracking-widest uppercase">Surveyor</p>
              <p className="text-white font-serif font-bold text-base mt-0.5">Dubai / UAE</p>
            </div>
            
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
