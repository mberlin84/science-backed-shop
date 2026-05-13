import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function TropicalSunriseCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fbcfe8 0%, #fdba74 35%, #fbbf24 55%, #fde68a 75%, #67e8f9 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #fff7d6 0%, #fde68a 50%, #fbbf24 100%)",
          boxShadow: "0 0 80px rgba(251,191,36,0.7), 0 0 160px rgba(249,115,22,0.5)",
          animation: "sunrise-pulse 5s ease-in-out infinite",
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        style={{ height: "30%" }}
        aria-hidden="true"
      >
        <path d="M 0 100 Q 100 80 200 100 T 400 100 L 400 200 L 0 200 Z" fill="#0891b2" opacity="0.5">
          <animate attributeName="d" values="M 0 100 Q 100 80 200 100 T 400 100 L 400 200 L 0 200 Z;M 0 100 Q 100 110 200 95 T 400 105 L 400 200 L 0 200 Z;M 0 100 Q 100 80 200 100 T 400 100 L 400 200 L 0 200 Z" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M 0 140 Q 100 125 200 140 T 400 140 L 400 200 L 0 200 Z" fill="#0e7490" opacity="0.7" />
        <path d="M 0 175 Q 100 165 200 175 T 400 175 L 400 200 L 0 200 Z" fill="#155e75" opacity="0.85" />
        <g fill="#fef3c7" opacity="0.55">
          <ellipse cx="200" cy="100" rx="80" ry="4" />
          <ellipse cx="150" cy="115" rx="40" ry="2" />
          <ellipse cx="250" cy="115" rx="40" ry="2" />
        </g>
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 200"
        style={{ left: "-10px", bottom: "20%", width: "70px", height: "180px", animation: "sunrise-palm-a 7s ease-in-out infinite", transformOrigin: "bottom center" }}
        aria-hidden="true"
      >
        <path d="M 40 200 Q 32 100 40 30" stroke="#1c0a04" strokeWidth="4" fill="none" strokeLinecap="round" />
        {[-65, -35, -5, 25, 55].map((deg, i) => {
          const r = ((deg - 90) * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={40 + Math.cos(r) * 30}
              cy={30 + Math.sin(r) * 30}
              rx="6"
              ry="32"
              transform={`rotate(${deg} 40 30)`}
              fill="#1c0a04"
              opacity="0.95"
            />
          );
        })}
      </svg>
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 200"
        style={{ right: "-10px", bottom: "18%", width: "80px", height: "200px", animation: "sunrise-palm-b 8s ease-in-out infinite", transformOrigin: "bottom center" }}
        aria-hidden="true"
      >
        <path d="M 40 200 Q 48 100 40 30" stroke="#1c0a04" strokeWidth="4" fill="none" strokeLinecap="round" />
        {[-65, -35, -5, 25, 55].map((deg, i) => {
          const r = ((deg - 90) * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={40 + Math.cos(r) * 30}
              cy={30 + Math.sin(r) * 30}
              rx="6"
              ry="32"
              transform={`rotate(${deg} 40 30)`}
              fill="#1c0a04"
              opacity="0.95"
            />
          );
        })}
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "9%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#7c2d12", textShadow: "0 1px 4px rgba(255,255,255,0.4)" }}
        >
          Despertando al amor
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #7c2d12, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#3a1a04",
            textShadow: "0 1px 0 rgba(255,255,255,0.5), 0 0 16px rgba(249,115,22,0.3)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#7c2d12" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic" style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fef3c7" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fef3c7" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#fef3c7" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes sunrise-pulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.04); } }
        @keyframes sunrise-palm-a { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        @keyframes sunrise-palm-b { 0%, 100% { transform: rotate(2deg); } 50% { transform: rotate(-2deg); } }
      `}</style>
    </div>
  );
}
