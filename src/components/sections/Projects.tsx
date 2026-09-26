import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Building2, Target, AlertTriangle, Lightbulb, Star, Calendar, MapPin, Layers } from "lucide-react";

// شعارات الشركات مصلحة بالمسارات والأسماء الحقيقية في مجلدك
import hassanLogo from "../../assets/hassan-allam.jpeg";
import rabatLogo from "../../assets/Rab.jpg";

import soadaaLogo from "../../assets/el-soadaa.jpg";

// ── Rail Bridge (Hassan Allam) ──────────────────
import railCover from "../../assets/dji-20251111164339-0251-d_1775751492679.jpeg";
import railImg2 from "../../assets/work-of-scope_1775751492704.jpg";
import railImg3 from "../../assets/list-2_1775751492706.jpg";
import railImg4 from "../../assets/dji-20251111163919-0237-d_1775751492708.jpeg";
import railImg5 from "../../assets/dji-20251111164335-0250-d_1775751492711.jpeg";
import railImg6 from "../../assets/FB_IMG_1775651592518_1775751492713.jpg";
import railImg7 from "../../assets/FB_IMG_1775650976325_1775751492715.jpg";
import railImg8 from "../../assets/FB_IMG_1775650595432_1775751492718.jpg";
import railImg9 from "../../assets/FB_IMG_1775650597955_1775751492720.jpg";
import railImg10 from "../../assets/FB_IMG_1775651008962_1775751492722.jpg";
import railImg11 from "../../assets/FB_IMG_1775650998758_1775751492724.jpg";
import railImg12 from "../../assets/FB_IMG_1775651596789_1775751492725.jpg";
import railImg13 from "../../assets/FB_IMG_1775648608333_1775751492727.jpg";

// ── Regional Road Bridge (Hassan Allam) ────────
import regionalCover from "../../assets/6129813061675676275_1775751211648.jpg";
import regionalImg2 from "../../assets/801_(1)_1775751211698.jpg";
import regionalImg3 from "../../assets/806_1775751211696.jpg";
import regionalImg4 from "../../assets/9717066341675676277_1775751211701.jpg";
import regionalImg5 from "../../assets/20708955311680960686_1775751211704.jpg";
import regionalImg6 from "../../assets/hq720_(1)_1775751211702.jpg";

// ── Sandoub Bridge (El Soadaa) ──────────────────
import sandoubCover from "../../assets/1-2-3-3-jpg_(1)_1775750247042.jpg";
import sandoubImg2 from "../../assets/2016-635992062662449147-244_1775750247060.jpg";
import sandoubImg3 from "../../assets/2016-635992062830611757-61_1775750247065.jpg";
import sandoubImg4 from "../../assets/picture6jpg_1775750247067.jpg";
import sandoubImg5 from "../../assets/picture7jpg_1775750247069.jpg";
import sandoubImg6 from "../../assets/34009--كوبري-سندوب-(2)_1775750247070.jpg";


// ── Rabat Foundation ───────────────────────────
import rabatCover from "../../assets/img-20230602-wa0046-AoPEZg1ZrGCZqb4M_1775751896689.jpg";
import rabatImg4 from "../../assets/1591971335357-Yan26E6Q5Bs3L83b_1775751896726.jpeg";
import rabatImg3 from "../../assets/dqtfml00otjga3odnpplr9spgcjgnqcibt6ejfn6kom-_plaintext_6382130_1775751896723.jpg";
import rabatImg5 from "../../assets/img-20230602-wa0043-AGBrMQjMDKi88gPw_1775751896727.jpg";
import rabatImg6 from "../../assets/1593113649083-YX4Z1e2GvBtZkND4_1775751896729.jpeg";

// ── Quarry Bridge (Hassan Allam) ──────────────
import quarryCover from "../../assets/1-2-jpg_1775750522358.jpg";
import quarryImg2 from "../../assets/FB_IMG_1775646527269_1775750522390.jpg";
import quarryImg3 from "../../assets/FB_IMG_1775646521637_1775750522393.jpg";
import quarryImg4 from "../../assets/طريق-القاهرة-الاسماعيلية-الصحراوىjpg_1775750522395.jpg";
import quarryImg5 from "../../assets/FB_IMG_1775646472511_1775750522397.jpg";
import quarryImg6 from "../../assets/2-1-jpg_1775750522399.jpg";

