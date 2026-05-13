import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function StarryNightCard({ data }: Props) {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(42);
    const list: Star[] = [];
    for (let i = 0; i < 70; i++) {
      list.push({
        top: rand() * 100,
        left: rand() * 100,
        size: 0.6 + rand() * 1.8,
        delay: rand() * 4,
        duration: 2 + rand() * 3,
      });
    }
    return list;
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group shadow-[0_30px_80px_-20px_rgba(60,30,100,0.6)]"
      style={{
        background:
          "radial-gradient(ellipse at 30% 10%, #2a1b4d 0%, #100a2e 50%, #050314 100%)",
      }}
    >
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.85)`,
            animation: `starry-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="absolute right-10 top-12 w-20 h-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #fffbe6 0%, #fde68a 60%, #fbbf24 100%)",
          boxShadow:
            "0 0 40px rgba(253,224,71,0.45), inset -8px -8px 20px rgba(0,0,0,0.4)",
          animation: "starry-glow 4s ease-in-out infinite",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        viewBox="0 0 400 533"
        aria-hidden="true"
      >
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none">
          <line x1="60" y1="80" x2="120" y2="160" />
          <line x1="120" y1="160" x2="210" y2="130" />
          <line x1="210" y1="130" x2="280" y2="190" />
          <line x1="280" y1="190" x2="330" y2="120" />
        </g>
        <g fill="#fff">
          <circle cx="60" cy="80" r="1.6" />
          <circle cx="120" cy="160" r="1.6" />
          <circle cx="210" cy="130" r="1.6" />
          <circle cx="280" cy="190" r="1.6" />
          <circle cx="330" cy="120" r="1.6" />
        </g>
      </svg>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 65%, transparent 25%, rgba(5,3,20,0.75) 95%)",
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-10 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2"
          style={{ color: "#fbbf24" }}
        >
          Bajo las estrellas
        </p>
        <div
          className="w-12 h-px my-2"
          style={{
            background:
              "linear-gradient(90deg, transparent, #fbbf24, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #fde68a 60%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 24px rgba(253,224,71,0.35))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-amber-100/80 text-lg mt-1">
            {data.subtitle}
          </p>
        )}
        <div className="mt-6 space-y-1.5">
          <p className="font-display italic text-amber-50/90">{data.date}</p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-amber-200/70">
              {data.time}
            </p>
          )}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-amber-100/70">
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest text-amber-200/60">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes starry-twinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes starry-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(253,224,71,0.4), inset -8px -8px 20px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 0 55px rgba(253,224,71,0.65), inset -8px -8px 20px rgba(0,0,0,0.4); }
        }
      `}</style>
    </div>
  );
}
