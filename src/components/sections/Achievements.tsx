import { motion, type Variants } from "framer-motion";
import { Star, Zap, Building2, Target, Award, MapPin, Train } from "lucide-react";

interface Achievement {
  icon: React.ElementType;
  stat: string;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: Star,
    stat: "100%",
    title: "National-Scale Projects",
    description:
      "Every completed project was a major national infrastructure project — no residential, no small-scale. Bridges, roads, and rail serving millions.",
  },
  {
    icon: Train,
    stat: "National",
    title: "High-Speed Rail Network",
    description:
      "Contributed to Egypt's High-Speed Rail megaproject — the largest transportation infrastructure development in Egyptian history.",
  },
  {
    icon: Building2,
    stat: "6+",
    title: "Bridge Projects Delivered",
    description:
      "Setting-out, alignment, and structural monitoring across six major bridge structures — from urban flyovers to multi-span rail bridges.",
  },
  {
    icon: MapPin,
    stat: "2",
    title: "Countries · 3 Contractors",
    description:
      "International track record spanning Egypt and UAE, working with three major contractors: El Soadaa Group, Hassan Allam, and Rabat Foundation.",
  },
  {
    icon: Target,
    stat: "< 1mm",
    title: "Rail-Grade Precision",
    description:
      "Maintained sub-millimeter tolerances throughout the High-Speed Rail Bridge — the most demanding accuracy standard in civil construction.",
  },
  {
    icon: Zap,
    stat: "500 km+",
    title: "Desert Alignment Control",
    description:
      "GPS-based topographic survey and road alignment across 500+ km of remote Western Desert terrain for the national Dakhla road project.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 26, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function Achievements() {
  return (
    <section className="py-14 md:py-28 bg-card relative section-depth overflow-hidden" id="achievements">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-secondary/6 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-2 md:mb-3">Career Highlights</p>
          <h3 className="text-xl md:text-5xl font-serif font-bold text-white">
            Field <span className="text-muted-foreground font-light italic">Achievements</span>
          </h3>
          <p className="mt-2 md:mt-3 text-[0.82rem] md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            10+ years delivering precision surveying for Egypt's most ambitious national infrastructure — and now the UAE.
          </p>
        </motion.div>

        {/* Featured banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div
            className="relative overflow-hidden rounded-sm px-5 py-5 md:px-10 md:py-7 flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-primary/22"
            style={{ background: "linear-gradient(135deg, rgba(184,115,51,0.09) 0%, rgba(15,61,46,0.11) 60%, rgba(184,115,51,0.05) 100%)" }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/35 bg-primary/8 flex items-center justify-center shrink-0">
              <Award size={20} className="text-primary" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-mono text-primary/75 tracking-[0.3em] uppercase mb-1.5">Verified Track Record</p>
              <h4 className="text-base md:text-xl font-serif font-bold text-white leading-snug">
                Every Completed Project Was a Major National or International Infrastructure Project
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                Bridges, roads, high-speed rail, and foundation works — each one a landmark project shaping Egypt and the UAE.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={cardVariants}
              className="glass-card border border-white/6 rounded-sm p-5 md:p-6 premium-card group hover:border-primary/28 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  className="w-9 h-9 rounded-sm border border-primary/28 bg-primary/7 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <a.icon size={15} className="text-primary" />
                </motion.div>
                <span className="text-2xl font-serif font-bold text-primary leading-none mt-1">{a.stat}</span>
              </div>
              <h5 className="font-serif font-semibold text-white text-sm md:text-[0.95rem] mb-2 leading-snug">{a.title}</h5>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
