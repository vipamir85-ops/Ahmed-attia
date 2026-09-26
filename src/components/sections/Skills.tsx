import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Monitor, HardHat, Zap } from "lucide-react";
import { siAutocad, siAutodesk } from "simple-icons";

/* ── Branded software icons ─────────────────────── */

function SimpleIcon({ path, bg, fg = "white" }: { path: string; bg: string; fg?: string }) {
  return (
    <div className="w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: bg }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ fill: fg }}>
        <path d={path} />
      </svg>
    </div>
  );
}

/* Excel — green with white "X" */
const ExcelIcon = () => (
  <div className="w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: "#217346" }}>
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="13.5" y="3" width="1" height="18" fill="rgba(255,255,255,0.28)" />
      <rect x="17.5" y="3" width="1" height="18" fill="rgba(255,255,255,0.18)" />
      <path d="M4.5 4L9 12L4.5 20H7.5L11 14.5L14.5 20H17.5L13 12L17.5 4H14.5L11 9.5L7.5 4Z" fill="white" />
    </svg>
  </div>
);

/* Canva — purple, white C-circle */
const CanvaIcon = () => (
  <div className="w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: "#7C3AED" }}>
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M19 8.5C17 5 11.5 4.5 8.5 7.5C5.5 10.5 6 17 10.5 18.5C13.5 19.5 17.5 18 19.5 15.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>
);

/* ChatGPT / OpenAI — dark green, OpenAI-inspired symbol */
const ChatGPTIcon = () => (
  <div className="w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: "#10a37f" }}>
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      {/* Simplified OpenAI logo: two overlapping pentagons / asterisk */}
      <line x1="12" y1="3"  x2="12" y2="21" stroke="white" strokeWidth="2"   strokeLinecap="round" />
      <line x1="3"  y1="7.5" x2="21" y2="16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="3"  y1="16.5" x2="21" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="#10a37f" stroke="white" strokeWidth="1.5" />
    </svg>
  </div>
);

/* GstarCAD Mobile — blue, gold 5-pointed star */
const GstarCADIcon = () => (
  <div className="w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: "#1565C0" }}>
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        d="M12 2L14.09 8.26L20.9 9.27L15.97 14.14L17.18 21L12 18.27L6.82 21L8.03 14.14L3.1 9.27L9.91 8.26Z"
        fill="#FFD700"
      />
    </svg>
  </div>
);

/* ── Software data ───────────────────────────────── */

const software = [
  {
    id: "autocad",
    name: "AutoCAD",
    tag: "CAD Drafting",
    Icon: () => <SimpleIcon path={siAutocad.path} bg={`#${siAutocad.hex}`} fg="white" />,
  },
  {
    id: "civil3d",
    name: "Civil 3D",
    tag: "Road & BIM",
    Icon: () => <SimpleIcon path={siAutodesk.path} bg="#0696D7" fg="white" />,
  },
  {
    id: "excel",
    name: "Excel",
    tag: "Data & Reports",
    Icon: ExcelIcon,
  },
  {
    id: "canva",
    name: "Canva",
    tag: "Visuals",
    Icon: CanvaIcon,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    tag: "AI Tools",
    Icon: ChatGPTIcon,
  },
  {
    id: "gstarcad",
    name: "GstarCAD Mobile",
    tag: "Field Mobile",
    Icon: GstarCADIcon,
  },
];

/* ── Equipment ───────────────────────────────────── */

const equipment = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#B87333" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3"  x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="21" />
        <line x1="3"  y1="12" x2="6"  y2="12" />
        <line x1="18" y1="12" x2="21" y2="12" />
        <line x1="5.6"  y1="5.6"  x2="7.8"  y2="7.8" />
        <line x1="16.2" y1="16.2" x2="18.4" y2="18.4" />
        <line x1="18.4" y1="5.6"  x2="16.2" y2="7.8" />
        <line x1="7.8"  y1="16.2" x2="5.6"  y2="18.4" />
      </svg>
    ),
    name: "Total Station",
    desc: "Setting out, alignment control & structural monitoring with sub-mm precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#B87333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 7H16Z" fill="#B87333" fillOpacity="0.3" />
        <line x1="12" y1="7"  x2="12" y2="12" />
        <circle cx="12" cy="14" r="3" />
        <path d="M6 20C6 17.5 7.5 15.5 10 15" />
        <path d="M18 20C18 17.5 16.5 15.5 14 15" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    ),
    name: "GPS / GNSS",
    desc: "Long-range coordinate systems, control networks & remote terrain surveys.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#B87333" strokeWidth="1.8" strokeLinecap="round">
        <line x1="3"  y1="12" x2="21" y2="12" />
        <line x1="7"  y1="8"  x2="7"  y2="12" />
        <line x1="17" y1="8"  x2="17" y2="12" />
        <path d="M5 12L5 16Q12 19 19 16L19 12" strokeDasharray="2 2" />
        <circle cx="12" cy="8" r="1.5" fill="#B87333" />
      </svg>
    ),
    name: "Auto Level",
    desc: "High-accuracy differential levelling for benchmarks and structural levels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#B87333" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <line x1="9" y1="6" x2="9" y2="18" />
        <circle cx="6" cy="8" r="0.8" fill="#B87333" />
      </svg>
    ),
    name: "Digital Level",
    desc: "Electronic digital levelling for precision foundation and deck verification.",
  },
];

