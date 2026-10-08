"use client";

const ITEMS = [
  "Marketing Strategy",
  "Brand Identity",
  "Content Direction",
  "Digital Campaigns",
  "Audience Segmentation",
  "Go-to-Market",
  "Lead Generation",
  "SEO & Analytics",
  "Stakeholder Management",
  "Visual Storytelling",
];

const SEP = " · ";

const track = ITEMS.join(SEP) + SEP;

export default function Marquee() {
  return (
    <div
      style={{
        background: "var(--wine)",
        overflow: "hidden",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderTop: "1px solid rgba(243,237,227,0.08)",
        borderBottom: "1px solid rgba(243,237,227,0.08)",
      }}
    >
      {/* Row 1 — left */}
      <div style={{ display: "flex", width: "max-content", animation: "marquee-left 30s linear infinite", marginBottom: "0.35rem" }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--cream)",
              whiteSpace: "nowrap",
              paddingRight: "2rem",
              opacity: 0.95,
            }}
          >
            {track}
          </span>
        ))}
      </div>

      {/* Row 2 — right (reverse) */}
      <div style={{ display: "flex", width: "max-content", animation: "marquee-right 25s linear infinite" }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "0.06em",
              color: "rgba(243,237,227,0.4)",
              whiteSpace: "nowrap",
              paddingRight: "2rem",
            }}
          >
            {track}
          </span>
        ))}
      </div>
    </div>
  );
}
