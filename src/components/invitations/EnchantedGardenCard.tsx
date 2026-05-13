import { useRef, useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface FlowerProps {
  className?: string;
  style?: React.CSSProperties;
  paletteId: string;
  innerColor?: string;
}

function Flower({ className, style, paletteId, innerColor = "#fbbf24" }: FlowerProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={paletteId} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#f472b6" />
        </radialGradient>
      </defs>
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="30"
          rx="14"
          ry="22"
          transform={`rotate(${deg} 50 50)`}
          fill={`url(#${paletteId})`}
        />
      ))}
      <circle cx="50" cy="50" r="9" fill={innerColor} stroke="#d97706" strokeWidth="1.2" />
    </svg>
  );
}

export function EnchantedGardenCard({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        background:
          "linear-gradient(135deg, #fef3f8 0%, #fce7f3 30%, #ede9fe 70%, #e0e7ff 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.8) 0%, transparent 60%)",
        }}
      />

      <Flower
        paletteId="garden-petal-1"
        className="absolute -top-8 -left-8 w-36 h-36 transition-transform duration-700 ease-out group-hover:rotate-45"
        style={{
          transform: `translate(${tilt.x * -22}px, ${tilt.y * -22}px)`,
          filter: "drop-shadow(0 6px 14px rgba(244,114,182,0.35))",
        }}
      />
      <Flower
        paletteId="garden-petal-2"
        innerColor="#fde68a"
        className="absolute -bottom-10 -right-10 w-44 h-44 transition-transform duration-700 ease-out group-hover:-rotate-45"
        style={{
          transform: `translate(${tilt.x * -28}px, ${tilt.y * -28}px)`,
          filter: "drop-shadow(0 6px 14px rgba(196,181,253,0.35))",
        }}
      />
      <Flower
        paletteId="garden-petal-3"
        className="absolute top-6 right-4 w-16 h-16 transition-transform duration-700 ease-out group-hover:rotate-180"
        style={{
          transform: `translate(${tilt.x * -10}px, ${tilt.y * -10}px)`,
        }}
      />
      <Flower
        paletteId="garden-petal-4"
        innerColor="#fde68a"
        className="absolute bottom-10 left-2 w-20 h-20 transition-transform duration-700 ease-out group-hover:-rotate-180"
        style={{
          transform: `translate(${tilt.x * -14}px, ${tilt.y * -14}px)`,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "22%",
          right: "18%",
          transform: `translate(${tilt.x * 28}px, ${tilt.y * 28}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className="text-3xl"
          style={{ animation: "garden-float 5s ease-in-out infinite" }}
        >
          🦋
        </div>
      </div>
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "18%",
          right: "30%",
          transform: `translate(${tilt.x * 18}px, ${tilt.y * 18}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className="text-2xl opacity-80"
          style={{ animation: "garden-float 7s ease-in-out 1s infinite" }}
        >
          ✨
        </div>
      </div>

      <div
        className="relative h-full flex flex-col items-center justify-center text-center px-10 z-10"
        style={{
          transform: `translate(${tilt.x * 8}px, ${tilt.y * 8}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#a16fa8]">
          Un jardín de promesas
        </p>
        <div className="w-12 h-px bg-[#a16fa8]/40 my-3" />
        <h2 className="font-display text-4xl text-[#5b2c6f] leading-tight">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-[#7e3b8e] text-lg mt-1">
            {data.subtitle}
          </p>
        )}
        <div className="mt-6 space-y-1.5">
          <p className="font-display italic text-[#6b3676]">{data.date}</p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-[#7e3b8e]">
              {data.time}
            </p>
          )}
          <p className="font-display italic text-[#6b3676] text-sm max-w-[80%] mx-auto">
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest text-[#7e3b8e]/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes garden-float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
      `}</style>
    </div>
  );
}
