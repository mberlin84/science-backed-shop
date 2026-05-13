import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface HibiscusProps {
  className?: string;
  style?: React.CSSProperties;
  petalColor: string;
  petalEdge: string;
  centerColor: string;
  gradientId: string;
}

function Hibiscus({ className, style, petalColor, petalEdge, centerColor, gradientId }: HibiscusProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor={petalColor} stopOpacity="1" />
          <stop offset="60%" stopColor={petalColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={petalEdge} stopOpacity="1" />
        </radialGradient>
      </defs>
      {[0, 72, 144, 216, 288].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path
            d="M 100 100 Q 70 80 75 35 Q 100 8 125 35 Q 130 80 100 100 Z"
            fill={`url(#${gradientId})`}
            stroke={petalEdge}
            strokeWidth="1"
            opacity="0.97"
          />
          <path
            d="M 100 100 Q 88 70 100 30"
            stroke={petalEdge}
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
        </g>
      ))}
      <circle cx="100" cy="100" r="14" fill={centerColor} />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const len = 32;
        const x = 100 + Math.cos(angle) * len;
        const y = 100 + Math.sin(angle) * len;
        return (
          <g key={i}>
            <line x1="100" y1="100" x2={x} y2={y} stroke="#fde68a" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill="#fde68a" />
          </g>
        );
      })}
      <circle cx="100" cy="100" r="6" fill="#fbbf24" />
    </svg>
  );
}

function MonsteraLeaf({ className, style, gradientId }: { className?: string; style?: React.CSSProperties; gradientId: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="60%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>
      <path
        d="M 100 235 Q 92 200 96 160 Q 60 150 40 120 Q 30 90 50 70 Q 90 55 100 30 Q 110 55 150 70 Q 170 90 160 120 Q 140 150 104 160 Q 108 200 100 235 Z"
        fill={`url(#${gradientId})`}
        stroke="#14532d"
        strokeWidth="1"
      />
      <path
        d="M 75 100 L 92 130 M 125 100 L 108 130 M 60 125 L 92 145 M 140 125 L 108 145"
        stroke="#14532d"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 100 30 L 100 230"
        stroke="#14532d"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

export function TropicalHibiscusCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #fff7ed 0%, #fef3c7 35%, #fed7aa 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(251,113,133,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 75%, rgba(34,197,94,0.18) 0%, transparent 50%)",
        }}
      />

      <MonsteraLeaf
        gradientId="hibiscus-monstera-a"
        className="absolute -top-10 -left-12 w-48 h-56"
        style={{
          filter: "drop-shadow(0 6px 14px rgba(20,83,45,0.3))",
          transform: "rotate(-30deg)",
          animation: "tropical-sway-a 6s ease-in-out infinite",
          transformOrigin: "bottom center",
        }}
      />
      <MonsteraLeaf
        gradientId="hibiscus-monstera-b"
        className="absolute -bottom-12 -right-12 w-52 h-60"
        style={{
          filter: "drop-shadow(0 6px 14px rgba(20,83,45,0.3))",
          transform: "rotate(165deg)",
          animation: "tropical-sway-b 7s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      />

      <Hibiscus
        gradientId="hibiscus-coral"
        petalColor="#fb7185"
        petalEdge="#be123c"
        centerColor="#fef3c7"
        className="absolute -top-8 -right-6 w-40 h-40"
        style={{
          filter: "drop-shadow(0 8px 18px rgba(190,18,60,0.35))",
          animation: "tropical-rotate-a 18s linear infinite",
        }}
      />
      <Hibiscus
        gradientId="hibiscus-amber"
        petalColor="#fcd34d"
        petalEdge="#d97706"
        centerColor="#fef3c7"
        className="absolute bottom-6 left-2 w-28 h-28"
        style={{
          filter: "drop-shadow(0 6px 14px rgba(217,119,6,0.35))",
          animation: "tropical-rotate-b 20s linear infinite",
        }}
      />
      <Hibiscus
        gradientId="hibiscus-fuchsia"
        petalColor="#f472b6"
        petalEdge="#9d174d"
        centerColor="#fef3c7"
        className="absolute top-1/3 left-4 w-16 h-16"
        style={{
          filter: "drop-shadow(0 4px 10px rgba(157,23,77,0.3))",
          animation: "tropical-rotate-a 22s linear reverse infinite",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "18%",
          right: "30%",
          fontSize: "20px",
          animation: "tropical-float 6s ease-in-out infinite",
        }}
      >
        🌺
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#be123c" }}
        >
          Aloha, mi amor
        </p>
        <div
          className="my-3 h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, #be123c, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#831843",
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#be123c" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-7 space-y-1.5">
          <p className="font-display italic" style={{ color: "#831843" }}>
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-xs tracking-widest"
              style={{ color: "#be123c" }}
            >
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#831843" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#be123c" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes tropical-sway-a {
          0%, 100% { transform: rotate(-32deg); }
          50% { transform: rotate(-26deg); }
        }
        @keyframes tropical-sway-b {
          0%, 100% { transform: rotate(163deg); }
          50% { transform: rotate(168deg); }
        }
        @keyframes tropical-rotate-a {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        @keyframes tropical-rotate-b {
          0% { transform: rotate(0); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes tropical-float {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}
