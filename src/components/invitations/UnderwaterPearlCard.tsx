import { useMemo } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface Bubble {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
}

function prng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function UnderwaterPearlCard({ data }: Props) {
  const bubbles = useMemo<Bubble[]>(() => {
    const r = prng(91);
    return Array.from({ length: 22 }).map(() => ({
      left: r() * 100,
      size: 4 + r() * 14,
      delay: r() * 8,
      duration: 6 + r() * 6,
      drift: (r() - 0.5) * 30,
    }));
  }, []);

  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-[0_30px_80px_-20px_rgba(8,80,110,0.6)]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #67e8f9 0%, #22d3ee 18%, #0891b2 45%, #075985 75%, #0c2a3d 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="uw-ray" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          { x: 40, w: 28, opacity: 0.7 },
          { x: 90, w: 36, opacity: 0.5 },
          { x: 160, w: 32, opacity: 0.85 },
          { x: 220, w: 26, opacity: 0.55 },
          { x: 260, w: 30, opacity: 0.45 },
        ].map((ray, i) => (
          <polygon
            key={i}
            points={`${ray.x} 0 ${ray.x + ray.w} 0 ${ray.x + ray.w * 2.5} 400 ${ray.x - ray.w * 1.5} 400`}
            fill="url(#uw-ray)"
            opacity={ray.opacity}
            style={{ animation: `uw-ray-${i % 3} ${5 + i}s ease-in-out ${i * 0.7}s infinite` }}
          />
        ))}
      </svg>

      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 200"
        style={{
          left: "-10px",
          bottom: 0,
          width: "100px",
          height: "60%",
          transformOrigin: "bottom center",
          animation: "uw-kelp-a 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <path
          d="M 40 200 Q 30 160 38 120 Q 46 80 32 40 Q 28 20 36 0"
          stroke="#065f46"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 50 200 Q 56 160 48 120 Q 42 80 54 40 Q 58 20 50 0"
          stroke="#047857"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 80 200"
        style={{
          right: "-15px",
          bottom: 0,
          width: "120px",
          height: "70%",
          transformOrigin: "bottom center",
          animation: "uw-kelp-b 9s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <path
          d="M 40 200 Q 50 160 42 120 Q 34 80 48 40 Q 52 20 44 0"
          stroke="#065f46"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 30 200 Q 24 160 32 120 Q 38 80 26 40 Q 22 20 30 0"
          stroke="#047857"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      <svg
        className="absolute left-1/2 pointer-events-none"
        viewBox="0 0 200 160"
        style={{
          bottom: "8%",
          width: "150px",
          height: "120px",
          transform: "translateX(-50%)",
        }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="uw-pearl" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fefdf9" />
            <stop offset="80%" stopColor="#e0e7ff" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </radialGradient>
          <linearGradient id="uw-shell-out" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#a8b8b0" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="uw-shell-in" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path
          d="M 30 100 Q 25 70 60 60 Q 100 50 140 60 Q 175 70 170 100 Q 165 130 130 135 Q 100 138 70 135 Q 35 130 30 100 Z"
          fill="url(#uw-shell-in)"
          opacity="0.95"
        />
        <path
          d="M 30 100 Q 25 70 60 60 Q 100 50 140 60 Q 175 70 170 100 L 30 100 Z"
          fill="url(#uw-shell-out)"
        />
        {Array.from({ length: 7 }).map((_, i) => {
          const x1 = 50 + i * 17;
          return (
            <path
              key={i}
              d={`M ${x1} 60 Q ${x1 + 2} 80 ${x1 + 4} 100`}
              stroke="#374151"
              strokeWidth="0.6"
              fill="none"
              opacity="0.5"
            />
          );
        })}
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="url(#uw-pearl)"
          style={{
            filter: "drop-shadow(0 4px 14px rgba(255,255,255,0.6))",
            animation: "uw-pearl-glow 4s ease-in-out infinite",
          }}
        />
        <circle cx="93" cy="93" r="6" fill="#ffffff" opacity="0.7" />
      </svg>

      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${b.left}%`,
            bottom: "-10%",
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 60%, transparent 100%)",
            border: "1px solid rgba(255,255,255,0.4)",
            animation: `uw-bubble ${b.duration}s linear ${b.delay}s infinite`,
            ["--drift" as never]: `${b.drift}px`,
          }}
        />
      ))}

      <div className="relative h-full flex flex-col items-center text-center px-10 z-10" style={{ paddingTop: "10%" }}>
        <p
          className="font-mono text-[10px] tracking-[0.45em] uppercase"
          style={{ color: "#cffafe" }}
        >
          En las profundidades
        </p>
        <div
          className="my-3 h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, #67e8f9, transparent)",
          }}
        />
        <h2
          className="font-display text-4xl leading-tight"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #cffafe 50%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 18px rgba(103,232,249,0.45))",
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className="font-display italic text-lg mt-1"
            style={{ color: "#a5f3fc" }}
          >
            {data.subtitle}
          </p>
        )}
        <div className="mt-6 space-y-1.5">
          <p className="font-display italic text-cyan-50">{data.date}</p>
          {data.time && (
            <p className="font-mono text-xs tracking-widest text-cyan-200">
              {data.time}
            </p>
          )}
          <p className="font-display italic text-sm max-w-[80%] mx-auto text-cyan-50">
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest text-cyan-200/80">
            RSVP · {data.rsvp}
          </p>
        )}
      </div>

      <style>{`
        @keyframes uw-bubble {
          0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.7; }
          100% { transform: translate(var(--drift, 0px), -650px) scale(1); opacity: 0; }
        }
        @keyframes uw-ray-0 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.85; }
        }
        @keyframes uw-ray-1 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.75; }
        }
        @keyframes uw-ray-2 {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        @keyframes uw-kelp-a {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes uw-kelp-b {
          0%, 100% { transform: rotate(3deg); }
          50% { transform: rotate(-4deg); }
        }
        @keyframes uw-pearl-glow {
          0%, 100% { filter: drop-shadow(0 4px 14px rgba(255,255,255,0.6)); }
          50% { filter: drop-shadow(0 4px 24px rgba(255,255,255,0.95)); }
        }
      `}</style>
    </div>
  );
}
