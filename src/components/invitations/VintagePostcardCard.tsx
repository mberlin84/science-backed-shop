import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function VintagePostcardCard({ data }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto">
      <div
        className="relative w-full aspect-[4/3] cursor-pointer"
        style={{ perspective: "1500px" }}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={flipped ? "Ver el frente" : "Ver el reverso"}
      >
        <div
          className="absolute inset-0 transition-transform [transition-duration:900ms] ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 rounded-md overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              background: "linear-gradient(135deg, #f5e6c8 0%, #e6d3a3 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(139,90,43,0.35) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(139,90,43,0.25) 0%, transparent 45%), radial-gradient(circle at 50% 90%, rgba(139,90,43,0.2) 0%, transparent 40%)",
              }}
            />
            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 w-full h-full opacity-90"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="vintage-sky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#d4a771" />
                  <stop offset="100%" stopColor="#e8c89a" />
                </linearGradient>
              </defs>
              <rect width="400" height="200" fill="url(#vintage-sky)" />
              <circle cx="310" cy="70" r="28" fill="#fbd38d" opacity="0.75" />
              <circle cx="310" cy="70" r="45" fill="#fbd38d" opacity="0.18" />
              <path
                d="M 0 200 Q 100 130 200 170 T 400 150 L 400 300 L 0 300 Z"
                fill="#9a7e4f"
                opacity="0.75"
              />
              <path
                d="M 0 235 Q 80 205 160 225 T 400 205 L 400 300 L 0 300 Z"
                fill="#7e6438"
                opacity="0.9"
              />
              <g fill="#3f3322" opacity="0.55">
                <path d="M 80 200 L 90 170 L 100 200 Z" />
                <path d="M 140 195 L 155 155 L 170 195 Z" />
                <path d="M 260 200 L 275 170 L 290 200 Z" />
              </g>
            </svg>

            <div className="absolute inset-x-0 bottom-0 p-7 z-10">
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-900/80">
                Postal especial
              </p>
              <h2 className="font-display text-4xl text-amber-950 leading-tight">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="font-display italic text-amber-800">
                  {data.subtitle}
                </p>
              )}
            </div>

            <svg
              className="absolute top-4 right-4 w-16 h-20 drop-shadow-md"
              viewBox="0 0 64 80"
              style={{ transform: "rotate(6deg)" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="stamp-grad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#7c2d12" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="60"
                height="76"
                rx="1"
                fill="#fefce8"
                stroke="#7c2d12"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              <rect x="6" y="6" width="52" height="68" fill="url(#stamp-grad)" />
              <text
                x="32"
                y="52"
                fontFamily="DM Serif Display, serif"
                fontSize="36"
                fontStyle="italic"
                fill="#fef3c7"
                textAnchor="middle"
              >
                {data.monogram ?? "M"}
              </text>
            </svg>

            <div
              className="absolute top-6 left-6 w-24 h-24 rounded-full border-2 border-amber-900/40 flex items-center justify-center"
              style={{ transform: "rotate(-12deg)" }}
            >
              <span className="font-mono text-[9px] tracking-[0.25em] text-amber-900/70 uppercase text-center leading-tight">
                Air<br />Mail<br />2026
              </span>
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-md overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, #f5e6c8 0%, #e8d5a8 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(139,90,43,0.3) 0%, transparent 45%), radial-gradient(circle at 70% 80%, rgba(139,90,43,0.25) 0%, transparent 50%)",
              }}
            />
            <div className="absolute top-6 bottom-6 left-1/2 w-px bg-amber-900/30" />

            <div className="absolute left-6 top-6 bottom-6 w-[44%] flex flex-col justify-center gap-2">
              <p className="font-display italic text-amber-900 text-xs">Querido amigo,</p>
              <p className="font-display italic text-amber-950 text-sm leading-relaxed">
                {data.message ??
                  "Tu presencia hará de este día un recuerdo inolvidable. Acompáñanos a celebrar."}
              </p>
              <p className="font-display italic text-amber-900 text-xs mt-2">
                — {data.hosts ?? "Los anfitriones"}
              </p>
            </div>

            <div className="absolute right-6 top-6 bottom-6 w-[44%] flex flex-col gap-2">
              <p className="font-mono text-[9px] tracking-widest uppercase text-amber-700">
                Detalles
              </p>
              <p className="font-display text-amber-950 text-lg leading-tight">
                {data.title}
              </p>
              <div className="w-12 h-px bg-amber-700/40" />
              <p className="font-mono text-[10px] tracking-wider text-amber-900 uppercase">
                {data.date}
              </p>
              {data.time && (
                <p className="font-mono text-[10px] tracking-wider text-amber-800">
                  {data.time}
                </p>
              )}
              <p className="font-display italic text-amber-900 text-sm">
                {data.location}
              </p>
              {data.rsvp && (
                <p className="font-mono text-[9px] uppercase tracking-widest text-amber-700 mt-auto">
                  RSVP · {data.rsvp}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
        {flipped ? "Toca para ver el frente" : "Toca para leer al reverso"}
      </p>
    </div>
  );
}
