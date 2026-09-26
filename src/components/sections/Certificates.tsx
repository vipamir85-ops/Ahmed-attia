import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ZoomIn, Award, Calendar, Building2 } from "lucide-react";
import cert1 from "../../assets/CamScanner_08-04-2020_08.17.25_5_1775753457239.jpg";
import cert2 from "../../assets/CamScanner_08-04-2020_08.17.25_6_1775753457266.jpg";
import cert3 from "../../assets/IMG20210822121020_1775753457270.jpg";


interface Certificate {
  id: number;
  company: string;
  project: string;
  role: string;
  period: string;
  image: string;
  type: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    company: "El Soadaa Contracting Co.",
    project: "Sandob Bridge — Mansoura",
    role: "Surveyor",
    period: "Sep 2014 – Aug 2016",
    image: cert1,
    type: "Experience Certificate",
  },
  {
    id: 2,
    company: "El Soadaa Contracting Co.",
    project: "Middle Ring Road Bridge",
    role: "Surveyor",
    period: "Sep 2016 – Dec 2017",
    image: cert2,
    type: "Experience Certificate",
  },
  {
    id: 3,
    company: "Ministry of Manpower — Egypt",
    project: "Skill Assessment — Surveyor",
    role: "Certified Surveyor",
    period: "2021",
    image: cert3,
    type: "Skill Level Certificate",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="py-14 md:py-24 bg-background relative border-t border-white/5" id="certificates">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-mono text-primary tracking-[0.3em] uppercase mb-4">Verified Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Experience <span className="italic font-light text-muted-foreground">Certificates</span>
          </h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Official documentation of professional experience and certified skill assessments.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group bg-card border border-white/8 rounded-sm overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-400 cursor-pointer"
              onClick={() => { setSelected(cert); setZoomed(false); }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <motion.img
                  src={cert.image}
                  alt={cert.type}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-600"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/15 border border-primary/30 rounded-full mb-3">
                  <Award size={11} className="text-primary" />
                  <span className="text-xs font-mono text-primary">{cert.type}</span>
                </div>

                <h4 className="text-base font-serif font-bold text-white mb-1 leading-snug">{cert.company}</h4>
                <p className="text-sm text-primary/80 mb-1">{cert.project}</p>

                <div className="flex items-center gap-3 mt-3 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building2 size={11} className="text-primary/60" />
                    {cert.role}
                  </span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-primary/60" />
                    {cert.period}
                  </span>
                </div>

                <div className="w-full py-2.5 border border-primary/40 text-primary text-xs font-mono tracking-widest uppercase text-center rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  View Certificate
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => { if (zoomed) setZoomed(false); else setSelected(null); }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className={`relative bg-card border border-white/10 rounded-sm overflow-hidden shadow-2xl ${zoomed ? "max-w-5xl w-full" : "max-w-2xl w-full"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div>
                  <p className="text-xs font-mono text-primary tracking-wider uppercase">{selected.type}</p>
                  <p className="text-sm text-white font-medium">{selected.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={() => setZoomed(!zoomed)}
                    className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm hover:border-primary text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    title={zoomed ? "Zoom out" : "Zoom in"}
                  >
                    <ZoomIn size={15} />
                  </motion.button>
                  <motion.button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm hover:border-destructive text-muted-foreground hover:text-destructive transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <X size={15} />
                  </motion.button>
                </div>
              </div>
              <div className="relative overflow-auto max-h-[75vh] flex items-center justify-center bg-black/40">
                <img
                  src={selected.image}
                  alt={selected.type}
                  className={`transition-all duration-300 ${zoomed ? "w-[150%] max-w-none cursor-zoom-out" : "max-w-full h-auto max-h-[70vh] object-contain cursor-zoom-in"}`}
                  onClick={() => setZoomed(!zoomed)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
