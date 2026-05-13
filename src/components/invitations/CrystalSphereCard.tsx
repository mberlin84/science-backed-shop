import { useRef, useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function CrystalSphereCard({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [light, setLight] = useState({ x: 50, y: 35 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setLight({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl"
      onMouseMove={handleMove}
      onMouseLeave={() => setLight({ x: 50, y: 35 })}
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, #2d1b4d 0%, #1a0b2e 50%, #050314 100%)",
      }}
    >
      {Array.from({ length: 50 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const left = (seed * 11) % 100;
        const top = (seed * 5) % 100;
        const size = 0.5 + ((seed * 3) % 10) / 10;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(167,139,250,0.8)`,
              opacity: 0.55,
              animation: `crystal-star ${2 + (seed % 20) / 10}s ease-in-out ${(seed % 40) / 10}s infinite`,
            }}
          />
        );
      })}

      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "38%",
          width: "200px",
          height: "200px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(255,255,255,0.95) 0%, rgba(196,181,253,0.85) 20%, rgba(139,92,246,0.7) 50%, rgba(76,29,149,0.85) 90%)`,
          boxShadow:
            "0 0 80px rgba(167,139,250,0.65), 0 0 160px rgba(139,92,246,0.45), inset -20px -20px 50px rgba(30,10,50,0.55)",
          transition: "background 0.2s ease-out",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: "calc(50% - 70px)",
          top: "32%",
          width: "40px",
          height: "26px",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "59%",
          width: "150px",
          height: "20px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, rgba(167,139,250,0.3) 0%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 200 60"
        style={{
          left: "50%",
          top: "57%",
          width: "200px",
          height: "60px",
          transform: "translateX(-50%)",
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="crystal-stand" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="14" rx="50" ry="8" fill="url(#crystal-stand)" stroke="#a78bfa" strokeWidth="0.6" />
        <path d="M 60 14 L 50 50 L 150 50 L 140 14 Z" fill="url(#crystal-stand)" stroke="#a78bfa" strokeWidth="0.6" />
      </svg>

      <div className="relative h-full flex flex-col items-center text-center px-12 z-10" style={{ paddingTop: "8%" }}>
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: "#c4b5fd" }}>
          Lo que ven los astros
        </p>
        <div className="my-3 h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #c4b5fd, transparent)" }} />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #c4b5fd 60%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(167,139,250,0.5))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1" style={{ color: "#c4b5fd" }}>{data.subtitle}</p>
        )}
        <div className="absolute bottom-4 left-0 right-0 space-y-1">
          <p className="font-display italic text-purple-100">{data.date}</p>
          {data.time && <p className="font-mono text-xs tracking-widest text-purple-200/85">{data.time}</p>}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-purple-100/90">{data.location}</p>
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest mt-2 text-purple-200/80">
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes crystal-star { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.85; } }
      `}</style>
    </div>
  );
}
