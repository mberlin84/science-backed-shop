import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function BeachBonfireCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #0c0a1e 0%, #1a1245 30%, #4a1a3f 55%, #7c2d52 75%, #b45309 100%)",
      }}
    >
      {Array.from({ length: 45 }).map((_, i) => {
        const seed = (i * 9301) % 9973;
        const left = (seed * 11) % 100;
        const top = (seed * 5) % 60;
        const size = 0.5 + ((seed * 3) % 8) / 8;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.7)`,
              opacity: 0.7,
              animation: `bonfire-star ${2 + (seed % 30) / 10}s ease-in-out ${(seed % 40) / 10}s infinite`,
            }}
          />
        );
      })}

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "30%" }}
        aria-hidden="true"
      >
        <ellipse cx="200" cy="200" rx="280" ry="32" fill="#3a2412" />
        <ellipse cx="200" cy="200" rx="220" ry="22" fill="#2a1408" />
        <g opacity="0.6">
          <ellipse cx="200" cy="180" rx="120" ry="3" fill="#fbbf24" />
          <ellipse cx="180" cy="190" rx="50" ry="2" fill="#fbbf24" />
        </g>
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          bottom: "16%",
          width: "120px",
          height: "150px",
          transform: "translateX(-50%)",
        }}
      >
        <svg viewBox="0 0 120 150" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="bonfire-flame-a" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="40%" stopColor="#dc2626" />
              <stop offset="75%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
          </defs>
          <g>
            <line x1="20" y1="135" x2="100" y2="120" stroke="#3a1a04" strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="135" x2="20" y2="120" stroke="#1a0a04" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="140" x2="60" y2="115" stroke="#3a1a04" strokeWidth="4" strokeLinecap="round" />
          </g>
          <path d="M 60 130 Q 35 100 50 70 Q 55 50 30 30 Q 60 35 60 0 Q 60 35 90 30 Q 65 50 70 70 Q 85 100 60 130 Z" fill="url(#bonfire-flame-a)"
            style={{ animation: "bonfire-flame 1.8s ease-in-out infinite", transformOrigin: "60px 130px" }} />
          <path d="M 60 125 Q 45 100 55 75 Q 58 60 45 45 Q 60 50 60 20 Q 60 50 75 45 Q 62 60 65 75 Q 75 100 60 125 Z" fill="#fde68a" opacity="0.85"
            style={{ animation: "bonfire-flame-b 1.4s ease-in-out 0.3s infinite", transformOrigin: "60px 125px" }} />
        </svg>
      </div>

      {Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 6529) % 9973;
        const left = 35 + ((seed * 11) % 30);
        const size = 1.5 + ((seed * 3) % 5) / 2;
        const delay = (seed % 30) / 10;
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
              boxShadow: `0 0 ${size * 4}px rgba(251,191,36,0.95)`,
              ["--bonfire-drift" as never]: `${drift}px`,
              animation: `bonfire-spark ${3 + delay}s ease-out ${delay}s infinite`,
            }}
          />
        );
      })}

      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          bottom: "5%",
          width: "200px",
          height: "30px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(251,191,36,0.6), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "9%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#fed7aa", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          Una hoguera en la arena
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #fed7aa, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #fef3c7 0%, #fbbf24 50%, #ea580c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(249,115,22,0.4))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#fed7aa", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>{data.subtitle}</p>
        )}
        <div className="mt-4 space-y-1.5">
          <p className="font-display italic" style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fed7aa", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fef3c7", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fed7aa", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes bonfire-flame { 0%, 100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(1.08) scaleX(0.95); } }
        @keyframes bonfire-flame-b { 0%, 100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(1.15) scaleX(0.88); } }
        @keyframes bonfire-spark {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate(var(--bonfire-drift, 0px), -380px); opacity: 0; }
        }
        @keyframes bonfire-star { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.85; } }
      `}</style>
    </div>
  );
}
