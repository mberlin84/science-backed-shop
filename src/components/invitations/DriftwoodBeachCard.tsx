import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function DriftwoodBeachCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #d6c5a8 0%, #c4ad88 40%, #a89172 75%, #8a7456 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="drift-sand">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" />
          <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.32  0 0 0 0 0.22  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#drift-sand)" />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 300 60"
        style={{ left: "5%", right: "5%", top: "25%", width: "90%", height: "60px" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="driftwood" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#d6c8b0" />
            <stop offset="50%" stopColor="#a89172" />
            <stop offset="100%" stopColor="#c4ad88" />
          </linearGradient>
        </defs>
        <path
          d="M 10 30 Q 60 26 100 30 Q 140 34 180 28 Q 220 24 270 32 L 285 30 L 285 38 Q 245 36 200 40 Q 150 44 100 38 Q 50 34 10 38 Z"
          fill="url(#driftwood)"
          stroke="#3a2412"
          strokeWidth="0.8"
        />
        <g stroke="#5a3a18" strokeWidth="0.4" fill="none" opacity="0.6">
          <path d="M 20 32 Q 60 34 100 33 Q 140 32 180 34 Q 220 35 270 34" />
          <path d="M 25 35 Q 70 36 110 35 Q 150 35 200 36" />
        </g>
        <g stroke="#3a2412" strokeWidth="0.8" fill="none" opacity="0.8">
          <ellipse cx="40" cy="32" rx="6" ry="2" />
          <ellipse cx="120" cy="34" rx="5" ry="1.5" />
          <ellipse cx="230" cy="32" rx="7" ry="2" />
        </g>
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 60 60"
        style={{ left: "12%", top: "50%", width: "45px", height: "45px" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="seaglass-aqua" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.85" />
          </radialGradient>
        </defs>
        <path
          d="M 30 8 Q 18 12 14 28 Q 12 44 26 50 Q 42 54 50 38 Q 54 22 42 12 Q 36 8 30 8 Z"
          fill="url(#seaglass-aqua)"
          opacity="0.75"
          stroke="#0e7490"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 60 60"
        style={{ right: "16%", top: "62%", width: "38px", height: "38px" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="seaglass-green" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.8" />
          </radialGradient>
        </defs>
        <path
          d="M 30 10 Q 16 16 14 30 Q 14 46 30 50 Q 46 50 50 36 Q 50 18 38 12 Q 34 10 30 10 Z"
          fill="url(#seaglass-green)"
          opacity="0.78"
          stroke="#166534"
          strokeWidth="0.5"
        />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 50 50"
        style={{ left: "28%", bottom: "12%", width: "32px", height: "32px" }}
        aria-hidden="true"
      >
        <path
          d="M 25 4 Q 11 18 12 30 Q 22 28 30 32 Q 38 28 38 18 Q 36 8 25 4 Z"
          fill="#f7d2bd"
          stroke="#8a5a3c"
          strokeWidth="0.6"
        />
        <g stroke="#8a5a3c" strokeWidth="0.4">
          <line x1="25" y1="8" x2="22" y2="28" />
          <line x1="25" y1="8" x2="30" y2="28" />
          <line x1="25" y1="8" x2="18" y2="22" />
        </g>
      </svg>

      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          right: "12%",
          top: "10%",
          width: "60px",
          height: "60px",
          background: "radial-gradient(circle, #fef9e0 0%, #fde68a 70%, #fbbf24 100%)",
          boxShadow: "0 0 35px rgba(251,191,36,0.5)",
          opacity: 0.85,
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#3a2412" }}>
          Que el mar lo decida
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#3a2412", opacity: 0.5 }} />
        <h2 className="font-display text-3xl leading-tight" style={{ color: "#1a0a04", textShadow: "0 1px 0 rgba(255,255,255,0.35)" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#3a2412" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic" style={{ color: "#1a0a04" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#3a2412" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#1a0a04" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#3a2412" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