// ── Dakhla Road (El Soadaa) ──────────────────────
import dakhlaImg1 from "../../assets/طريق-الواحات-البحرية-الفرافرة-0000jpg_1775750731955.jpg";
import dakhlaImg2 from "../../assets/doneشرق-العوينات-1jpg_1775750731986-Tn.jpg";

import dakhlaImg3 from "../../assets/doneشرق-العوينات-2jpg_1775750731983.jpg";
import dakhlaImg4 from "../../assets/doneالعوينات-3jpg_1775750731987.jpg";

// ── Mostaqbal City Bridge (El Soadaa) ─────────
import mostaqbalCover from "../../assets/images_1775750642045.jpeg";
import mostaqbalImg2 from "../../assets/FB_IMG_1775646834309_1775750642079.jpg";
import mostaqbalImg3 from "../../assets/FB_IMG_1775646830143_1775750642081.jpg";
import mostaqbalImg4 from "../../assets/FB_IMG_1775646826493_1775750642083.jpg";
import mostaqbalImg5 from "../../assets/FB_IMG_1775646820507_1775750642085.jpg";
import mostaqbalImg6 from "../../assets/FB_IMG_1775646814829_1775750642086.jpg";

interface ProjectImage {
  src: string;
  phase: string;
}


interface Project {
  id: string;
  title: string;
  location: string;
  period: string;
  role: string;
  description: string;
  responsibilities: string[];
  challenges: string;
  solutions: string;
  images: ProjectImage[];
  featured?: boolean;
}

interface Company {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  period: string;
  projects: Project[];
}

