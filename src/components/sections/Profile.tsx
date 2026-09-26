import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { HardHat, Briefcase, Building2, Globe } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const statsData = [
  { icon: HardHat,   target: 10, suffix: "+", label: "Years Experience", sub: "2014 – Present" },
  { icon: Briefcase, target: 8,  suffix: "",  label: "Major Projects",   sub: "Bridges & Roads" },
  { icon: Building2, target: 3,  suffix: "",  label: "Companies",        sub: "UAE & Egypt" },
  { icon: Globe,     target: 2,  suffix: "",  label: "Countries",        sub: "UAE · Egypt" },
];

const specializations = [
  "Setting Out & Alignment Control",
  "As-Built Surveys",
  "Bridge Construction Surveying",
  "Rail Infrastructure",
  "Piling & Shoring Works",
  "GNSS & Total Station Surveying",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

function StatCard({ icon: Icon, target, suffix, label, sub }: typeof statsData[0]) {
  const { value, ref } = useCountUp(target, { duration: 1.3, delay: 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={cardVariants}
      className="premium-card glass-card border border-white/6 p-4 md:p-7 rounded-sm hover:border-primary/40 group relative overflow-hidden text-center"
    >
      <div className="absolute top-0 right-0 w-14 h-14 bg-primary/4 rounded-full blur-2xl group-hover:bg-primary/12 transition-all duration-500" />
      <div className="mb-2 md:mb-3 flex justify-center">
        <motion.div
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-sm border border-primary/20 bg-primary/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-400"
          whileHover={{ rotate: 5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </motion.div>
      </div>
      <p className="text-2xl md:text-4xl font-serif font-bold text-primary mb-0.5 md:mb-1 tabular-nums"
        style={{ textShadow: "0 0 20px rgba(184,115,51,0.25)" }}>
        {value}{suffix}
      </p>
      <p className="text-[0.72rem] md:text-base font-semibold text-white mb-0.5 md:mb-1 leading-tight">{label}</p>
      <p className="text-[9px] md:text-[10px] font-mono text-primary/60 tracking-widest uppercase">{sub}</p>
    </motion.div>
  );
}

const specVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const specItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function Profile() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 md:py-24 bg-background relative border-t border-white/5 section-depth overflow-hidden" id="profile">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-7 md:mb-14"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-2 md:mb-3">Professional Profile</p>
          <h3 className="text-xl md:text-5xl font-serif font-bold text-white leading-tight mb-3 md:mb-5">
            Engineered for <span className="text-shimmer italic">Accuracy</span>.
            <br />Built for <span className="text-white/60 font-light italic">Scale.</span>
          </h3>
          <p className="text-[0.82rem] md:text-base text-muted-foreground leading-snug md:leading-relaxed max-w-xl mx-auto mb-4 md:mb-5">
            Surveyor with extensive experience across bridges, railways, roads, foundations, piling and large-scale infrastructure projects in the UAE and Egypt.
          </p>

          <motion.div
            className="inline-grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 md:gap-y-2 text-left mt-1 md:mt-2"
            variants={specVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specializations.map((item) => (
              <motion.div key={item} variants={specItemVariants} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-[0.75rem] md:text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {statsData.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
