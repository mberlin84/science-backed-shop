import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function DesertDunesCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fbeec3 0%, #f6c179 35%, #e09356 65%, #b46235 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          right: "16%",
          top: "12%",
          width: "85px",
          height: "85px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #fef9c3 0%, #fde68a 50%, #fbbf24 90%)",
          boxShadow: "0 0 60px rgba(251,191,36,0.6), 0 0 120px rgba(249,115,22,0.35)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          right: "16%",
          top: "12%",
          width: "85px",
          height: "85px",
          borderRadius: "50%",
          background: "transparent",
          boxShadow:
            "0 0 0 22px rgba(254,243,199,0.12), 0 0 0 44px rgba(254,243,199,0.06)",
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "55%" }}
        aria-hidden="true"
      >
        <path d="M -20 130 Q 60 100 130 120 Q 220 150 310 110 Q 370 90 420 110 L 420 260 L -20 260 Z" fill="#dba264" />
        <path d="M -20 175 Q 50 140 120 165 Q 200 195 290 160 Q 360 140 420 160 L 420 260 L -20 260 Z" fill="#c08350" opacity="0.95" />
        <path d="M -20 225 Q 60 200 140 215 Q 230 240 320 210 Q 390 195 420 210 L 420 260 L -20 260 Z" fill="#7e4e2b" />
        <g stroke="#7e4e2b" strokeWidth="0.5" fill="none" opacity="0.3">
          <path d="M 20 195 Q 50 180 90 192 Q 130 205 170 195" />
          <path d="M 200 180 Q 240 170 280 178 Q 320 187 360 180" />
        </g>
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 60"
        style={{ bottom: "35%", left: "10%", width: "55px", height: "40px" }}
        aria-hidden="true"
      >
        <path d="M 10 50 L 18 18 L 26 38 L 40 12 L 52 32 L 60 22 L 70 50 Z" fill="#3a2412" stroke="#1a0a04" strokeWidth="0.5" />
      </svg>
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 60"
        style={{ bottom: "30%", right: "18%", width: "70px", height: "50px" }}
        aria-hidden="true"
      >
        <path d="M 10 50 L 22 14 L 30 35 L 40 8 L 50 30 L 60 20 L 68 38 L 72 50 Z" fill="#3a2412" stroke="#1a0a04" strokeWidth="0.5" />
      </svg>

      <div
        className="absolute bottom-[30%] left-[20%] pointer-events-none"
        style={{
          width: "70px",
          height: "12px",
          borderRadius: "50%",
          background:
            "linear-gradient(90deg, transparent, rgba(254,249,195,0.6), transparent)",
          filter: "blur(2px)",
          animation: "desert-wind 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[18%] right-[10%] pointer-events-none"
        style={{
          width: "85px",
          height: "10px",
          borderRadius: "50%",
          background:
            "linear-gradient(90deg, transparent, rgba(254,249,195,0.5), transparent)",
          filter: "blur(2px)",
          animation: "desert-wind 8s ease-in-out 1s infinite",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "10%" }}>
        <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: "#7e4e2b" }}>
          Bajo el cielo del desierto
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#7e4e2b", opacity: 0.55 }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#3a1a04",
            textShadow: "0 1px 0 rgba(255,255,255,0.45)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#7e4e2b" }}>{data.subtitle}</p>
        )}
        <div className="mt-5 space-y-1.5">
          <p className="font-display italic" style={{ color: "#3a1a04" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#7e4e2b" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#3a1a04" }}>{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#fdf6e3" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes desert-wind {
          0%, 100% { transform: translateX(0); opacity: 0.4; }
          50% { transform: translateX(40px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