const companies: Company[] = [
  // ── 1. RABAT FOUNDATION (Most Recent — UAE) ──────────────────────────
  {
    id: "rabat",
    name: "Rabat Foundation (Piling & Shoring Specialist)",
    subtitle: "UAE Infrastructure — Ongoing",
    logo: rabatLogo,
    period: "Sep 2025 – Present",
    projects: [
      {
        id: "rabat-dubai",
        title: "Infrastructure & Foundation Projects",
        location: "Dubai, UAE",
        period: "Sep 2025 – Present",
        role: "Surveyor",
        description: "Excavation monitoring, shoring alignment control, and piling survey operations across active foundation and infrastructure projects in Dubai.",
        responsibilities: [
          "Pier positioning and beam alignment for bridge structures",
          "Foundation survey and level control",
          "Coordination with multiple contractor teams on-site",
          "As-built surveys and quality documentation",
        ],
        challenges: "Critical coordination required between multiple contractor teams operating simultaneously on interconnected structures in a fast-paced UAE environment.",
        solutions: "Established a unified survey control system across all teams; regular joint inspections to maintain consistency across contract boundaries.",
        images: [
          { src: rabatCover, phase: "Overview" },
          { src: rabatImg3, phase: "Construction" },
          { src: rabatImg4, phase: "Execution" },
          { src: rabatImg5, phase: "Execution" },
          { src: rabatImg6, phase: "Final" },
        ],
      },
    ],
  },

  // ── 2. HASSAN ALLAM (2021 – 2025) ────────────────────────────────────
  {
    id: "hassan",
    name: "Hassan Allam Roads & Bridges",
    subtitle: "Major Infrastructure & Bridge Projects",
    logo: hassanLogo,
    period: "2021 – 2025",
    projects: [
      // Newest first
      {
        id: "rail",
        title: "High-Speed Rail Bridge",
        location: "6th of October City, Egypt",
        period: "Jan 2024 – Jul 2025",
        role: "Surveyor",
        description: "Bridge construction surveying, alignment control, and structural setting out for high-speed rail infrastructure in 6th of October City, Egypt.",
        responsibilities: [
          "Setting out bridge piers and bearings with sub-millimeter precision",
          "Beam alignment and placement control during crane lifts",
          "Drone-assisted aerial survey and documentation",
          "Continuous monitoring using total station and GPS systems",
          "Daily coordination with structural engineers and consultants",
          "Survey quality reports and as-built documentation",
        ],
        challenges: "Extreme precision requirements during heavy beam lifting operations; coordination across multiple construction fronts simultaneously; rail-grade accuracy tolerances.",
        solutions: "Continuous real-time monitoring with total station during all critical lifts; strict coordination protocols with lifting teams; redundant control points established across the entire bridge alignment.",
        images: [
          { src: railCover, phase: "Overview" },
          { src: railImg2, phase: "Construction" },
          { src: railImg3, phase: "Construction" },
          { src: railImg4, phase: "Construction" },
          { src: railImg5, phase: "Construction" },
          { src: railImg6, phase: "Execution" },
          { src: railImg7, phase: "Execution" },
          { src: railImg8, phase: "Execution" },
          { src: railImg9, phase: "Execution" },
          { src: railImg10, phase: "Execution" },
          { src: railImg11, phase: "Execution" },
          { src: railImg12, phase: "Execution" },
          { src: railImg13, phase: "Final" },
        ],
        featured: true,
      },
      {
        id: "regional",
        title: "Regional Road Bridge",
        location: "New Administrative Capital, Egypt",
        period: "Dec 2021 – Dec 2023",
        role: "Surveyor",
        description: "Road corridor surveying, interchange setting out, and infrastructure support works at Egypt's New Administrative Capital.",
        responsibilities: [
          "Pier positioning based on engineering drawings",
          "Beam alignment and deck level verification",
          "Control survey establishment and maintenance",
          "Coordination with consultants on technical specifications",
        ],
        challenges: "Critical accuracy requirements in newly developed capital city with strict quality standards and international specifications.",
        solutions: "Established comprehensive control network from primary benchmarks; regular cross-checking with design drawings and consultant verification.",
        images: [
          { src: regionalCover, phase: "Overview" },
          { src: regionalImg2, phase: "Construction" },
          { src: regionalImg3, phase: "Construction" },
          { src: regionalImg4, phase: "Execution" },
          { src: regionalImg5, phase: "Execution" },
          { src: regionalImg6, phase: "Final" },
        ],
      },
      {
        id: "quarry",
        title: "Quarry Bridge",
        location: "New Administrative Capital, Egypt",
        period: "Dec 2021 – Dec 2023",
        role: "Surveyor",
        description: "Setting out, alignment control, and structural monitoring for bridge construction works in challenging quarry terrain.",
        responsibilities: [
          "Layout and level control for bridge structures",
          "Setting out foundations and pier positions",
          "Coordinate with design and construction teams",
          "Monitoring earthworks and excavation levels",
        ],
        challenges: "Uneven ground, active quarry operations, and harsh environmental conditions requiring precise layout control.",
        solutions: "Deployed adaptive survey techniques tailored for unstable terrain; implemented daily control benchmarks and GPS-total station cross-verification.",
        images: [
          { src: quarryCover, phase: "Overview" },
          { src: quarryImg2, phase: "Slopes" },
          { src: quarryImg3, phase: "Excavation" },
          { src: quarryImg4, phase: "Foundations" },
          { src: quarryImg5, phase: "Structural" },
          { src: quarryImg6, phase: "Completion" },
        ],
      },
    ],
  },

  // ── 3. EL SOADAA GROUP (2014 – 2021) ─────────────────────────────────
  {
    id: "soadaa",
    name: "El Soadaa Group (S.G)",
    subtitle: "Early Career — Bridges & Roads Infrastructure Projects",
    logo: soadaaLogo,
    period: "2014 – 2021",
    projects: [
      // Newest first
      {
        id: "dakhla",
        title: "Dakhla Road — East Owainat (New Valley)",
        location: "East Owainat — Al Wahat Road, Egypt",
        period: "Jun 2021 – Nov 2021",
        role: "Surveyor",
        description: "Topographic surveying and road alignment for the Toshka desert road project spanning remote terrain between East Owainat and Al Wahat.",
        responsibilities: [
          "Topographic surveying across long desert stretches",
          "Road alignment and grading control",
          "GPS-based coordinate system setup",
          "Cut & fill volume calculations",
        ],
        challenges: "Maintaining alignment accuracy over extremely long distances in remote desert with limited reference points.",
        solutions: "Integrated continuous GPS operations with total station verifications; established primary control network at key intervals.",
        images: [
          { src: dakhlaImg1, phase: "Overview" },
          { src: dakhlaImg2, phase: "Construction" },
          { src: dakhlaImg3, phase: "Execution" },
          { src: dakhlaImg4, phase: "Final" },
        ],
      },
      {
        id: "mostaqbal",
        title: "Mostaqbal City Bridge",
        location: "Ismailia Desert Road, Egypt",
        period: "Jun 2020 – May 2021",
        role: "Surveyor",
        description: "Structural survey and setting out for the Mostaqbal City overpass bridge along the Ismailia Desert Road.",
        responsibilities: [
          "Setting out column positions and deck levels",
          "Beam alignment and bearing placement",
          "Control survey network establishment",
          "Coordination with structural engineers",
        ],
        challenges: "High traffic road environment with restricted access windows and tight construction tolerances.",
        solutions: "Planned surveying operations during low-traffic windows; used reflectorless total station for safe measurements.",
        images: [
          { src: mostaqbalCover, phase: "Overview" },
          { src: mostaqbalImg2, phase: "Construction" },
          { src: mostaqbalImg3, phase: "Construction" },
          { src: mostaqbalImg4, phase: "Execution" },
          { src: mostaqbalImg5, phase: "Execution" },
          { src: mostaqbalImg6, phase: "Final" },
        ],
      },
      {
        id: "middle",
        title: "Middle Ring Road Bridge",
        location: "Ismailia Desert Road, Egypt",
        period: "Sep 2016 – Dec 2017",
        role: "Surveyor",
        description: "Survey and setting-out for the Middle Ring Road interchange bridge along the Ismailia Desert Road.",
        responsibilities: [
          "Cut & fill monitoring and asphalt level verification",
          "Bridge column layout and level control",
          "Survey control network establishment",
          "Quality check on structural alignment",
        ],
        challenges: "Large-scale site spanning multiple active work zones with simultaneous construction activities.",
        solutions: "Implemented daily survey control protocols and enhanced inter-team coordination across all active zones.",
        images: [
          { src: quarryCover, phase: "Overview" },
          { src: quarryImg2, phase: "Construction" },
          { src: quarryImg3, phase: "Construction" },
          { src: quarryImg4, phase: "Execution" },
          { src: quarryImg5, phase: "Execution" },
          { src: quarryImg6, phase: "Final" },
        ],
      },
      {
        id: "sandoub",
        title: "Sandob Bridge",
        location: "Mansoura, Egypt",
        period: "Sep 2014 – Aug 2016",
        role: "Survey Engineer Assistant",
        description: "Foundation and structural survey for the Sandoub elevated bridge in Mansoura — first major project establishing core field skills.",
        responsibilities: [
          "Setting out column positions and deck levels",
          "Foundation layout and pile positioning",
          "Level control during concrete pours",
          "Supporting senior survey team operations",
        ],
        challenges: "Complex urban geometry with restricted spatial constraints and active traffic management.",
        solutions: "High-precision surveying techniques paired with repeated cross-checks and close coordination with site management.",
        images: [
          { src: sandoubCover, phase: "Overview" },
          { src: sandoubImg2, phase: "Construction" },
          { src: sandoubImg3, phase: "Construction" },
          { src: sandoubImg4, phase: "Execution" },
          { src: sandoubImg5, phase: "Execution" },
          { src: sandoubImg6, phase: "Final" },
        ],
      },
    ],
  },
];

