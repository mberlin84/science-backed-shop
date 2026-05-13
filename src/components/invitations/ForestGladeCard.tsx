import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function ForestGladeCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #cae6c4 0%, #7fab78 35%, #2d5240 75%, #14291f 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="forest-ray" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="80 -20 110 -20 200 400 140 400" fill="url(#forest-ray)" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
        </polygon>
        <polygon points="150 -20 170 -20 220 400 180 400" fill="url(#forest-ray)" opacity="0.45">
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="8s" repeatCount="indefinite" />
        </polygon>
        <polygon points="220 -20 240 -20 250 400 210 400" fill="url(#forest-ray)" opacity="0.35">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="7s" repeatCount="indefinite" />
        </polygon>
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYEnd meet"
        style={{ height: "75%" }}
        aria-hidden="true"
      >
        {[
          { x: 40, h: 250, w: 18, sh: "#1a3a2e" },
          { x: 120, h: 290, w: 22, sh: "#0e2419" },
          { x: 240, h: 240, w: 20, sh: "#1a3a2e" },
          { x: 75, h: 200, w: 14, sh: "#0e2419" },
          { x: 200, h: 220, w: 16, sh: "#0e2419" },
          { x: 280, h: 180, w: 12, sh: "#1a3a2e" },
        ].map((tree, i) => (
          <g key={i}>
            <rect
              x={tree.x - tree.w / 4}
              y={400 - 30}
              width={tree.w / 2}
              height={30}
              fill="#3a2412"
            />
            <polygon
              points={`${tree.x},${400 - tree.h} ${tree.x - tree.w},${400 - 30} ${tree.x + tree.w},${400 - 30}`}
              fill={tree.sh}
              opacity="0.96"
            />
            <polygon
              points={`${tree.x},${400 - tree.h * 0.78} ${tree.x - tree.w * 0.85},${400 - tree.h * 0.4} ${tree.x + tree.w * 0.85},${400 - tree.h * 0.4}`}
              fill={tree.sh}
              opacity="0.96"
            />
            <polygon
              points={`${tree.x},${400 - tree.h * 0.95} ${tree.x - tree.w * 0.7},${400 - tree.h * 0.6} ${tree.x + tree.w * 0.7},${400 - tree.h * 0.6}`}
              fill={tree.sh}
              opacity="0.96"
            />
          </g>
        ))}
      </svg>

      {Array.from({ length: 18 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const left = (seed * 11) % 100;
        const top = 20 + ((seed * 7) % 60);
        const size = 1 + ((seed * 3) % 6) / 2;
        const delay = (seed % 30) / 10;
        return (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: "#fef3c7",
              boxShadow: `0 0 ${size * 3}px rgba(253,224,138,0.95)`,
              animation: `forest-firefly ${6 + delay}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#fef9c3" }}>
          En el corazón del bosque
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fef9c3, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#fefce8",
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#d9f99d" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic" style={{ color: "#fefce8" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#d9f99d" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fefce8" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#d9f99d" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes forest-firefly {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
