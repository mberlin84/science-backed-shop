import { useRef, useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function HolographicModernCard({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glow: 50, glowY: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (yPct - 0.5) * -14,
      y: (xPct - 0.5) * 14,
      glow: xPct * 100,
      glowY: yPct * 100,
      active: true,
    });
  };

  const handleLeave = () =>
    setTilt({ x: 0, y: 0, glow: 50, glowY: 50, active: false });

  return (
    <div
      ref={ref}
      className="w-full max-w-md mx-auto"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <div
        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-[0_30px_60px_-15px_rgba(99,102,241,0.6)]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: tilt.active
            ? "transform 0.05s ease-out"
            : "transform 0.6s ease-out",
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
        }}
      >
        <div
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            background: `conic-gradient(from ${tilt.glow * 3.6}deg at ${tilt.glow}% ${tilt.glowY}%, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc)`,
            opacity: tilt.active ? 0.45 : 0.3,
            transition: "opacity 0.3s ease-out",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${tilt.glow}% ${tilt.glowY}%, rgba(255,255,255,0.3) 0%, transparent 45%)`,
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          viewBox="0 0 300 400"
          aria-hidden="true"
        >
          <g stroke="#ffffff" strokeWidth="0.4" fill="none">
            <circle cx="150" cy="200" r="170" />
            <circle cx="150" cy="200" r="130" />
            <circle cx="150" cy="200" r="90" />
            <circle cx="150" cy="200" r="50" />
            <line x1="0" y1="200" x2="300" y2="200" />
            <line x1="150" y1="0" x2="150" y2="400" />
          </g>
        </svg>

        <div
          className="relative h-full flex flex-col items-center justify-center text-center px-10 z-10"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-fuchsia-200/90">
            Invitación exclusiva
          </p>
          <div className="w-12 h-px bg-fuchsia-300/60 my-3" />
          <h2
            className="font-display text-4xl leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #f0abfc 50%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 22px rgba(217,70,239,0.5))",
            }}
          >
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="font-display italic text-cyan-100/80 text-lg mt-1">
              {data.subtitle}
            </p>
          )}
          <div className="mt-6 space-y-1.5">
            <p className="font-mono text-xs tracking-widest text-fuchsia-100/90 uppercase">
              {data.date}
            </p>
            {data.time && (
              <p className="font-mono text-xs tracking-widest text-cyan-200/80">
                {data.time}
              </p>
            )}
            <p className="font-display italic text-fuchsia-50/90 text-sm max-w-[80%] mx-auto">
              {data.location}
            </p>
          </div>
          {data.rsvp && (
            <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest text-cyan-200/70">
              RSVP · {data.rsvp}
            </p>
          )}
        </div>

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.2) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
