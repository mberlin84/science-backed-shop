import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function MessageInBottleCard({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer select-none shadow-2xl"
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label={open ? "Volver a guardar el mensaje" : "Sacar el mensaje de la botella"}
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #fde6c2 0%, #ecd0a3 35%, #b89572 75%, #6b4423 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(101,67,33,0.4) 0%, transparent 30%), radial-gradient(circle at 88% 82%, rgba(101,67,33,0.5) 0%, transparent 35%), radial-gradient(circle at 70% 25%, rgba(101,67,33,0.3) 0%, transparent 25%)",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          viewBox="0 0 300 400"
          aria-hidden="true"
        >
          <g stroke="#5a3a18" strokeWidth="0.6" fill="none">
            <path d="M 30 60 Q 60 75 90 65 Q 130 50 170 70 Q 220 90 270 80" />
            <path d="M 20 130 Q 70 110 120 130 Q 180 155 250 130" />
            <path d="M 50 200 Q 90 220 150 210 Q 220 195 280 215" />
            <path d="M 30 290 Q 80 280 130 295 Q 200 315 260 295" />
            <ellipse cx="80" cy="100" rx="22" ry="14" />
            <ellipse cx="200" cy="180" rx="28" ry="18" />
            <ellipse cx="140" cy="320" rx="20" ry="12" />
          </g>
          <g stroke="#5a3a18" strokeWidth="0.6" fill="none" strokeDasharray="4 3">
            <path d="M 80 100 Q 130 140 200 180" />
            <path d="M 200 180 Q 170 250 140 320" />
          </g>
          <g fill="#5a3a18" opacity="0.6">
            <circle cx="80" cy="100" r="3" />
            <circle cx="200" cy="180" r="3" />
            <circle cx="140" cy="320" r="3" />
          </g>
        </svg>

        <svg
          className="absolute pointer-events-none"
          viewBox="0 0 100 100"
          style={{
            top: "8%",
            right: "8%",
            width: "60px",
            height: "60px",
            opacity: 0.55,
          }}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="38" fill="none" stroke="#3a2412" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#3a2412" strokeWidth="0.6" />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            const r1 = i % 4 === 0 ? 28 : 32;
            const r2 = 38;
            return (
              <line
                key={i}
                x1={50 + Math.cos(a) * r1}
                y1={50 + Math.sin(a) * r1}
                x2={50 + Math.cos(a) * r2}
                y2={50 + Math.sin(a) * r2}
                stroke="#3a2412"
                strokeWidth={i % 4 === 0 ? 1.6 : 0.8}
              />
            );
          })}
          <polygon points="50,18 56,50 50,82 44,50" fill="#3a2412" />
          <polygon points="50,18 50,50 56,50" fill="#5a3a18" />
          <circle cx="50" cy="50" r="3" fill="#3a2412" />
          <text
            x="50"
            y="14"
            fontSize="8"
            fontFamily="serif"
            fill="#3a2412"
            textAnchor="middle"
          >
            N
          </text>
        </svg>

        <svg
          className="absolute pointer-events-none"
          viewBox="0 0 60 80"
          style={{
            bottom: "10%",
            left: "8%",
            width: "50px",
            height: "60px",
            opacity: 0.55,
          }}
          aria-hidden="true"
        >
          <circle cx="30" cy="12" r="6" fill="none" stroke="#3a2412" strokeWidth="2" />
          <path
            d="M 30 18 L 30 50 M 20 26 L 40 26 M 16 50 Q 30 70 44 50"
            stroke="#3a2412"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 16 50 Q 12 55 18 58 M 44 50 Q 48 55 42 58"
            stroke="#3a2412"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) ${open ? "scale(1.05)" : "scale(1)"}`,
            transition: "transform 0.6s ease-out",
            animation: "bottle-bob 4s ease-in-out infinite",
            width: "150px",
            height: "260px",
          }}
        >
          <svg viewBox="0 0 150 260" width="150" height="260" aria-hidden="true">
            <defs>
              <linearGradient id="bottle-glass" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#ecfeff" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#a5f3fc" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#0e7490" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="bottle-cork" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#c89569" />
                <stop offset="100%" stopColor="#7c4a22" />
              </linearGradient>
            </defs>
            <path
              d="M 60 0 L 90 0 L 90 50 Q 90 60 100 65 Q 130 80 130 130 L 130 230 Q 130 250 110 255 L 40 255 Q 20 250 20 230 L 20 130 Q 20 80 50 65 Q 60 60 60 50 Z"
              fill="url(#bottle-glass)"
              stroke="#0c4a6e"
              strokeWidth="1.5"
              opacity="0.92"
            />
            <path
              d="M 30 80 Q 26 130 30 200"
              stroke="#fff"
              strokeWidth="3"
              fill="none"
              opacity="0.55"
              strokeLinecap="round"
            />
            <path
              d="M 110 220 Q 116 200 112 170"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              opacity="0.45"
              strokeLinecap="round"
            />
            <rect
              x="58"
              y="-8"
              width="34"
              height="22"
              rx="3"
              fill="url(#bottle-cork)"
              style={{
                transformOrigin: "75px 14px",
                transform: open ? "translateY(-30px) rotate(-12deg)" : "translateY(0) rotate(0)",
                transition: "transform 0.6s ease-out",
              }}
            />
            <g
              style={{
                transformOrigin: "75px 150px",
                transform: open ? "translateY(-80px) scale(1.15)" : "translateY(0) scale(1)",
                transition: "transform 0.7s ease-out 0.2s",
                opacity: open ? 0 : 1,
              }}
            >
              <rect x="55" y="100" width="40" height="100" rx="4" fill="#fef3c7" stroke="#b45309" strokeWidth="0.8" />
              <line x1="60" y1="115" x2="90" y2="115" stroke="#a16207" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="130" x2="90" y2="130" stroke="#a16207" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="145" x2="86" y2="145" stroke="#a16207" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="160" x2="90" y2="160" stroke="#a16207" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="175" x2="84" y2="175" stroke="#a16207" strokeWidth="0.6" opacity="0.6" />
              <path d="M 55 100 Q 75 95 95 100" stroke="#b45309" strokeWidth="0.8" fill="none" />
              <path d="M 55 200 Q 75 205 95 200" stroke="#b45309" strokeWidth="0.8" fill="none" />
            </g>
          </svg>
        </div>

        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-12 transition-opacity duration-500"
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            background:
              "radial-gradient(ellipse at center, rgba(254,243,199,0.96) 0%, rgba(252,231,180,0.92) 60%, rgba(252,231,180,0.85) 100%)",
            transitionDelay: open ? "300ms" : "0ms",
          }}
        >
          <p
            className="font-mono text-[10px] tracking-[0.45em] uppercase"
            style={{ color: "#7c2d12" }}
          >
            Mensaje en una botella
          </p>
          <div
            className="my-3 h-px w-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7c2d12, transparent)",
            }}
          />
          <h2
            className="font-display text-3xl leading-tight"
            style={{ color: "#3f1d04" }}
          >
            {data.title}
          </h2>
          {data.subtitle && (
            <p
              className="font-display italic text-base mt-1"
              style={{ color: "#7c2d12" }}
            >
              {data.subtitle}
            </p>
          )}
          <div className="mt-5 space-y-1">
            <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#3f1d04" }}>
              {data.date}
            </p>
            {data.time && (
              <p className="font-mono text-[10px] tracking-widest" style={{ color: "#7c2d12" }}>
                {data.time}
              </p>
            )}
            <p
              className="font-display italic text-sm max-w-[85%] mx-auto"
              style={{ color: "#3f1d04" }}
            >
              {data.location}
            </p>
          </div>
          {data.message && (
            <p
              className="font-display italic text-xs mt-4 max-w-[85%] mx-auto leading-relaxed"
              style={{ color: "#7c2d12" }}
            >
              "{data.message}"
            </p>
          )}
          {data.rsvp && (
            <p
              className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "#7c2d12" }}
            >
              RSVP · {data.rsvp}
            </p>
          )}
        </div>
      </div>
      <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
        {open ? "Toca para volver" : "Toca para destapar"}
      </p>

      <style>{`
        @keyframes bottle-bob {
          0%, 100% { transform: translate(-50%, -50%) rotate(-1.5deg); }
          50% { transform: translate(-50%, -54%) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