/* ── Field capabilities ──────────────────────────── */

const field = [
  "Setting Out & Alignment Control",
  "Earthworks & Excavation Monitoring",
  "Survey Control Systems",
  "Site Coordination & QC",
  "As-Built Documentation",
  "Deformation Monitoring",
];

/* ── Framer Motion variants ──────────────────────── */

const eqVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const eqItem: Variants = {
  hidden:  { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const fieldVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const fieldItem: Variants = {
  hidden:  { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/* ── Component ───────────────────────────────────── */

export function Skills() {
  return (
    <section className="py-10 md:py-24 bg-card relative section-depth overflow-hidden" id="skills">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/8 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/4 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-7 md:mb-12"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-2 md:mb-3">Core Competencies</p>
          <h3 className="text-xl md:text-5xl font-serif font-bold text-white">
            Technical & Field <span className="text-muted-foreground font-light italic">Skills</span>
          </h3>
          <p className="mt-2 md:mt-3 text-[0.82rem] md:text-base text-muted-foreground max-w-lg mx-auto leading-snug md:leading-relaxed">
            Professional-grade survey instruments, modern software tools, and AI-enhanced workflows for complex infrastructure projects.
          </p>
        </motion.div>

        {/* ── Equipment ── */}
        <div className="mb-7 md:mb-10">
          <p className="text-[10px] font-mono text-primary/55 tracking-[0.35em] uppercase mb-3 md:mb-5 text-center">Survey Equipment</p>
          <motion.div
            variants={eqVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {equipment.map((eq) => (
              <motion.div
                key={eq.name}
                variants={eqItem}
                className="glass-card border border-white/6 rounded-sm p-4 md:p-5 premium-card group hover:border-primary/28 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-sm border border-primary/28 bg-primary/7 flex items-center justify-center mx-auto mb-3">
                  {eq.icon}
                </div>
                <h5 className="font-serif font-semibold text-white text-sm md:text-[0.95rem] mb-1.5 leading-tight">{eq.name}</h5>
                <p className="text-[10px] md:text-[11px] text-muted-foreground leading-snug mb-3">{eq.desc}</p>
                <span className="inline-block px-2.5 py-0.5 rounded-full border border-primary/22 bg-primary/5 text-[9px] md:text-[10px] font-mono text-primary/75 tracking-wider uppercase">
                  Expert
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Software + Field ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 max-w-5xl mx-auto">

          {/* Software & AI */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Software grid */}
            <div className="glass-card border border-white/6 p-4 md:p-6 rounded-sm premium-card">
              <h4 className="text-[0.85rem] md:text-base font-serif font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-sm border border-primary/28 bg-primary/7">
                  <Monitor size={13} className="text-primary" />
                </div>
                Software & Tools
              </h4>
              <div className="grid grid-cols-3 gap-2.5 md:gap-3">
                {software.map((sw) => (
                  <motion.div
                    key={sw.id}
                    whileHover={{ y: -2, borderColor: "rgba(184,115,51,0.38)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center gap-1.5 p-2.5 md:p-3 rounded-sm border border-white/6 bg-white/[0.02] cursor-default text-center"
                  >
                    <sw.Icon />
                    <span className="text-white/85 text-[10px] md:text-xs font-medium leading-tight">{sw.name}</span>
                    <span className="text-[9px] text-muted-foreground/55 font-mono">{sw.tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Workflows callout */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative overflow-hidden rounded-sm border border-primary/28 p-4 md:p-5"
              style={{ background: "linear-gradient(135deg, rgba(184,115,51,0.07) 0%, rgba(15,61,46,0.09) 100%)" }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm border border-primary/35 bg-primary/9 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={13} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary tracking-[0.28em] uppercase mb-1.5">AI-Assisted Workflows</p>
                  <p className="text-[11px] md:text-sm text-white/80 leading-relaxed">
                    Using <span className="text-primary font-medium">ChatGPT</span> and AI tools to auto-generate as-built reports, process field data, and produce professional survey documentation — reducing manual reporting time significantly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Field Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.18 }}
            className="lg:col-span-5 glass-card border border-white/6 p-4 md:p-6 rounded-sm premium-card relative overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/6 rounded-full blur-3xl" />
            <h4 className="text-[0.85rem] md:text-base font-serif font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-sm border border-primary/28 bg-primary/7">
                <HardHat size={13} className="text-primary" />
              </div>
              Field Capabilities
            </h4>
            <motion.ul
              className="space-y-2.5 md:space-y-4"
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {field.map((skill) => (
                <motion.li
                  key={skill}
                  variants={fieldItem}
                  className="flex items-center gap-2 md:gap-3 group cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-muted-foreground group-hover:text-white/85 transition-colors duration-300 text-[0.8rem] md:text-sm">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