interface LightboxState {
  images: ProjectImage[];
  index: number;
}

function phaseColor(phase: string) {
  switch (phase) {
    case "Overview": return "text-blue-400 border-blue-400/40 bg-blue-400/10";
    case "Construction": return "text-amber-400 border-amber-400/40 bg-amber-400/10";
    case "Execution": return "text-primary border-primary/40 bg-primary/10";
    case "Final": return "text-green-400 border-green-400/40 bg-green-400/10";
    default: return "text-muted-foreground border-white/20 bg-white/5";
  }
}

function Lightbox({ state, onClose, onNext, onPrev }: {
  state: LightboxState;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const img = state.images[state.index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-primary text-white hover:text-primary transition-all z-10"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-primary text-white hover:text-primary transition-all z-10"
      >
        <ChevronRight size={22} />
      </button>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-destructive text-white hover:text-destructive transition-all z-10"
      >
        <X size={18} />
      </button>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <span className={`px-2 py-0.5 rounded-full text-xs font-mono border ${phaseColor(img.phase)}`}>
          {img.phase}
        </span>
      </div>
      <motion.img
        key={state.index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={img.src}
        alt={img.phase}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {state.images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === state.index ? "bg-primary w-4" : "bg-white/30"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-white/40 font-mono z-10">
        {state.index + 1} / {state.images.length}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, onOpenGallery }: {
  project: Project;
  onOpenGallery: (images: ProjectImage[], index: number) => void;
}) {
  const [showDetail, setShowDetail] = useState(false);
  const phases = [...new Set(project.images.map(i => i.phase))];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="premium-card group bg-card border border-white/8 rounded-sm overflow-hidden hover:border-primary/35 transition-all duration-400"
      >
        {project.images.length > 0 ? (
          <div
            className="relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: '16/9', minHeight: '220px' }}
            onClick={() => onOpenGallery(project.images, 0)}
          >
            <img
              src={project.images[0].src}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.06]"
              style={{ transition: 'filter 0.8s ease, transform 0.8s ease' }}
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.55) 35%, rgba(8,8,8,0.1) 70%, transparent 100%)'
            }} />
            <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap z-10">
              {phases.map(p => (
                <span key={p} className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${phaseColor(p)}`}>{p}</span>
              ))}
            </div>
            <div className="absolute top-3 right-3 z-10 bg-black/60 border border-white/15 rounded-sm px-2 py-1 text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.images.length} photos ↗
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-8">
              <p className="text-[10px] font-mono text-primary/80 tracking-[0.2em] uppercase mb-1">{project.period}</p>
              <h4 className="font-serif text-white leading-snug mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>{project.title}</h4>
              <p className="text-xs text-primary/90 font-mono flex items-center gap-1.5">
                <span className="w-3 h-[1px] bg-primary/60 inline-block" />
                {project.location}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden bg-card/40 border-b border-white/6" style={{ aspectRatio: '16/9', minHeight: '220px' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'linear-gradient(135deg, rgba(184,115,51,0.05) 0%, rgba(15,61,46,0.08) 100%)' }}>
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>
              <p className="text-xs font-mono text-muted-foreground/60 tracking-[0.3em] uppercase">Documentation in progress</p>
              <p className="text-[10px] font-mono text-primary/40 tracking-wider">Active UAE Project</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-8"
              style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 100%)' }}>
              <p className="text-[10px] font-mono text-primary/80 tracking-[0.2em] uppercase mb-1">{project.period}</p>
              <h4 className="font-serif text-white leading-snug mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>{project.title}</h4>
              <p className="text-xs text-primary/90 font-mono flex items-center gap-1.5">
                <span className="w-3 h-[1px] bg-primary/60 inline-block" />
                {project.location}
              </p>
            </div>
          </div>
        )}

        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>

          <div className="flex gap-2">
            <button
              onClick={() => setShowDetail(true)}
              className="flex-1 py-2.5 border border-white/15 text-white/70 text-xs font-mono tracking-widest uppercase hover:border-primary/60 hover:text-primary transition-all duration-300 rounded-sm"
            >
              Details
            </button>
            {project.images.length > 0 && (
              <button
                onClick={() => onOpenGallery(project.images, 0)}
                className="btn-primary-premium flex-1 py-2.5 border border-primary/50 text-primary text-xs font-mono tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
              >
                Gallery ↗
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowDetail(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card border border-white/10 rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {project.images.length > 0 ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={project.images[0].src} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <button
                    onClick={() => setShowDetail(false)}
                    className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-destructive text-white hover:text-destructive transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="relative p-6 border-b border-white/6 flex items-center justify-between">
                  <p className="text-xs font-mono text-primary/60 tracking-widest uppercase">Active UAE Project</p>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="w-9 h-9 flex items-center justify-center bg-black/40 border border-white/20 rounded-full hover:border-destructive text-white hover:text-destructive transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-muted-foreground mb-4">
                  <Building2 size={12} className="text-primary" />
                  {project.period} · {project.location}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="space-y-5">
                  <div>
                    <h5 className="text-xs font-mono text-primary flex items-center gap-2 mb-3 uppercase tracking-wider">
                      <Target size={14} /> Responsibilities
                    </h5>
                    <ul className="space-y-1.5">
                      {project.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="text-primary mt-1">—</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-destructive/30">
                    <h5 className="text-xs font-mono text-destructive flex items-center gap-2 mb-2 uppercase tracking-wider">
                      <AlertTriangle size={14} /> Challenge
                    </h5>
                    <p className="text-sm text-white/80 leading-relaxed">{project.challenges}</p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/50 bg-secondary/5 p-4 rounded-r-sm">
                    <h5 className="text-xs font-mono text-primary flex items-center gap-2 mb-2 uppercase tracking-wider">
                      <Lightbulb size={14} /> Solution
                    </h5>
                    <p className="text-sm text-white/90 leading-relaxed">{project.solutions}</p>
                  </div>
                </div>

                {project.images.length > 0 && (
                  <button
                    onClick={() => { setShowDetail(false); onOpenGallery(project.images, 0); }}
                    className="mt-6 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-mono tracking-widest uppercase rounded-sm transition-all"
                  >
                    View Full Gallery ({project.images.length} Photos)
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FeaturedProject({ project, onOpenGallery }: {
  project: Project;
  onOpenGallery: (images: ProjectImage[], index: number) => void;
}) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="mb-14 group"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 80px rgba(184,115,51,0.04)' }} />

        <div className="relative border border-primary/35 rounded-sm overflow-hidden bg-card copper-glow-box hover:border-primary/70 transition-all duration-500"
          style={{ boxShadow: '0 0 0 1px rgba(184,115,51,0.1), 0 30px 80px rgba(0,0,0,0.5)' }}>

          {/* Featured badge */}
          <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(184,115,51,0.95)', boxShadow: '0 0 20px rgba(184,115,51,0.4)' }}>
            <Star size={11} className="text-primary-foreground fill-primary-foreground" />
            <span className="text-xs font-mono font-bold text-primary-foreground uppercase tracking-widest">Featured Project</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[620px] overflow-hidden cursor-pointer"
              onClick={() => onOpenGallery(project.images, 0)}
            >
              <img
                src={project.images[0].src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.04]"
                style={{ transition: 'filter 1.2s ease, transform 1.2s ease', filter: 'brightness(0.85) contrast(1.05)' }}
              />
              {/* Cinematic gradient — desktop right fade */}
              <div className="absolute inset-0 hidden lg:block" style={{
                background: 'linear-gradient(to right, rgba(8,8,8,0.05) 0%, rgba(8,8,8,0.02) 50%, rgba(10,10,10,0.9) 100%)'
              }} />
              {/* Mobile bottom fade */}
              <div className="absolute inset-0 lg:hidden" style={{
                background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)'
              }} />
              {/* Vignette */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)'
              }} />

              {/* Photo count pill */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-mono text-white/80 bg-black/55 border border-white/15 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {project.images.length} site photos — click to view gallery
              </div>
            </div>

            <div className="p-5 lg:p-12 flex flex-col justify-center">
              <p className="text-xs font-mono text-muted-foreground mb-1.5 md:mb-2">{project.period}</p>
              <h3 className="featured-project-title text-xl lg:text-4xl font-serif font-bold text-white mb-1.5 md:mb-2 leading-tight">{project.title}</h3>
              <p className="text-primary font-mono text-xs md:text-sm mb-3 md:mb-4">{project.location}</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">{project.description}</p>

              <div className="space-y-2 md:space-y-3 mb-5 md:mb-8">
                {project.responsibilities.slice(0, 4).map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {r}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-8">
                {project.images.slice(1, 4).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-video overflow-hidden rounded-sm cursor-pointer border border-white/10 hover:border-primary transition-colors"
                    onClick={() => onOpenGallery(project.images, i + 1)}
                  >
                    <img src={img.src} alt={img.phase} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDetail(true)}
                  className="flex-1 py-3 border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:border-primary hover:text-primary transition-all rounded-sm"
                >
                  Full Details
                </button>
                <button
                  onClick={() => onOpenGallery(project.images, 0)}
                  className="flex-1 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-mono tracking-widest uppercase transition-all rounded-sm"
                >
                  View All {project.images.length} Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowDetail(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card border border-white/10 rounded-sm max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <img src={project.images[0].src} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-primary/90 px-3 py-1 rounded-full">
                  <Star size={11} className="text-primary-foreground fill-primary-foreground" />
                  <span className="text-xs font-mono font-bold text-primary-foreground uppercase">Featured</span>
                </div>
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-destructive text-white hover:text-destructive transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{project.title}</h3>
                <p className="text-primary font-mono text-sm mb-4">{project.location} · {project.period}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-5">
                  <div>
                    <h5 className="text-xs font-mono text-primary flex items-center gap-2 mb-3 uppercase tracking-wider">
                      <Target size={14} /> Responsibilities
                    </h5>
                    <ul className="space-y-1.5">
                      {project.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="text-primary mt-1">—</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-destructive/30">
                    <h5 className="text-xs font-mono text-destructive flex items-center gap-2 mb-2 uppercase tracking-wider">
                      <AlertTriangle size={14} /> Challenge
                    </h5>
                    <p className="text-sm text-white/80 leading-relaxed">{project.challenges}</p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/50 bg-secondary/5 p-4 rounded-r-sm">
                    <h5 className="text-xs font-mono text-primary flex items-center gap-2 mb-2 uppercase tracking-wider">
                      <Lightbulb size={14} /> Solution
                    </h5>
                    <p className="text-sm text-white/90 leading-relaxed">{project.solutions}</p>
                  </div>
                </div>

                <button
                  onClick={() => { setShowDetail(false); onOpenGallery(project.images, 0); }}
                  className="mt-6 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-mono tracking-widest uppercase rounded-sm"
                >
                  Open Full Gallery ({project.images.length} Photos)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CompanySection({ company }: { company: Company }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openGallery = (images: ProjectImage[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null);
  const prevImage = () => setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null);

  const featuredProject = company.projects.find(p => p.featured);
  const regularProjects = company.projects.filter(p => !p.featured);

  return (
    <div className="py-12 md:py-24 border-t border-white/6 section-depth">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-4 md:gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 flex items-center justify-center bg-card border border-white/10 rounded-sm group hover:border-primary/50 transition-all duration-400 cursor-default copper-glow-box-hover"
            style={{ width: '88px', height: '70px', minWidth: '88px', padding: '8px' }}>
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              decoding="async"
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{ maxWidth: '72px', maxHeight: '54px' }}
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase mb-1.5">{company.period}</p>
            <h3 className="company-name font-serif text-white leading-snug" style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.35, opacity: 0.9 }}>{company.name}</h3>
            <p className="text-muted-foreground text-xs md:text-sm mt-0.5 md:mt-1 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-primary/40 inline-block" />
              {company.subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono border px-5 py-2.5 rounded-sm"
          style={{ borderColor: 'rgba(184,115,51,0.25)', color: 'rgba(184,115,51,0.8)', background: 'rgba(184,115,51,0.05)' }}>
          <Layers size={13} />
          {company.projects.length} Project{company.projects.length > 1 ? "s" : ""}
        </div>
      </motion.div>

      {featuredProject && (
        <FeaturedProject project={featuredProject} onOpenGallery={openGallery} />
      )}

      {regularProjects.length > 0 && (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${regularProjects.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-4 md:gap-6`}>
          {regularProjects.map(project => (
            <ProjectCard key={project.id} project={project} onOpenGallery={openGallery} />
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            state={lightbox}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projects() {
  return (
    <section className="bg-background relative overflow-hidden" id="projects">
      {/* Depth background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.3), transparent)' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="pt-14 md:pt-28 pb-5 md:pb-10"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-3 md:mb-5">Case Studies</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
            <div>
              <h3 className="text-[2.5rem] md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.92]">
                Engineering
                <br />
                <span className="italic font-light text-muted-foreground/70">Portfolio</span>
              </h3>
            </div>
            <div className="md:text-right max-w-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                8 large-scale infrastructure projects across 3 companies — bridges, railways, and roads spanning Egypt and the UAE.
              </p>
              <div className="flex md:justify-end gap-6">
                {[["8+", "Projects"], ["13", "Rail Images"], ["2", "Countries"]].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <p className="text-2xl font-serif font-bold text-primary">{n}</p>
                    <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {companies.map(company => (
          <CompanySection key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
}
