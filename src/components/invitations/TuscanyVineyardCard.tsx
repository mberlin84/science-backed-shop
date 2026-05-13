import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function TuscanyVineyardCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fef9c3 0%, #fde68a 25%, #fdba74 55%, #b45309 100%)",
      }}
    >
      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "60%" }}
        aria-hidden="true"
      >
        <polygon points="-20,300 120,200 280,260 420,180 420,420 -20,420" fill="#5c842a" opacity="0.85" />
        <polygon points="-20,330 100,260 220,290 340,250 420,290 420,420 -20,420" fill="#3f6418" opacity="0.9" />
        <polygon points="-20,370 80,320 200,340 320,310 420,340 420,420 -20,420" fill="#1a3a08" />
        <g>
          {Array.from({ length: 8 }).map((_, i) => {
            const x = 30 + i * 50;
            return (
              <g key={i}>
                <line x1={x} y1="400" x2={x} y2="340" stroke="#5a3a18" strokeWidth="1.5" />
                <line x1={x - 12} y1="370" x2={x + 12} y2="370" stroke="#5a3a18" strokeWidth="0.8" opacity="0.6" />
              </g>
            );
          })}
        </g>
        <g>
          <circle cx="280" cy="195" r="10" fill="#fef9c3" opacity="0.3" />
          <rect x="280" y="195" width="20" height="35" fill="#a8762e" opacity="0.7" />
        </g>
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 120 90"
        style={{ top: "8%", left: "8%", width: "80px", height: "60px" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="grape" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#5b21b6" />
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="55" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="52" cy="55" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="64" cy="55" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="76" cy="55" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="46" cy="65" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="58" cy="65" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="70" cy="65" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="52" cy="74" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="64" cy="74" rx="6" ry="7" fill="url(#grape)" />
        <ellipse cx="58" cy="83" rx="5" ry="6" fill="url(#grape)" />
        <path d="M 58 50 Q 50 30 45 18" stroke="#5c842a" strokeWidth="2" fill="none" />
        <path d="M 40 20 Q 32 12 26 18 Q 28 28 38 30 Q 48 28 50 18 Q 44 10 36 14 Z" fill="#5c842a" />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 120 90"
        style={{ top: "12%", right: "10%", width: "70px", height: "55px" }}
        aria-hidden="true"
      >
        <path d="M 30 60 Q 28 35 38 22 Q 50 14 60 22 Q 72 18 80 30 Q 88 50 80 70 Q 60 80 40 75 Q 28 70 30 60 Z"
          fill="#5c842a" stroke="#3f6418" strokeWidth="1" />
        <path d="M 60 22 L 50 70" stroke="#3f6418" strokeWidth="0.7" />
        <path d="M 40 35 L 70 50 M 38 50 L 76 40" stroke="#3f6418" strokeWidth="0.5" opacity="0.6" />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          right: "10%",
          top: "26%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #fef3c7 0%, #fde68a 70%, #fbbf24 100%)",
          boxShadow: "0 0 50px rgba(251,191,36,0.5)",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#5b21b6" }}>
          Entre viñedos toscanos
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#5b21b6", opacity: 0.5 }} />
        <h2 className="font-display text-4xl leading-tight" style={{ color: "#4c1d95" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#5b21b6" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic" style={{ color: "#fefce8" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fef9c3" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fefce8" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#fef9c3" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
