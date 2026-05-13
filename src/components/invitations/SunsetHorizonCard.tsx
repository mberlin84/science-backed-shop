import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

function PalmSilhouette({ flip = false, className, style }: { flip?: boolean; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      style={{
        ...style,
        transform: `${flip ? "scaleX(-1)" : ""} ${style?.transform ?? ""}`,
      }}
      aria-hidden="true"
    >
      <path
        d="M 62 220 Q 64 160 58 110 Q 50 70 58 30"
        stroke="#1a1024"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {[
        { rot: -60, len: 45 },
        { rot: -30, len: 55 },
        { rot: 0, len: 60 },
        { rot: 30, len: 55 },
        { rot: 60, len: 45 },
        { rot: -90, len: 38 },
        { rot: 90, len: 38 },
      ].map((f, i) => {
        const rad = ((f.rot - 90) * Math.PI) / 180;
        const cx = 58 + Math.cos(rad) * f.len * 0.55;
        const cy = 30 + Math.sin(rad) * f.len * 0.55;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={f.len * 0.55}
            ry="6"
            transform={`rotate(${f.rot} 58 30)`}
            fill="#1a1024"
            opacity="0.95"
          />
        );
      })}
      <circle cx="58" cy="30" r="6" fill="#1a1024" />
    </svg>
  );
}

export function SunsetHorizonCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-[0_30px_80px_-20px_rgba(120,30,60,0.6)]"
      style={{
        background:
          "linear-gradient(180deg, #1e1148 0%, #4a1a5a 14%, #7e1f56 26%, #c2185b 38%, #ef4444 50%, #f97316 58%, #f59e0b 63%)",
      }}
    >
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "37%",
          background:
            "linear-gradient(180deg, #d97706 0%, #b45309 8%, #78350f 25%, #1c1936 70%, #0f0a2e 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{
          width: "120px",
          height: "37%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(180deg, rgba(254,243,199,0.85) 0%, rgba(251,191,36,0.55) 40%, rgba(245,158,11,0.2) 80%, transparent 100%)",
          clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0 100%)",
          mixBlendMode: "screen",
        }}
      />

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
        style={{
          left: "50%",
          bottom: "26%",
          width: "260px",
          height: "20px",
          transform: "translateX(-50%)",
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const y = i * 3.5;
          const w = 200 - i * 16;
          return (
            <line
              key={i}
              x1={(200 - w) / 2}
              y1={y}
              x2={200 - (200 - w) / 2}
              y2={y}
              stroke="#fef3c7"
              strokeWidth="1.2"
              opacity={0.7 - i * 0.07}
              style={{
                animation: `sunset-shimmer ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          );
        })}
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "37%",
          left: "50%",
          width: "120px",
          height: "120px",
          transform: "translate(-50%, 50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, #fff7d6 0%, #fde68a 30%, #fbbf24 55%, #f59e0b 85%, #c2410c 100%)",
          boxShadow:
            "0 0 60px rgba(251,191,36,0.65), 0 0 140px rgba(249,115,22,0.5), 0 0 220px rgba(220,38,38,0.3)",
          animation: "sunset-glow 6s ease-in-out infinite",
        }}
      />

      <svg
        className="absolute pointer-events-none"
        style={{ top: "8%", left: 0, width: "100%", height: "20%" }}
        viewBox="0 0 400 100"
        aria-hidden="true"
      >
        <g fill="none" stroke="#1a1024" strokeWidth="1.6" strokeLinecap="round">
          <path
            d="M 60 40 Q 70 32 80 40 Q 90 32 100 40"
            style={{ animation: "sunset-bird-a 14s linear infinite" }}
          />
          <path
            d="M 200 60 Q 208 53 216 60 Q 224 53 232 60"
            style={{ animation: "sunset-bird-b 18s linear infinite" }}
          />
          <path
            d="M 300 30 Q 308 24 316 30 Q 324 24 332 30"
            style={{ animation: "sunset-bird-c 16s linear infinite" }}
          />
        </g>
      </svg>

      <PalmSilhouette
        className="absolute"
        style={{
          bottom: "22%",
          left: "-12px",
          width: "110px",
          height: "200px",
          filter: "drop-shadow(2px 0 10px rgba(0,0,0,0.35))",
          animation: "sunset-palm-a 8s ease-in-out infinite",
          transformOrigin: "bottom center",
        }}
      />
      <PalmSilhouette
        flip
        className="absolute"
        style={{
          bottom: "20%",
          right: "-20px",
          width: "130px",
          height: "220px",
          filter: "drop-shadow(-2px 0 10px rgba(0,0,0,0.35))",
          animation: "sunset-palm-b 9s ease-in-out infinite",
          transformOrigin: "bottom center",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.5em] uppercase"
          style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          Al caer el sol
        </p>
        <div
          className="my-3 h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, #fef3c7, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background:
              "linear-gradient(180deg, #fff7d6 0%, #fde68a 50%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 12px rgba(249,115,22,0.5))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-auto space-y-1 pb-[28%]">
          <p className="font-display italic" style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-xs tracking-widest"
              style={{ color: "#fde68a", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              {data.time}
            </p>
          )}
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#fde68a", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes sunset-glow {
          0%, 100% { box-shadow: 0 0 60px rgba(251,191,36,0.65), 0 0 140px rgba(249,115,22,0.5), 0 0 220px rgba(220,38,38,0.3); }
          50% { box-shadow: 0 0 80px rgba(251,191,36,0.85), 0 0 180px rgba(249,115,22,0.6), 0 0 260px rgba(220,38,38,0.45); }
        }
        @keyframes sunset-shimmer {
          0%, 100% { opacity: 0.2; transform: translateX(0); }
          50% { opacity: 0.85; transform: translateX(4px); }
        }
        @keyframes sunset-bird-a {
          0% { transform: translateX(-40px) translateY(0); }
          50% { transform: translateX(180px) translateY(-12px); }
          100% { transform: translateX(420px) translateY(0); }
        }
        @keyframes sunset-bird-b {
          0% { transform: translateX(-80px) translateY(0); }
          50% { transform: translateX(150px) translateY(-10px); }
          100% { transform: translateX(380px) translateY(0); }
        }
        @keyframes sunset-bird-c {
          0% { transform: translateX(-60px) translateY(0); }
          50% { transform: translateX(120px) translateY(-8px); }
          100% { transform: translateX(340px) translateY(0); }
        }
        @keyframes sunset-palm-a {
          0%, 100% { transform: rotate(-1.5deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes sunset-palm-b {
          0%, 100% { transform: rotate(1deg) scaleX(-1); }
          50% { transform: rotate(-2deg) scaleX(-1); }
        }
      `}</style>
    </div>
  );
}
