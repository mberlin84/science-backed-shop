import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function LavenderFieldCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fefce8 0%, #fde68a 18%, #f0abfc 40%, #c084fc 75%, #6b21a8 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          right: "20%",
          top: "10%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #fef9c3 0%, #fde68a 60%, #fbbf24 100%)",
          boxShadow: "0 0 50px rgba(251,191,36,0.55)",
          opacity: 0.85,
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "65%" }}
        aria-hidden="true"
      >
        {[
          { y: 50, scale: 1, opacity: 0.55, color: "#a78bfa" },
          { y: 90, scale: 1.4, opacity: 0.65, color: "#9061f9" },
          { y: 140, scale: 1.9, opacity: 0.75, color: "#7c3aed" },
          { y: 200, scale: 2.4, opacity: 0.85, color: "#5b21b6" },
        ].map((row, rowIdx) => (
          <g key={rowIdx} transform={`translate(0 ${row.y}) scale(1 ${row.scale * 0.6})`}>
            {Array.from({ length: 8 }).map((_, i) => {
              const x = -10 + i * 55 + (rowIdx % 2) * 25;
              return (
                <g
                  key={i}
                  transform={`translate(${x} 0)`}
                  style={{
                    animation: `lavender-sway-${rowIdx % 2} ${4 + rowIdx + i * 0.2}s ease-in-out infinite`,
                    transformOrigin: `${x + 10}px 30px`,
                  }}
                >
                  <line x1="10" y1="30" x2="10" y2="0" stroke="#3f6418" strokeWidth="1.5" opacity={row.opacity} />
                  <g fill={row.color} opacity={row.opacity}>
                    <ellipse cx="10" cy="-4" rx="3.5" ry="6" />
                    <ellipse cx="6" cy="-2" rx="2.5" ry="4" />
                    <ellipse cx="14" cy="-2" rx="2.5" ry="4" />
                    <ellipse cx="10" cy="-10" rx="3" ry="5" />
                    <ellipse cx="7" cy="-14" rx="2" ry="3.5" />
                    <ellipse cx="13" cy="-14" rx="2" ry="3.5" />
                    <ellipse cx="10" cy="-18" rx="1.5" ry="2.5" />
                  </g>
                </g>
              );
            })}
          </g>
        ))}
        <ellipse cx="200" cy="278" rx="320" ry="14" fill="#1e0a3a" opacity="0.5" />
      </svg>

      {Array.from({ length: 10 }).map((_, i) => {
        const seed = (i * 9301) % 9973;
        const left = (seed * 11) % 100;
        const top = ((seed * 5) % 50) + 15;
        const delay = (seed % 40) / 10;
        return (
          <div
            key={i}
            className="absolute text-base pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `lavender-bee ${6 + delay}s ease-in-out ${delay}s infinite`,
            }}
          >
            🐝
          </div>
        );
      })}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#5b21b6", textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}
        >
          Entre campos de lavanda
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#5b21b6", opacity: 0.55 }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{ color: "#3b0764", textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#5b21b6" }}>{data.subtitle}</p>
        )}
        <div className="mt-4 space-y-1">
          <p className="font-display italic" style={{ color: "#3b0764", textShadow: "0 1px 0 rgba(255,255,255,0.3)" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#5b21b6" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#3b0764" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#ddd6fe" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes lavender-sway-0 { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes lavender-sway-1 { 0%, 100% { transform: rotate(3deg); } 50% { transform: rotate(-3deg); } }
        @keyframes lavender-bee {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -15px); }
          50% { transform: translate(-10px, -30px); }
          75% { transform: translate(-25px, -10px); }
        }
      `}</style>
    </div>
  );
}
