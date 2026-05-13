import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function PhoenixFlameCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "radial-gradient(ellipse at 50% 80%, #7c2d12 0%, #431407 50%, #1c0a04 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          bottom: "12%",
          width: "200px",
          height: "300px",
          transform: "translateX(-50%)",
        }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="phoenix-flame-1" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="30%" stopColor="#dc2626" />
              <stop offset="60%" stopColor="#f97316" />
              <stop offset="85%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="phoenix-flame-2" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
              <stop offset="40%" stopColor="#f97316" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#fbbf24" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fffbeb" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="295" rx="60" ry="8" fill="#7c2d12" opacity="0.7" />
          <path
            d="M 100 290 Q 60 240 80 180 Q 90 130 60 90 Q 95 60 100 30 Q 105 60 140 90 Q 110 130 120 180 Q 140 240 100 290 Z"
            fill="url(#phoenix-flame-1)"
            style={{ animation: "phoenix-flame-a 2s ease-in-out infinite", transformOrigin: "100px 290px" }}
          />
          <path
            d="M 100 280 Q 75 230 90 180 Q 95 140 75 110 Q 100 80 100 60 Q 100 80 125 110 Q 105 140 110 180 Q 125 230 100 280 Z"
            fill="url(#phoenix-flame-2)"
            opacity="0.85"
            style={{ animation: "phoenix-flame-b 1.6s ease-in-out infinite 0.3s", transformOrigin: "100px 280px" }}
          />
          <path
            d="M 100 260 Q 88 210 100 170 Q 95 130 100 100 Q 105 130 100 170 Q 112 210 100 260 Z"
            fill="#fef3c7"
            opacity="0.85"
            style={{ animation: "phoenix-flame-c 1.3s ease-in-out infinite 0.5s", transformOrigin: "100px 260px" }}
          />
        </svg>
      </div>

      {Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const left = 30 + ((seed * 11) % 40);
        const size = 1.5 + ((seed * 3) % 8) / 3;
        const delay = ((seed * 5) % 30) / 10;
        const drift = ((seed % 100) - 50) / 2;
        return (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              bottom: "20%",
              width: `${size}px`,
              height: `${size}px`,
              background: "#fbbf24",
              boxShadow: `0 0 ${size * 4}px rgba(251,191,36,0.9)`,
              ["--phoenix-drift" as never]: `${drift}px`,
              animation: `phoenix-ember ${3 + delay}s ease-out ${delay}s infinite`,
            }}
          />
        );
      })}

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#fed7aa" }}>
          De las cenizas, eternidad
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fbbf24, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #fef3c7 0%, #fbbf24 50%, #ea580c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 18px rgba(249,115,22,0.55))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-lg mt-1" style={{ color: "#fed7aa" }}>{data.subtitle}</p>
        )}
        <div className="mt-5 space-y-1.5">
          <p className="font-display italic" style={{ color: "#fef3c7" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fed7aa" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fef3c7" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fed7aa" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes phoenix-flame-a {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.06) scaleX(0.97); }
        }
        @keyframes phoenix-flame-b {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.1) scaleX(0.93); }
        }
        @keyframes phoenix-flame-c {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.15) scaleX(0.88); }
        }
        @keyframes phoenix-ember {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate(var(--phoenix-drift, 0px), -350px) scale(0.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
