import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

const STARS: Array<[number, number, number]> = [
  [50, 45, 4],
  [85, 75, 3],
  [125, 60, 5],
  [165, 90, 3.5],
  [195, 65, 4.5],
  [225, 95, 3],
  [110, 130, 3.5],
  [155, 155, 4],
  [195, 140, 3],
  [240, 170, 3.5],
];

const LINES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [2, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];

export function ConstellationLoversCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #1e1b4b 0%, #0c0a1e 60%, #050314 100%)",
      }}
    >
      {Array.from({ length: 80 }).map((_, i) => {
        const seed = (i * 7919) % 9973;
        const left = (seed * 13) % 100;
        const top = (seed * 7) % 100;
        const size = 0.4 + ((seed * 3) % 8) / 8;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.6)`,
              opacity: 0.6,
              animation: `const-twinkle ${2 + (seed % 30) / 10}s ease-in-out ${(seed % 40) / 10}s infinite`,
            }}
          />
        );
      })}

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 300 240"
        style={{ left: "5%", right: "5%", top: "30%", width: "90%" }}
        aria-hidden="true"
      >
        <g stroke="rgba(253,224,138,0.55)" strokeWidth="0.8" fill="none">
          {LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={STARS[a][0]}
              y1={STARS[a][1]}
              x2={STARS[b][0]}
              y2={STARS[b][1]}
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
                animation: `const-draw 0.7s ease-out ${0.2 + i * 0.15}s forwards`,
              }}
            />
          ))}
        </g>
        <g>
          {STARS.map(([x, y, r], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={r * 0.45}
                fill="#fef3c7"
                style={{
                  opacity: 0,
                  animation: `const-pop 0.4s ease-out ${0.15 + i * 0.1}s forwards`,
                }}
              />
              <circle
                cx={x}
                cy={y}
                r={r * 0.18}
                fill="#fff"
                style={{
                  opacity: 0,
                  animation: `const-pop 0.4s ease-out ${0.15 + i * 0.1}s forwards`,
                }}
              />
            </g>
          ))}
        </g>
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "9%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#fde68a" }}
        >
          Bajo nuestra constelación
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fde68a, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #fde68a 60%, #d4a04c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(253,224,138,0.4))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#fde68a" }}>{data.subtitle}</p>
        )}
        <div className="mt-auto pb-12 space-y-1.5">
          <p className="font-display italic text-amber-50">{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest text-amber-200">{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-amber-100">{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-amber-200/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes const-twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }
        @keyframes const-pop { to { opacity: 1; } }
        @keyframes const-draw { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}
