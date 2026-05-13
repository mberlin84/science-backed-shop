import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function AuroraBorealisCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #0b132b 0%, #1c2541 60%, #112347 100%)",
      }}
    >
      {Array.from({ length: 60 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const left = ((seed * 13) % 100);
        const top = ((seed * 7) % 80);
        const size = 0.5 + ((seed * 3) % 14) / 10;
        const delay = ((seed * 5) % 50) / 10;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.8)`,
              animation: `aurora-star ${3 + delay}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}

      <div
        className="absolute inset-x-0 pointer-events-none mix-blend-screen"
        style={{
          top: "10%",
          height: "55%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(74,222,128,0.25) 30%, rgba(52,211,153,0.45) 50%, rgba(34,197,94,0.3) 65%, transparent 100%)",
          filter: "blur(28px)",
          animation: "aurora-wave-a 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-x-0 pointer-events-none mix-blend-screen"
        style={{
          top: "15%",
          height: "50%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.3) 35%, rgba(217,70,239,0.35) 55%, rgba(124,58,237,0.25) 70%, transparent 100%)",
          filter: "blur(32px)",
          animation: "aurora-wave-b 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-x-0 pointer-events-none mix-blend-screen"
        style={{
          top: "5%",
          height: "45%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.3) 30%, rgba(34,211,238,0.4) 50%, rgba(14,165,233,0.25) 70%, transparent 100%)",
          filter: "blur(34px)",
          animation: "aurora-wave-c 13s ease-in-out infinite",
        }}
      />

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYEnd slice"
        style={{ height: "38%" }}
        aria-hidden="true"
      >
        <polygon points="0,150 60,80 100,110 140,60 200,120 250,70 320,110 360,80 400,130 400,200 0,200" fill="#0a0e22" />
        <polygon points="0,180 50,140 110,160 160,130 230,170 290,140 370,170 400,150 400,200 0,200" fill="#050912" />
        <g fill="#fff" opacity="0.55">
          <polygon points="60,80 56,90 64,90" />
          <polygon points="140,60 134,80 146,80" />
          <polygon points="250,70 244,85 256,85" />
          <polygon points="360,80 354,95 366,95" />
        </g>
        <ellipse cx="200" cy="200" rx="160" ry="14" fill="#0b132b" opacity="0.55" />
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "9%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#a7f3d0" }}
        >
          Bajo la aurora
        </p>
        <div
          className="my-3 h-px w-12"
          style={{ background: "linear-gradient(90deg, transparent, #a7f3d0, transparent)" }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background:
              "linear-gradient(180deg, #ecfeff 0%, #a7f3d0 40%, #c084fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(167,243,208,0.4))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-lg mt-1" style={{ color: "#a7f3d0" }}>
            {data.subtitle}
          </p>
        )}
        <div className="mt-auto pb-24 space-y-1.5">
          <p className="font-display italic text-cyan-50">{data.date}</p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-cyan-200">{data.time}</p>
          )}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-cyan-100">{data.location}</p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-cyan-200/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes aurora-star {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes aurora-wave-a {
          0%, 100% { transform: translateX(0) skewX(-8deg) scaleY(1); opacity: 0.85; }
          50% { transform: translateX(-30px) skewX(8deg) scaleY(1.1); opacity: 1; }
        }
        @keyframes aurora-wave-b {
          0%, 100% { transform: translateX(0) skewX(6deg) scaleY(1); opacity: 0.7; }
          50% { transform: translateX(40px) skewX(-6deg) scaleY(1.08); opacity: 1; }
        }
        @keyframes aurora-wave-c {
          0%, 100% { transform: translateX(0) skewX(-4deg); opacity: 0.65; }
          50% { transform: translateX(-20px) skewX(4deg); opacity: 0.95; }
        }
      `}</style>
    </div>
  );
}
