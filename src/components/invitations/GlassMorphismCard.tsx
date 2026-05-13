import { useRef, useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function GlassMorphismCard({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      style={{
        background:
          "linear-gradient(135deg, #fb7185 0%, #c084fc 35%, #60a5fa 65%, #34d399 100%)",
      }}
    >
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-300"
        style={{
          width: "240px",
          height: "240px",
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 35% 30%, #fbbf24 0%, #f97316 60%, #dc2626 100%)",
          filter: "blur(40px)",
          opacity: 0.85,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-500"
        style={{
          width: "180px",
          height: "180px",
          right: `${100 - pos.x}%`,
          bottom: `${100 - pos.y}%`,
          transform: "translate(50%, 50%)",
          background: "radial-gradient(circle, #ec4899 0%, #a855f7 100%)",
          filter: "blur(45px)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "160px",
          height: "160px",
          top: "10%",
          right: "8%",
          background: "radial-gradient(circle, #34d399 0%, #0891b2 100%)",
          filter: "blur(35px)",
          opacity: 0.75,
        }}
      />

      <div
        className="absolute inset-x-6 top-[14%] bottom-[14%] rounded-3xl border border-white/40 z-10"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.5), 0 20px 50px -10px rgba(0,0,0,0.3)",
        }}
      >
        <div className="h-full flex flex-col items-center justify-center text-center px-8">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/85">
            Reflejos del amor
          </p>
          <div className="my-3 h-px w-10 bg-white/60" />
          <h2
            className="font-display text-4xl leading-tight"
            style={{
              color: "white",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="font-display italic text-base mt-1 text-white/90">
              {data.subtitle}
            </p>
          )}
          <div className="mt-6 space-y-1.5">
            <p className="font-display italic text-white">{data.date}</p>
            {data.time && (
              <p className="font-mono text-xs tracking-widest text-white/85">{data.time}</p>
            )}
            <p className="font-display italic text-sm max-w-[80%] mx-auto text-white">
              {data.location}
            </p>
          </div>
          {data.rsvp && (
            <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-white/80">
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
