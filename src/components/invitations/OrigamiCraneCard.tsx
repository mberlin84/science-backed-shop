import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function OrigamiCraneCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #fef9f0 0%, #fce4ec 50%, #f8bbd0 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="origami-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.7  0 0 0 0 0.5  0 0 0 0 0.55  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#origami-paper)" />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 240 180"
        style={{
          top: "10%",
          left: "50%",
          width: "75%",
          transform: "translateX(-50%)",
          animation: "origami-float 5s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="crane-light" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <linearGradient id="crane-shadow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="crane-mid" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <polygon points="120,90 30,30 110,80" fill="url(#crane-light)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 30,30 60,100 100,110" fill="url(#crane-mid)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 210,30 130,80" fill="url(#crane-light)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 210,30 180,100 140,110" fill="url(#crane-mid)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 100,110 140,110 140,150 100,150" fill="url(#crane-shadow)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 100,150 120,165 140,150" fill="url(#crane-mid)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,90 110,80 120,60 130,80" fill="url(#crane-light)" stroke="#92400e" strokeWidth="1" />
        <polygon points="120,60 115,45 130,42 125,55" fill="url(#crane-shadow)" stroke="#92400e" strokeWidth="1" />
      </svg>

      {Array.from({ length: 8 }).map((_, i) => {
        const seed = i * 9301 + 49297;
        const left = ((seed * 11) % 100);
        const top = ((seed * 7) % 100);
        const size = 8 + ((seed * 3) % 8);
        const rot = (seed * 13) % 360;
        const delay = (seed % 30) / 10;
        return (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rot}deg)`,
              animation: `origami-petal ${4 + delay}s ease-in-out ${delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 16 16" className="w-full h-full" aria-hidden="true">
              <polygon points="8,2 14,10 8,14 2,10" fill="#f9a8d4" opacity="0.7" stroke="#9d174d" strokeWidth="0.3" />
            </svg>
          </div>
        );
      })}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "55%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#9d174d" }}>
          Mil grullas, un solo amor
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#9d174d", opacity: 0.5 }} />
        <h2 className="font-display text-4xl leading-tight" style={{ color: "#831843" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#9d174d" }}>{data.subtitle}</p>
        )}
        <div className="mt-4 space-y-1">
          <p className="font-display italic text-sm" style={{ color: "#831843" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#9d174d" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#831843" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#9d174d" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes origami-float {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(-2deg); }
          50% { transform: translateX(-50%) translateY(-14px) rotate(2deg); }
        }
        @keyframes origami-petal {
          0%, 100% { transform: rotate(0deg) translateY(0); opacity: 0.5; }
          50% { transform: rotate(180deg) translateY(-8px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
