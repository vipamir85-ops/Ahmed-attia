import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, ChevronRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Fix Leaflet default marker icon (Vite bundler issue) ── */
(L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl = undefined;
L.Icon.Default.mergeOptions({ iconUrl: "", shadowUrl: "", iconRetinaUrl: "" });

/* ── Constants ────────────────────────────────────── */

const EGYPT_CENTER: [number, number] = [27.5, 30.5];
const UAE_CENTER:   [number, number] = [24.6, 54.6];
const EGYPT_ZOOM = 6.2;
const UAE_ZOOM   = 9;

/* ── Data ─────────────────────────────────────────── */

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  region: "egypt" | "uae";
  active?: boolean;
}

const markers: MapMarker[] = [
  { id: "sandoub",   lat: 31.04, lng: 31.38, title: "Sandob Bridge",                    company: "El Soadaa Group",             location: "Mansoura",                   period: "2014 – 2016",       type: "Bridge",              region: "egypt" },
  { id: "middle",    lat: 30.60, lng: 31.90, title: "Middle Ring Road Bridge",           company: "El Soadaa Group",             location: "Ismailia Desert Road",        period: "2016 – 2017",       type: "Bridge",              region: "egypt" },
  { id: "mostaqbal", lat: 30.73, lng: 31.96, title: "Mostaqbal City Bridge",             company: "El Soadaa Group",             location: "Ismailia Desert Road",        period: "2020 – 2021",       type: "Bridge",              region: "egypt" },
  { id: "regional",  lat: 30.06, lng: 31.78, title: "Regional Road Bridge",              company: "Hassan Allam Roads & Bridges",location: "New Administrative Capital", period: "2021 – 2023",       type: "Bridge",              region: "egypt" },
  { id: "quarry",    lat: 30.00, lng: 31.84, title: "Quarry Bridge",                     company: "Hassan Allam Roads & Bridges",location: "New Administrative Capital", period: "2021 – 2023",       type: "Bridge",              region: "egypt" },
  { id: "rail",      lat: 29.98, lng: 30.88, title: "High-Speed Rail Bridge",            company: "Hassan Allam Roads & Bridges",location: "6th of October City",        period: "Jan 2024 – Jul 2025", type: "Rail Infrastructure", region: "egypt" },
  { id: "dakhla",    lat: 22.50, lng: 28.70, title: "Dakhla Road — East Owainat",        company: "El Soadaa Group",             location: "Western Desert",             period: "2021",              type: "Road",                region: "egypt" },
  { id: "dubai",     lat: 25.20, lng: 55.27, title: "Infrastructure & Foundation Projects",company: "Rabat Foundation",         location: "Dubai, UAE",                 period: "Sep 2025 – Present", type: "Foundation & Piling", region: "uae",  active: true },
  { id: "abudhabi",  lat: 24.47, lng: 54.37, title: "UAE Operations",                    company: "Rabat Foundation",           location: "Abu Dhabi, UAE",             period: "UAE",               type: "Infrastructure",      region: "uae" },
];

const typeChip: Record<string, string> = {
  "Bridge":              "text-amber-400 border-amber-400/35 bg-amber-400/8",
  "Rail Infrastructure": "text-blue-400 border-blue-400/35 bg-blue-400/8",
  "Road":                "text-emerald-400 border-emerald-400/35 bg-emerald-400/8",
  "Foundation & Piling": "text-[#B87333] border-[#B87333]/35 bg-[#B87333]/8",
  "Infrastructure":      "text-[#B87333]/80 border-[#B87333]/28 bg-[#B87333]/6",
};

/* ── Marker icon factory ──────────────────────────── */

function makeIcon(isPulse: boolean): L.DivIcon {
  return L.divIcon({
    className: "",
    html: `<div class="copper-map-marker">
      ${isPulse ? '<span class="pulse-ring"></span><span class="pulse-ring delay"></span>' : ""}
      <span class="dot"></span>
    </div>`,
    iconSize:    [28, 28],
    iconAnchor:  [14, 14],
    popupAnchor: [0, -18],
  });
}

function makeIconSelected(isPulse: boolean): L.DivIcon {
  return L.divIcon({
    className: "",
    html: `<div class="copper-map-marker selected">
      ${isPulse ? '<span class="pulse-ring"></span><span class="pulse-ring delay"></span>' : ""}
      <span class="dot"></span>
    </div>`,
    iconSize:    [28, 28],
    iconAnchor:  [14, 14],
    popupAnchor: [0, -18],
  });
}

/* ── Region fly-to buttons (inside MapContainer) ──── */

