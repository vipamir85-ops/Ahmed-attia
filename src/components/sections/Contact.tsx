import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Zap } from "lucide-react";
import casualImg from "../../assets/IMG.jpg";

const WA_LINK  = "https://wa.me/971563303523";
const LINKEDIN = "https://www.linkedin.com/in/ahmed-surveyor";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const cardsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardItemVariants: Variants = {
  hidden:  { opacity: 0, y: 20, x: -10 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export function Contact() {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden section-depth" id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 right-0 w-[600px] h-[600px] bg-secondary/8 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/3 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-20"
        >
          <p className="text-xs font-mono text-primary tracking-[0.4em] uppercase mb-4">Let's Connect</p>
          <h3 className="text-3xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Available for <span className="text-shimmer">Immediate</span> Joining
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <div
            className="flex items-center gap-4 px-6 py-5 rounded-sm glass-card justify-center"
            style={{
              border: "1px solid rgba(184,115,51,0.45)",
              boxShadow: "0 0 40px rgba(184,115,51,0.1), inset 0 1px 0 rgba(184,115,51,0.15)",
            }}
          >
            <Zap size={22} className="text-primary shrink-0" style={{ filter: "drop-shadow(0 0 10px rgba(184,115,51,0.8))" }} />
            <div>
              <p className="text-white font-bold text-base md:text-lg tracking-widest uppercase" style={{ textShadow: "0 0 20px rgba(184,115,51,0.3)" }}>
                Available for Immediate Joining
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Open to opportunities across UAE bridge, road, and infrastructure projects.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="space-y-3 mb-8"
              variants={cardsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* WhatsApp */}
              <motion.a
                variants={cardItemVariants}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group premium-card p-4 rounded-sm border bg-card/50 transition-colors duration-300 block"
                style={{ borderColor: "rgba(37,211,102,0.25)" }}
                whileHover={{ borderColor: "rgba(37,211,102,0.5)", boxShadow: "0 0 24px rgba(37,211,102,0.12)" }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="w-12 h-12 rounded-sm border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: "rgba(37,211,102,0.08)", borderColor: "rgba(37,211,102,0.3)" }}
                >
                  <span className="text-[#25D366]">
                    <WhatsAppIcon size={22} />
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#25D366" }}>WhatsApp — Primary Contact</p>
                    <span className="px-1.5 py-0.5 text-[8px] font-mono font-bold uppercase rounded-full" style={{ background: "rgba(37,211,102,0.15)", color: "#25D366", border: "1px solid rgba(37,211,102,0.3)" }}>
                      Instant Reply
                    </span>
                  </div>
                  <p className="text-base text-white font-semibold">+971 56 330 3523</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={cardItemVariants}
                href="mailto:ahmed.attia.88388@gmail.com"
                className="flex items-center gap-4 group premium-card p-4 rounded-sm border border-white/6 bg-card/50"
                whileHover={{ borderColor: "rgba(184,115,51,0.3)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center bg-background group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm md:text-base text-white font-semibold">ahmed.attia.88388@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                variants={cardItemVariants}
                href="tel:+20106019182"
                className="flex items-center gap-4 group premium-card p-4 rounded-sm border border-white/6 bg-card/50"
                whileHover={{ borderColor: "rgba(184,115,51,0.3)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center bg-background group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">Phone — Egypt</p>
                  <p className="text-base text-white font-semibold">+20 106 019 1826</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                variants={cardItemVariants}
                className="flex items-center gap-4 group premium-card p-4 rounded-sm border border-white/6 bg-card/50"
              >
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center bg-background shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-base text-white font-semibold">Dubai, UAE</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                variants={cardItemVariants}
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group premium-card p-4 rounded-sm border border-white/6 bg-card/50"
                whileHover={{ borderColor: "rgba(184,115,51,0.3)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="linkedin-glow w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center bg-background group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="text-base text-white font-semibold">ahmed-surveyor</p>
                  <p className="text-xs text-primary/70 mt-0.5">View full professional profile →</p>
                </div>
              </motion.a>
            </motion.div>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
            >
              <button
                className="w-full py-5 font-bold tracking-[0.2em] text-sm uppercase rounded-sm flex items-center justify-center gap-3 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                <WhatsAppIcon size={20} />
                Message Me on WhatsApp
              </button>
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-[-12px] bg-secondary/15 blur-2xl rounded-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-primary/20 shadow-2xl copper-glow-box">
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 via-transparent to-background/70 z-10 mix-blend-multiply" />
              <img
                src={casualImg}
                alt="Ahmed M. Attia"
                className="w-full h-full object-cover object-top"
              />
              {[
                "top-3 left-3 border-t-2 border-l-2",
                "top-3 right-3 border-t-2 border-r-2",
                "bottom-3 left-3 border-b-2 border-l-2",
                "bottom-3 right-3 border-b-2 border-r-2",
              ].map((cls, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-5 h-5 border-primary z-20 ${cls}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.35, ease: "backOut" }}
                />
              ))}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-background/95 to-transparent">
                <p className="text-[10px] font-mono text-primary tracking-[0.25em] uppercase mb-0.5">Ahmed M. Attia</p>
                <p className="text-white font-serif font-bold text-lg">Surveyor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
