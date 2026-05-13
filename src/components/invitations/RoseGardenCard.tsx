import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

function Rose({ className, style, color = "#be123c" }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={`rose-${color.replace("#", "")}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="40%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
      </defs>
      {[0, 72, 144, 216, 288].map((d) => (
        <path
          key={d}
          d="M 50 50 Q 35 38 38 22 Q 50 12 62 22 Q 65 38 50 50 Z"
          transform={`rotate(${d} 50 50)`}
          fill={`url(#rose-${color.replace("#", "")})`}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="#fef3c7" opacity="0.7" />
    </svg>
  );
}

export function RoseGardenCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #fff5f5 0%, #ffe4e6 40%, #fce7f3 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g
          stroke="#4d7c0f"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.85"
        >
          <path d="M -10 60 Q 60 80 110 50 Q 160 30 220 70 Q 280 100 310 80" />
          <path d="M -10 380 Q 60 350 130 370 Q 200 390 280 360 Q 310 350 320 360" />
          <path d="M 20 -10 Q 30 80 60 160 Q 80 240 50 320 Q 30 380 40 410" />
          <path d="M 280 -10 Q 270 90 240 180 Q 220 280 260 360 Q 280 400 270 410" />
        </g>
        {Array.from({ length: 12 }).map((_, i) => {
          const positions = [
            [40, 30],
            [180, 70],
            [60, 130],
            [240, 180],
            [30, 220],
            [200, 230],
            [130, 280],
            [50, 340],
            [220, 340],
            [120, 60],
            [270, 110],
            [90, 200],
          ];
          const [cx, cy] = positions[i];
          const rot = (i * 47) % 360;
          return (
            <g
              key={i}
              transform={`translate(${cx - 14} ${cy - 14}) rotate(${rot} 14 14)`}
            >
              <path
                d="M 14 4 Q 6 14 14 24 Q 22 14 14 4 Z"
                fill="#65a30d"
                opacity="0.78"
              />
            </g>
          );
        })}
      </svg>

      <Rose
        color="#be123c"
        className="absolute -top-8 -left-8 w-36 h-36 group-hover:rotate-12 transition-transform duration-700"
        style={{ filter: "drop-shadow(0 6px 14px rgba(190,18,60,0.4))" }}
      />
      <Rose
        color="#f43f5e"
        className="absolute -bottom-10 -right-10 w-44 h-44 group-hover:-rotate-12 transition-transform duration-700"
        style={{ filter: "drop-shadow(0 6px 14px rgba(244,63,94,0.4))" }}
      />
      <Rose
        color="#e11d48"
        className="absolute top-6 right-8 w-20 h-20 group-hover:rotate-45 transition-transform duration-700"
        style={{ filter: "drop-shadow(0 4px 10px rgba(225,29,72,0.4))" }}
      />
      <Rose
        color="#f472b6"
        className="absolute bottom-12 left-4 w-16 h-16 group-hover:-rotate-45 transition-transform duration-700"
        style={{ filter: "drop-shadow(0 4px 8px rgba(244,114,182,0.4))" }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#9f1239" }}>
          En un jardín de rosas
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #9f1239, transparent)" }} />
        <h2 className="font-display text-4xl leading-tight" style={{ color: "#831843" }}>
          {data.title}
        </h2>
        {data.subtitle && <p className="font-display italic text-lg mt-1" style={{ color: "#9f1239" }}>{data.subtitle}</p>}
        <div className="mt-6 space-y-1.5">
          <p className="font-display italic" style={{ color: "#831843" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#9f1239" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#831843" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#9f1239" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
