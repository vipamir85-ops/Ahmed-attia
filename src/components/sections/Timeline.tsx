import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import hassanLogo from "../../assets/hassan-allam.jpeg";
import rabatLogo from "../../assets/Rab.jpg";



import soadaaLogo from "../../assets/el-soadaa.jpg";


interface TimelineProject {
  title: string;
  location: string;
  period: string;
  highlight?: boolean;
}

interface TimelineEra {
  id: string;
  yearStart: string;
  yearEnd: string;
  company: string;
  role: string;
  location: string;
  logo: string;
  description: string;
  projects: TimelineProject[];
  active?: boolean;
}

const eras: TimelineEra[] = [
  {
    id: "soadaa",
    yearStart: "2014",
    yearEnd: "2021",
    company: "El Soadaa Group",
    role: "Survey Engineer",
    location: "Egypt",
    logo: soadaaLogo,
    description:
      "Foundation years — developing core precision surveying skills across major bridge and road infrastructure projects throughout Egypt.",
    projects: [
      { title: "Sandob Bridge", location: "Mansoura", period: "2014 – 2016" },
      { title: "Middle Ring Road Bridge", location: "Ismailia Desert Road", period: "2016 – 2017" },
      { title: "Mostaqbal City Bridge", location: "Ismailia Desert Road", period: "2020 – 2021" },
      { title: "Dakhla Road — East Owainat", location: "Western Desert (Al Wahat Road)", period: "2021", highlight: true },
    ],
  },
  {
    id: "hassan",
    yearStart: "2021",
    yearEnd: "2025",
    company: "Hassan Allam Roads & Bridges",
    role: "Surveyor",
    location: "Egypt",
    logo: hassanLogo,
    description:
      "National-scale projects — New Administrative Capital road bridges and Egypt's High-Speed Rail megaproject requiring sub-millimeter precision.",
    projects: [
      { title: "Regional Road Bridge", location: "New Administrative Capital", period: "2021 – 2023" },
      { title: "Quarry Bridge", location: "New Administrative Capital", period: "2021 – 2023" },
      { title: "High-Speed Rail Bridge", location: "6th of October City", period: "Jan 2024 – Jul 2025", highlight: true },
    ],
  },
  {
    id: "rabat",
    yearStart: "2025",
    yearEnd: "Present",
    company: "Rabat Foundation",
    role: "Surveyor",
    location: "Dubai, UAE",
    logo: rabatLogo,
    description:
      "International career — piling, shoring, and foundation surveying for UAE infrastructure projects in a fast-paced multi-contractor environment.",
    projects: [
      { title: "Infrastructure & Foundation Projects", location: "Dubai, UAE", period: "Sep 2025 – Present", highlight: true },
    ],
    active: true,
  },
];

const cardVariants: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

const projVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const projItemVariants: Variants = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function Timeline() {
  return (
    <section className="py-14 md:py-28 bg-background relative section-depth overflow-hidden" id="timeline">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-secondary/6 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/4 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-2 md:mb-3">Professional Journey</p>
          <h3 className="text-xl md:text-5xl font-serif font-bold text-white">
            Career <span className="text-muted-foreground font-light italic">Timeline</span>
          </h3>
          <p className="mt-2 md:mt-3 text-[0.82rem] md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            10+ years of field experience — from Egypt's delta to the Western Desert, and now international projects in the UAE.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {eras.map((era, eraIdx) => (
            <div key={era.id} className="relative flex gap-5 md:gap-7 pb-10 md:pb-14 last:pb-0">

              {/* Spine */}
              <div className="flex flex-col items-center shrink-0 w-10">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: eraIdx * 0.14, type: "spring", stiffness: 260, damping: 20 }}
                  className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{
                    borderColor: era.active ? "#B87333" : "rgba(184,115,51,0.35)",
                    background: era.active ? "rgba(184,115,51,0.10)" : "rgba(10,10,10,0.95)",
                    boxShadow: era.active ? "0 0 18px rgba(184,115,51,0.30)" : "none",
                  }}
                >
                  {era.active ? (
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/45" />
                  )}
                </motion.div>

                {eraIdx < eras.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: eraIdx * 0.14 + 0.25, ease: "easeOut" }}
                    className="w-px flex-1 mt-2 origin-top"
                    style={{ background: "linear-gradient(to bottom, rgba(184,115,51,0.35) 0%, rgba(184,115,51,0.06) 100%)" }}
                  />
                )}
              </div>

              {/* Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex-1 min-w-0 pb-2"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary/75 tracking-wider">
                    {era.yearStart} — {era.yearEnd}
                  </span>
                  {era.active && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-primary/12 text-primary border border-primary/30 tracking-widest uppercase">
                      Active
                    </span>
                  )}
                </div>

                <div className="glass-card border border-white/6 rounded-sm p-4 md:p-6 premium-card hover:border-primary/22 transition-colors duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-sm border border-white/8 bg-white/4 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={era.logo} alt={era.company} className="w-full h-full object-contain p-1.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif text-white font-semibold text-sm md:text-base leading-tight">{era.company}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="text-primary text-xs font-medium">{era.role}</span>
                        <span className="text-white/20">·</span>
                        <span className="flex items-center gap-1 text-muted-foreground text-xs">
                          <MapPin size={11} /> {era.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-5">{era.description}</p>
                  
                  {/* Projects Sublist */}
                  <motion.div variants={projVariants} className="space-y-2 border-t border-white/5 pt-4">
                    {era.projects.map((proj, pIdx) => (
                      <motion.div key={pIdx} variants={projItemVariants} className="flex items-center justify-between text-xs py-1">
                        <span className={`font-medium ${proj.highlight ? "text-primary" : "text-white/85"}`}>{proj.title}</span>
                        <span className="text-muted-foreground/60 font-mono text-[11px]">{proj.period}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
