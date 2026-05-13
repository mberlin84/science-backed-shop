import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function MountainVistaCard({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, #fce7c8 0%, #fbb98a 35%, #f97316 55%, #ea580c 65%, transparent 65%)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          background:
            "linear-gradient(180deg, #c2410c 0%, #7c2d12 30%, #422006 100%)",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "26%",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, #fef3c7 0%, #fbbf24 60%, #f97316 100%)",
          boxShadow: "0 0 50px rgba(251,191,36,0.6), 0 0 100px rgba(249,115,22,0.4)",
        }}
      />

      <svg
        className="absolute inset-x-0 pointer-events-none"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ top: 0, height: "100%" }}
        aria-hidden="true"
      >
        <polygon
          points="-20,260 60,160 110,200 180,140 240,180 310,150 380,200 420,180 420,420 -20,420"
          fill="#5a2a1c"
          opacity="0.95"
        />
        <polygon
          points="-20,290 50,210 130,250 200,200 270,240 340,210 420,250 420,420 -20,420"
          fill="#3f1e0f"
          opacity="0.95"
        />
        <polygon
          points="-20,330 80,280 160,310 240,280 320,310 400,290 420,310 420,420 -20,420"
          fill="#251208"
        />
        <polygon points="60,160 80,140 100,150 110,200" fill="#fefce8" opacity="0.55" />
        <polygon points="180,140 200,120 230,160" fill="#fefce8" opacity="0.5" />
        <polygon points="310,150 330,128 360,160" fill="#fefce8" opacity="0.5" />
        <line x1="0" y1="270" x2="400" y2="270" stroke="#9a3412" strokeWidth="0.7" opacity="0.4" />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          top: "16%",
          left: "10%",
          width: "60px",
          height: "20px",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)",
          filter: "blur(4px)",
          animation: "mountain-cloud 18s linear infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "22%",
          right: "12%",
          width: "70px",
          height: "22px",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)",
          filter: "blur(4px)",
          animation: "mountain-cloud-b 22s linear infinite",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#7c2d12" }}
        >
          Más alto que las montañas
        </p>
        <div className="my-3 h-px w-12" style={{ background: "#7c2d12", opacity: 0.6 }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            color: "#1c0a04",
            textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#7c2d12" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1 px-4">
          <p className="font-display italic" style={{ color: "#fef3c7" }}>{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest" style={{ color: "#fed7aa" }}>{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#fef3c7" }}>{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2" style={{ color: "#fed7aa" }}>
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes mountain-cloud {
          0% { transform: translateX(0); }
          100% { transform: translateX(280px); }
        }
        @keyframes mountain-cloud-b {
          0% { transform: translateX(0); }
          100% { transform: translateX(-260px); }
        }
      `}</style>
    </div>
  );
}
