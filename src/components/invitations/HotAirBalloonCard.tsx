import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function HotAirBalloonCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fde68a 0%, #fbb56b 30%, #f87171 55%, #c084fc 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          right: "12%",
          top: "8%",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #fef9c3 0%, #fde68a 60%, #f97316 100%)",
          boxShadow: "0 0 50px rgba(251,191,36,0.55)",
        }}
      />

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        style={{
          top: "35%",
          left: 0,
          width: "100%",
          height: "20%",
        }}
        aria-hidden="true"
      >
        <ellipse cx="80" cy="100" rx="55" ry="12" fill="white" opacity="0.6">
          <animate attributeName="cx" values="80;460;80" dur="40s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="280" cy="60" rx="60" ry="11" fill="white" opacity="0.55">
          <animate attributeName="cx" values="280;-100;280" dur="50s" repeatCount="indefinite" />
        </ellipse>
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 200 280"
        style={{
          left: "50%",
          top: "10%",
          width: "180px",
          height: "260px",
          transform: "translateX(-50%)",
          animation: "balloon-drift 9s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="balloon-pink" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
          <linearGradient id="balloon-orange" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path d="M 100 10 C 40 10 20 80 30 130 L 100 200 L 170 130 C 180 80 160 10 100 10 Z" fill="url(#balloon-pink)" stroke="#9f1239" strokeWidth="1.5" />
        <path d="M 100 10 C 90 10 75 70 80 130 L 100 200 L 120 130 C 125 70 110 10 100 10 Z" fill="url(#balloon-orange)" opacity="0.95" />
        <path d="M 60 10 Q 56 70 70 130" stroke="#9f1239" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M 140 10 Q 144 70 130 130" stroke="#9f1239" strokeWidth="1" fill="none" opacity="0.6" />
        <line x1="60" y1="130" x2="170" y2="130" stroke="#9f1239" strokeWidth="2" />
        <line x1="60" y1="130" x2="75" y2="225" stroke="#3a1a04" strokeWidth="0.8" />
        <line x1="140" y1="130" x2="125" y2="225" stroke="#3a1a04" strokeWidth="0.8" />
        <line x1="80" y1="130" x2="88" y2="225" stroke="#3a1a04" strokeWidth="0.8" />
        <line x1="120" y1="130" x2="112" y2="225" stroke="#3a1a04" strokeWidth="0.8" />
        <rect x="70" y="225" width="60" height="40" rx="3" fill="#8b5a2b" stroke="#3a1a04" strokeWidth="1.5" />
        <line x1="70" y1="240" x2="130" y2="240" stroke="#3a1a04" strokeWidth="0.6" />
        <line x1="70" y1="255" x2="130" y2="255" stroke="#3a1a04" strokeWidth="0.6" />
        <line x1="85" y1="225" x2="85" y2="265" stroke="#3a1a04" strokeWidth="0.5" opacity="0.5" />
        <line x1="115" y1="225" x2="115" y2="265" stroke="#3a1a04" strokeWidth="0.5" opacity="0.5" />
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 100"
        style={{
          left: "12%",
          top: "44%",
          width: "55px",
          height: "70px",
          opacity: 0.85,
          animation: "balloon-drift-small 11s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <ellipse cx="40" cy="38" rx="30" ry="35" fill="#c084fc" stroke="#7c3aed" strokeWidth="0.8" />
        <line x1="15" y1="70" x2="32" y2="92" stroke="#3a1a04" strokeWidth="0.6" />
        <line x1="65" y1="70" x2="48" y2="92" stroke="#3a1a04" strokeWidth="0.6" />
        <rect x="30" y="90" width="20" height="10" fill="#8b5a2b" />
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 100"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "18%" }}
        aria-hidden="true"
      >
        <path d="M -10 60 Q 80 40 160 55 Q 250 70 330 50 Q 380 40 410 50 L 410 110 L -10 110 Z" fill="#5c842a" />
        <path d="M -10 80 Q 100 70 200 80 Q 300 90 410 80 L 410 110 L -10 110 Z" fill="#3f6418" />
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "70%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#7c2d12" }}>
          Hacia las nubes
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#7c2d12", opacity: 0.55 }} />
        <h2 className="font-display text-3xl leading-tight" style={{ color: "#3a1a04" }}>
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-sm mt-1" style={{ color: "#7c2d12" }}>{data.subtitle}</p>
        )}
        <div className="mt-3 space-y-1">
          <p className="font-display italic text-sm" style={{ color: "#3a1a04" }}>{data.date}</p>
          {data.time && <p className="font-mono text-[10px] tracking-widest" style={{ color: "#7c2d12" }}>{data.time}</p>}
          <p className="font-display italic text-xs max-w-[80%] mx-auto" style={{ color: "#3a1a04" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fefce8" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes balloon-drift {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(-1deg); }
          50% { transform: translateX(-48%) translateY(-12px) rotate(1deg); }
        }
        @keyframes balloon-drift-small {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