function RegionButtons() {
  const map = useMap();
  const btnStyle: React.CSSProperties = {
    background:    "rgba(5,9,7,0.92)",
    border:        "1px solid rgba(184,115,51,0.4)",
    color:         "#B87333",
    padding:       "6px 14px",
    borderRadius:  3,
    cursor:        "pointer",
    fontSize:      11,
    fontFamily:    "monospace",
    letterSpacing: "0.12em",
    backdropFilter:"blur(8px)",
    fontWeight:    700,
    transition:    "background 0.2s, border-color 0.2s",
  };
  return (
    <div
      style={{
        position: "absolute",
        top: 12,
        right: 54,
        zIndex: 1000,
        display: "flex",
        gap: 6,
      }}
    >
      <button
        style={btnStyle}
        onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "rgba(184,115,51,0.15)"; }}
        onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "rgba(5,9,7,0.92)"; }}
        onClick={() => map.flyTo(EGYPT_CENTER, EGYPT_ZOOM, { duration: 1.6, easeLinearity: 0.3 })}
      >
        EGYPT
      </button>
      <button
        style={btnStyle}
        onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "rgba(184,115,51,0.15)"; }}
        onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "rgba(5,9,7,0.92)"; }}
        onClick={() => map.flyTo(UAE_CENTER, UAE_ZOOM, { duration: 1.6, easeLinearity: 0.3 })}
      >
        UAE
      </button>
    </div>
  );
}

/* ── Popup content ────────────────────────────────── */

function PopupContent({ m }: { m: MapMarker }) {
  const chipCls = typeChip[m.type] ?? "text-white/60 border-white/20 bg-white/5";
  return (
    <div style={{ padding: "14px 16px", minWidth: 220, fontFamily: "Inter, sans-serif" }}>
      {/* Type badge + active badge */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
        <span
          className={chipCls}
          style={{
            padding:      "2px 9px",
            borderRadius: 20,
            fontSize:     10,
            fontFamily:   "monospace",
            border:       "1px solid",
            letterSpacing:"0.05em",
          }}
        >
          {m.type}
        </span>
        {m.active && (
          <span
            style={{
              padding:      "2px 9px",
              borderRadius: 20,
              fontSize:     10,
              fontFamily:   "monospace",
              background:   "rgba(184,115,51,0.12)",
              color:        "#B87333",
              border:       "1px solid rgba(184,115,51,0.3)",
              letterSpacing:"0.05em",
            }}
          >
            Active
          </span>
        )}
      </div>

      {/* Title */}
      <p style={{ margin: "0 0 10px 0", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.35 }}>
        {m.title}
      </p>

      {/* Meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
          <MapPin size={11} color="#B87333" />
          {m.location}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
          <Calendar size={11} color="#B87333" />
          {m.period}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
          <Building2 size={11} color="#B87333" />
          {m.company}
        </span>
      </div>

      {/* CTA */}
      {m.id !== "abudhabi" && (
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            display:       "flex",
            alignItems:    "center",
            gap:           5,
            width:         "100%",
            padding:       "7px 12px",
            background:    "rgba(184,115,51,0.08)",
            border:        "1px solid rgba(184,115,51,0.3)",
            borderRadius:  3,
            color:         "#B87333",
            fontSize:      11,
            fontFamily:    "monospace",
            letterSpacing: "0.1em",
            cursor:        "pointer",
            justifyContent:"space-between",
            transition:    "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget).style.background = "rgba(184,115,51,0.18)"; }}
          onMouseLeave={(e) => { (e.currentTarget).style.background = "rgba(184,115,51,0.08)"; }}
        >
          VIEW FULL PROJECT <ChevronRight size={12} />
        </button>
      )}
    </div>
  );
}

/* ── Main component ───────────────────────────────── */

export function ProjectMap() {
  return (
    <section className="py-14 md:py-28 bg-background relative section-depth overflow-hidden" id="map">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/4 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-[10px] md:text-xs font-mono text-primary tracking-[0.4em] uppercase mb-2 md:mb-3">Field Operations</p>
          <h3 className="text-xl md:text-5xl font-serif font-bold text-white">
            Project <span className="text-muted-foreground font-light italic">Locations</span>
          </h3>
          <p className="mt-2 md:mt-3 text-[0.82rem] md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Click any marker to explore the project. Use EGYPT / UAE buttons to fly between regions.
          </p>
        </motion.div>

        {/* Map wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="rounded-sm overflow-hidden border border-white/10"
            style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.6)" }}
          >
            {/* Fixed-height map canvas */}
            <div className="h-[360px] sm:h-[440px] md:h-[540px] relative">
              <MapContainer
                center={EGYPT_CENTER}
                zoom={EGYPT_ZOOM}
                style={{ height: "100%", width: "100%" }}
                zoomControl={true}
                attributionControl={true}
                scrollWheelZoom={true}
              >
                {/* Tile layer — CartoDB Voyager (Google Maps-like) */}
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>'
                  subdomains="abcd"
                  maxZoom={19}
                />

                {/* Region fly-to buttons overlay */}
                <RegionButtons />

                {/* Project markers */}
                {markers.map((m) => (
                  <Marker
                    key={m.id}
                    position={[m.lat, m.lng]}
                    icon={makeIcon(!!m.active)}
                    eventHandlers={{
                      popupopen:  (e) => { (e.target as L.Marker).setIcon(makeIconSelected(!!m.active)); },
                      popupclose: (e) => { (e.target as L.Marker).setIcon(makeIcon(!!m.active)); },
                    }}
                  >
                    <Popup
                      closeButton={true}
                      className="copper-popup"
                      maxWidth={280}
                      minWidth={240}
                    >
                      <PopupContent m={m} />
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Mobile hint */}
          <p className="text-center text-[10px] font-mono text-muted-foreground/40 tracking-wider mt-3 md:hidden">
            Tap markers to explore · Pinch to zoom
          </p>
        </motion.div>
      </div>
    </section>
  );
}
