import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function PearlCameoCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #2a1a3a 0%, #1a0b2e 50%, #2a1a3a 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <filter id="cameo-velvet">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.35  0 0 0 0 0.6  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cameo-velvet)" />
      </svg>

      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: "8%",
          width: "240px",
          height: "320px",
          transform: "translateX(-50%)",
        }}
      >
        <svg viewBox="0 0 240 320" className="w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id="cameo-inside" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="60%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#be4a7e" />
            </radialGradient>
            <linearGradient id="cameo-frame" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#d4a04c" />
              <stop offset="100%" stopColor="#7a5c1e" />
            </linearGradient>
          </defs>
          <ellipse cx="120" cy="160" rx="115" ry="155" fill="url(#cameo-frame)" />
          <ellipse cx="120" cy="160" rx="98" ry="138" fill="url(#cameo-inside)" />
          <ellipse cx="120" cy="160" rx="98" ry="138" fill="none" stroke="#7a5c1e" strokeWidth="1.5" />
          {Array.from({ length: 28 }).map((_, i) => {
            const angle = (i / 28) * Math.PI * 2;
            const rx = 107;
            const ry = 147;
            const cx = 120 + Math.cos(angle) * rx;
            const cy = 160 + Math.sin(angle) * ry;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4.5"
                fill="url(#cameo-inside)"
                stroke="#7a5c1e"
                strokeWidth="0.5"
              />
            );
          })}
          <g fill="#fce7f3" opacity="0.92">
            <path d="M 120 95 C 100 95 88 110 88 130 C 88 135 88 138 92 142 L 92 152 L 76 175 L 76 220 L 164 220 L 164 175 L 148 152 L 148 142 C 152 138 152 135 152 130 C 152 110 140 95 120 95 Z" />
          </g>
          <g fill="#be4a7e" opacity="0.5">
            <path d="M 102 130 Q 106 124 110 130 M 130 130 Q 134 124 138 130" />
            <path d="M 105 145 Q 120 152 135 145" stroke="#be4a7e" strokeWidth="0.8" fill="none" />
          </g>
          <g fill="#fce7f3" opacity="0.92">
            <ellipse cx="120" cy="78" rx="40" ry="22" />
            <ellipse cx="100" cy="68" rx="14" ry="9" />
            <ellipse cx="140" cy="68" rx="14" ry="9" />
          </g>
        </svg>
      </div>

      {Array.from({ length: 14 }).map((_, i) => {
        const seed = (i * 9301) % 9973;
        const left = ((seed * 11) % 100);
        const top = ((seed * 7) % 100);
        const size = 3 + ((seed * 3) % 5);
        return (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: "radial-gradient(circle at 35% 35%, #fff 0%, #e0e7ff 60%, #a5b4fc 100%)",
              boxShadow: "0 0 6px rgba(255,255,255,0.5)",
            }}
          />
        );
      })}

      <div className="relative h-full flex flex-col items-center text-center px-10 z-10" style={{ paddingTop: "75%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#fde68a" }}>
          Retratos del corazón
        </p>
        <div className="my-2 h-px w-10" style={{ background: "#fde68a", opacity: 0.6 }} />
        <h2
          className="font-display text-3xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #fde68a 0%, #d4a04c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {data.title}
        </h2>
        <p className="font-display italic text-sm mt-1" style={{ color: "#fce7f3" }}>{data.date}</p>
        {data.rsvp && (
          <p className="absolute bottom-3 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fde68a" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
