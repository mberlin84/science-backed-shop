import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface PalmProps {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
  gradientId: string;
}

function PalmLeaf({ className, style, flip = false, gradientId }: PalmProps) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      style={{
        ...style,
        transform: `${flip ? "scaleX(-1)" : ""} ${style?.transform ?? ""}`,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a3c585" />
          <stop offset="55%" stopColor="#5b8a4f" />
          <stop offset="100%" stopColor="#2d5236" />
        </linearGradient>
      </defs>
      <path
        d="M 100 230 Q 92 180 100 130"
        stroke="#3d5a3a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = -80 + i * 20;
        return (
          <ellipse
            key={i}
            cx="100"
            cy="75"
            rx="11"
            ry="60"
            transform={`rotate(${angle} 100 130)`}
            fill={`url(#${gradientId})`}
            opacity="0.92"
          />
        );
      })}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = -80 + i * 20;
        return (
          <ellipse
            key={`mid-${i}`}
            cx="100"
            cy="85"
            rx="5"
            ry="55"
            transform={`rotate(${angle} 100 130)`}
            fill="#dceac6"
            opacity="0.35"
          />
        );
      })}
    </svg>
  );
}

function Seashell({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="shell-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fde6d3" />
          <stop offset="100%" stopColor="#f7a98a" />
        </linearGradient>
      </defs>
      <path
        d="M 30 8 Q 8 30 16 52 Q 30 48 44 52 Q 52 30 30 8 Z"
        fill="url(#shell-grad)"
        stroke="#c97a5c"
        strokeWidth="0.8"
      />
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="30"
          y1="10"
          x2={30 + (i - 2) * 8}
          y2="50"
          stroke="#c97a5c"
          strokeWidth="0.6"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

export function BeachWeddingCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #bae6fd 0%, #e0f2fe 35%, #fef9e0 65%, #fceeb8 100%)",
      }}
    >
      <div
        className="absolute right-8 top-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #fffbeb 0%, #fde68a 50%, #fbbf24 100%)",
          boxShadow:
            "0 0 50px rgba(251,191,36,0.55), 0 0 100px rgba(251,191,36,0.25)",
          animation: "beach-sun-glow 5s ease-in-out infinite",
        }}
      />

      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "12%",
          height: "20%",
          opacity: 0.55,
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,255,255,0.95) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 75% 60%, rgba(255,255,255,0.85) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -top-12 -left-10 w-48 h-56 origin-bottom pointer-events-none"
        style={{ animation: "beach-sway-a 6s ease-in-out infinite" }}
      >
        <PalmLeaf
          gradientId="beach-palm-a"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 6px 14px rgba(45,82,54,0.35))",
            transform: "rotate(-30deg)",
          }}
        />
      </div>

      <div
        className="absolute -top-8 -right-12 w-44 h-52 origin-bottom pointer-events-none"
        style={{ animation: "beach-sway-b 7s ease-in-out infinite" }}
      >
        <PalmLeaf
          gradientId="beach-palm-b"
          flip
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 6px 14px rgba(45,82,54,0.35))",
            transform: "rotate(20deg)",
          }}
        />
      </div>

      <Seashell
        className="absolute w-10 h-10 pointer-events-none"
        style={{
          right: "14%",
          bottom: "18%",
          transform: "rotate(-12deg)",
          filter: "drop-shadow(0 3px 5px rgba(180,90,50,0.3))",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: "12%",
          bottom: "22%",
          width: "22px",
          height: "22px",
        }}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full" aria-hidden="true">
          <path
            d="M 20 4 L 24 16 L 36 16 L 27 24 L 31 36 L 20 28 L 9 36 L 13 24 L 4 16 L 16 16 Z"
            fill="#fb923c"
            stroke="#c2410c"
            strokeWidth="1"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        style={{ height: "16%" }}
        aria-hidden="true"
      >
        <path
          d="M 0 60 Q 50 40 100 60 T 200 60 T 300 60 T 400 60 V 100 H 0 Z"
          fill="#7dd3fc"
          opacity="0.55"
          style={{ animation: "beach-wave-a 9s ease-in-out infinite" }}
        />
        <path
          d="M 0 75 Q 50 58 100 75 T 200 75 T 300 75 T 400 75 V 100 H 0 Z"
          fill="#38bdf8"
          opacity="0.7"
          style={{ animation: "beach-wave-b 7s ease-in-out infinite" }}
        />
        <path
          d="M 0 88 Q 50 78 100 88 T 200 88 T 300 88 T 400 88 V 100 H 0 Z"
          fill="#0c4a6e"
          opacity="0.85"
          style={{ animation: "beach-wave-c 5s ease-in-out infinite" }}
        />
      </svg>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#0c5e8a" }}
        >
          Donde el mar nos abraza
        </p>
        <div
          className="my-4 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0c5e8a 50%, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#082f49",
            textShadow: "0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#0c5e8a" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-7 space-y-1.5">
          <p className="font-display italic" style={{ color: "#082f49" }}>
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-xs tracking-widest"
              style={{ color: "#0c5e8a" }}
            >
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#082f49" }}
          >
            {data.location}
          </p>
        </div>
        {data.dressCode && (
          <p
            className="mt-3 text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: "#0c5e8a" }}
          >
            {data.dressCode}
          </p>
        )}
        {data.rsvp && (
          <p
            className="absolute text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#082f49", bottom: "22%" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes beach-sway-a {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes beach-sway-b {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-3deg); }
        }
        @keyframes beach-sun-glow {
          0%, 100% { box-shadow: 0 0 50px rgba(251,191,36,0.55), 0 0 100px rgba(251,191,36,0.25); }
          50% { box-shadow: 0 0 70px rgba(251,191,36,0.75), 0 0 130px rgba(251,191,36,0.35); }
        }
        @keyframes beach-wave-a {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-24px); }
        }
        @keyframes beach-wave-b {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(18px); }
        }
        @keyframes beach-wave-c {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-12px); }
        }
      `}</style>
    </div>
  );
}
