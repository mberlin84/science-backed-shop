import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function NeonRetroCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #0a0028 0%, #1a0b3d 35%, #4a0e5e 60%, #1a0b3d 75%, #0a0028 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0, transparent 2px, rgba(236,72,153,0.15) 2px, rgba(236,72,153,0.15) 3px)",
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        style={{ height: "45%" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="neon-grid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
          </linearGradient>
        </defs>
        <g stroke="url(#neon-grid)" strokeWidth="1.4" fill="none">
          {[20, 50, 90, 140, 200].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="400" y2={y} />
          ))}
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 200 + (i - 9) * 60;
            return <line key={i} x1="200" y1="20" x2={x} y2="240" />;
          })}
        </g>
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          top: "12%",
          left: "50%",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(180deg, #fbbf24 0%, #ec4899 50%, #8b5cf6 100%)",
          boxShadow:
            "0 0 60px rgba(236,72,153,0.7), 0 0 120px rgba(139,92,246,0.5)",
          animation: "neon-sun-glow 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "12%",
          left: "50%",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          transform: "translateX(-50%)",
          background:
            "repeating-linear-gradient(0deg, transparent 0 14px, #0a0028 14px 16px)",
          opacity: 0.7,
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "35%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.5em] uppercase"
          style={{
            color: "#22d3ee",
            textShadow: "0 0 6px #22d3ee, 0 0 12px #22d3ee",
          }}
        >
          New wave love
        </p>
        <div
          className="my-3 h-px w-12"
          style={{
            background: "#ec4899",
            boxShadow: "0 0 8px #ec4899",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight tracking-wider"
          style={{
            color: "#fdf2f8",
            textShadow:
              "0 0 8px #ec4899, 0 0 16px #ec4899, 0 0 30px #c026d3, 0 0 50px #a21caf",
            animation: "neon-flicker 4s linear infinite",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-mono italic text-sm tracking-widest mt-2 uppercase"
            style={{
              color: "#67e8f9",
              textShadow: "0 0 5px #67e8f9, 0 0 10px #22d3ee",
            }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-6 space-y-1.5">
          <p
            className="font-mono text-xs tracking-[0.4em] uppercase"
            style={{
              color: "#fbbf24",
              textShadow: "0 0 6px #fbbf24",
            }}
          >
            {data.date}
          </p>
          {data.time && (
            <p
              className="font-mono text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "#fda4af", textShadow: "0 0 5px #fb7185" }}
            >
              {data.time}
            </p>
          )}
          <p
            className="font-mono italic text-sm max-w-[80%] mx-auto"
            style={{ color: "#f0abfc", textShadow: "0 0 5px #c084fc" }}
          >
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p
            className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "#67e8f9", textShadow: "0 0 5px #22d3ee" }}
          >
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes neon-sun-glow {
          0%, 100% { box-shadow: 0 0 60px rgba(236,72,153,0.7), 0 0 120px rgba(139,92,246,0.5); }
          50% { box-shadow: 0 0 80px rgba(236,72,153,0.95), 0 0 160px rgba(139,92,246,0.75); }
        }
        @keyframes neon-flicker {
          0%, 91%, 100% { opacity: 1; }
          92% { opacity: 0.7; }
          93% { opacity: 1; }
          94% { opacity: 0.85; }
          95% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
