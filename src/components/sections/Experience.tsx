import { motion, type Variants } from "framer-motion";
import { Building, MapPin, Calendar } from "lucide-react";
import hassanLogo from "../../assets/hassan-allam.jpeg";
import rabatLogo from "../../assets/rab.jpg";

import soadaaLogo from "../../assets/el-soadaa.jpg";

const experiences = [
  {
    company:   "Rabat Foundation",
    role:      "Surveyor",
    period:    "Sep 2025 – Present",
    location:  "Dubai, UAE",
    highlight: "Current Position",
    desc:      "Multiple infrastructure and foundation projects across Dubai. Operating at UAE construction standards.",
    logo:      rabatLogo,
    active:    true,
  },
  {
    company:   "Hassan Allam Roads & Bridges",
    role:      "Surveyor",
    period:    "2021 – 2025",
    location:  "Egypt",
    highlight: "High-Speed Rail Bridge",
    desc:      "High-Speed Rail Bridge (6th October) + Regional Road Bridge & Quarry Bridge at the New Administrative Capital.",
    logo:      hassanLogo,
    active:    false,
  },
  {
    company:   "El Soadaa Group",
    role:      "Surveyor",
    period:    "2014 – 2021",
    location:  "Egypt",
    highlight: "Early Career",
    desc:      "Sandob Bridge, Middle Ring Road, Mostaqbal City Bridge, and Dakhla Road — spanning 7 years of foundational infrastructure work.",
    logo:      soadaaLogo,
    active:    false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function Experience() {
  return (
    <section className="py-14 md:py-28 bg-card relative border-y border-white/5 section-depth overflow-hidden" id="experience">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs font-mono text-primary tracking-[0.4em] uppercase mb-4">Career Path</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Professional <span className="text-muted-foreground font-light italic">Experience</span>
          </h3>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="premium-card glass-card border rounded-sm p-7 md:p-8 group relative overflow-hidden"
              style={{
                borderColor: exp.active ? "rgba(184,115,51,0.4)" : "rgba(255,255,255,0.06)",
                boxShadow: exp.active
                  ? "0 0 30px rgba(184,115,51,0.08), inset 0 1px 0 rgba(184,115,51,0.1)"
                  : undefined,
              }}
              whileHover={{
                y: -3,
                boxShadow: exp.active
                  ? "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(184,115,51,0.14), inset 0 1px 0 rgba(184,115,51,0.15)"
                  : "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(184,115,51,0.18)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {exp.active && (
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(184,115,51,0.8), transparent)" }} />
              )}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/3 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <motion.div
                  className="w-16 h-14 shrink-0 flex items-center justify-center bg-background/60 border border-white/10 rounded-sm p-2 group-hover:border-primary/30 transition-colors duration-300"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-serif font-bold text-white">{exp.company}</h4>
                        {exp.active && (
                          <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-full"
                            style={{ background: "rgba(184,115,51,0.2)", color: "#B87333", border: "1px solid rgba(184,115,51,0.4)" }}>
                            ● Active
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium text-sm">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-white/8 px-3 py-1.5 rounded-sm">
                        <Calendar size={11} className="text-primary/60" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.desc}</p>

                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-primary/70 font-mono">
                      <Building size={11} />
                      {exp.highlight}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground font-mono">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-white/5 text-center"
        >
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.4em] uppercase mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
            {[
              { logo: hassanLogo, name: "Hassan Allam" },
              { logo: rabatLogo,  name: "Rabat Foundation" },
              { logo: soadaaLogo, name: "El Soadaa Group" },
            ].map((co, i) => (
              <motion.div
                key={co.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center gap-2 cursor-default"
              >
                <div className="h-10 w-24 flex items-center justify-center">
                  <img
                    src={co.logo}
                    alt={co.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
