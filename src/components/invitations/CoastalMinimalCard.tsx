import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function CoastalMinimalCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-[0_20px_50px_-15px_rgba(15,40,60,0.25)]"
      style={{
        background:
          "linear-gradient(180deg, #f8f5ef 0%, #f1ebe0 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="coastal-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
          <feColorMatrix
            values="0 0 0 0 0.4
                    0 0 0 0 0.35
                    0 0 0 0 0.25
                    0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#coastal-grain)" />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          top: "12%",
          right: "12%",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "1.5px solid #b8a78a",
          background: "radial-gradient(circle at 50% 50%, transparent 60%, rgba(184,167,138,0.15) 100%)",
        }}
      />

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 400 100"
        style={{
          left: "10%",
          right: "10%",
          width: "80%",
          top: "47%",
          height: "60px",
        }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 50 L 60 50 Q 80 50 90 38 Q 100 26 115 38 Q 130 50 145 38 Q 160 26 175 38 Q 190 50 205 38 Q 220 26 235 38 Q 250 50 270 50 L 400 50"
          stroke="#b8a78a"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: 600,
            animation: "coastal-draw 2.5s ease-out forwards",
          }}
        />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 120"
        style={{
          left: "6%",
          bottom: "8%",
          width: "55px",
          height: "85px",
          opacity: 0.85,
        }}
        aria-hidden="true"
      >
        <line x1="40" y1="120" x2="40" y2="55" stroke="#7a6648" strokeWidth="1.5" strokeLinecap="round" />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = -75 + i * 30;
          const rad = ((angle - 90) * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={40 + Math.cos(rad) * 24}
              cy={55 + Math.sin(rad) * 24}
              rx="22"
              ry="5"
              transform={`rotate(${angle} 40 55)`}
              fill="#7a6648"
              opacity="0.78"
            />
          );
        })}
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          right: "12%",
          bottom: "12%",
          width: "30px",
          height: "30px",
          opacity: 0.65,
        }}
      >
        <svg viewBox="0 0 60 60" aria-hidden="true">
          <path
            d="M 30 6 Q 20 28 8 32 Q 22 36 30 54 Q 38 36 52 32 Q 40 28 30 6 Z"
            fill="none"
            stroke="#b8a78a"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative h-full flex flex-col items-center text-center px-14 z-10" style={{ paddingTop: "20%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.55em] uppercase"
          style={{ color: "#7a6648" }}
        >
          Save the date
        </p>
        <div className="my-4 h-px w-8" style={{ background: "#b8a78a" }} />
        <h2
          className="font-display text-5xl leading-tight"
          style={{ color: "#1f3447", letterSpacing: "0.01em" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-base mt-2"
            style={{ color: "#5a6b7a" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-auto mb-[32%] space-y-2">
          <p
            className="font-mono text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "#1f3447" }}
          >
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "#5a6b7a" }}
            >
              {data.time}
            </p>
          )}
          <div className="mx-auto h-px w-6" style={{ background: "#b8a78a" }} />
          <p
            className="font-display italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#1f3447" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-5 text-[10px] font-mono uppercase tracking-[0.4em]"
            style={{ color: "#7a6648" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes coastal-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
