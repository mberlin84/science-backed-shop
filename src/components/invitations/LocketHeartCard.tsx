import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function LocketHeartCard({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-[3/4] cursor-pointer select-none rounded-lg overflow-hidden shadow-2xl"
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label={open ? "Cerrar relicario" : "Abrir relicario"}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #fef3c7 0%, #fde68a 35%, #d4a04c 75%, #92651a 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        >
          <filter id="locket-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
            <feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.2  0 0 0 0 0.1  0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#locket-grain)" />
        </svg>

        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: "240px",
            height: "260px",
            transform: "translate(-50%, -50%)",
            perspective: "1200px",
          }}
        >
          <svg
            viewBox="0 0 240 260"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="locket-gold" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="50%" stopColor="#d4a04c" />
                <stop offset="100%" stopColor="#7a5c1e" />
              </linearGradient>
            </defs>
            <path
              d="M 120 30 L 110 14 L 130 14 L 120 30 Z"
              fill="url(#locket-gold)"
              stroke="#7a5c1e"
              strokeWidth="1"
            />
            <circle cx="120" cy="12" r="5" fill="url(#locket-gold)" stroke="#7a5c1e" strokeWidth="1" />
            <path
              d="M 50 30 Q 50 30 60 22 Q 90 14 100 28 M 140 28 Q 150 14 180 22 Q 190 30 190 30"
              stroke="url(#locket-gold)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.55"
            />
          </svg>

          <div
            className="absolute"
            style={{
              top: "30px",
              left: "0",
              width: "120px",
              height: "230px",
              transformOrigin: "right center",
              transform: open ? "rotateY(-145deg)" : "rotateY(0deg)",
              transition: "transform 1s ease-in-out",
              transformStyle: "preserve-3d",
            }}
          >
            <svg
              viewBox="0 0 120 230"
              className="absolute inset-0 w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
              aria-hidden="true"
            >
              <path
                d="M 120 60 C 120 30 95 12 75 20 C 55 28 60 50 60 60 L 120 60 Z M 60 60 L 120 60 L 120 200 Q 120 220 100 222 L 60 222 Z"
                fill="url(#locket-gold)"
                stroke="#7a5c1e"
                strokeWidth="1.5"
              />
              <path
                d="M 120 60 C 120 30 95 12 75 20 C 55 28 60 50 60 60 L 120 60 Z"
                fill="none"
                stroke="#fef3c7"
                strokeWidth="0.6"
                opacity="0.5"
              />
              <text
                x="92"
                y="148"
                fontFamily="DM Serif Display, serif"
                fontStyle="italic"
                fontSize="44"
                fill="#7a5c1e"
                textAnchor="middle"
                opacity="0.75"
              >
                {data.monogram ?? "M"}
              </text>
            </svg>
          </div>

          <div
            className="absolute"
            style={{
              top: "30px",
              left: "120px",
              width: "120px",
              height: "230px",
              transformOrigin: "left center",
              transform: open ? "rotateY(145deg)" : "rotateY(0deg)",
              transition: "transform 1s ease-in-out",
              transformStyle: "preserve-3d",
            }}
          >
            <svg
              viewBox="0 0 120 230"
              className="absolute inset-0 w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
              aria-hidden="true"
            >
              <path
                d="M 0 60 C 0 30 25 12 45 20 C 65 28 60 50 60 60 L 0 60 Z M 0 60 L 60 60 L 60 222 L 20 222 Q 0 220 0 200 Z"
                fill="url(#locket-gold)"
                stroke="#7a5c1e"
                strokeWidth="1.5"
              />
              <path
                d="M 0 60 C 0 30 25 12 45 20 C 65 28 60 50 60 60 L 0 60 Z"
                fill="none"
                stroke="#fef3c7"
                strokeWidth="0.6"
                opacity="0.5"
              />
              <path
                d="M 30 130 Q 18 118 18 105 Q 18 96 28 96 Q 36 96 38 110 Q 40 96 48 96 Q 58 96 58 105 Q 58 118 46 130 L 38 138 Z"
                fill="#be123c"
                opacity="0.65"
              />
            </svg>
          </div>

          <div
            className="absolute flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            style={{
              top: "30px",
              left: "60px",
              width: "120px",
              height: "230px",
              opacity: open ? 1 : 0,
              transition: "opacity 0.5s ease-out 0.5s",
              background:
                "linear-gradient(135deg, #fffbe8 0%, #fef0c8 100%)",
              borderRadius: "60px 60px 8px 8px",
              border: "1px solid rgba(122,92,30,0.3)",
              boxShadow: "inset 0 0 20px rgba(122,92,30,0.15)",
            }}
          >
            <p className="font-display italic text-[8px] tracking-[0.25em] uppercase" style={{ color: "#7a5c1e" }}>
              Para siempre
            </p>
            <h3 className="font-display text-base leading-tight mt-1" style={{ color: "#3a2b0a" }}>
              {data.title}
            </h3>
            <div className="w-6 h-px my-1.5" style={{ background: "#7a5c1e" }} />
            <p className="font-mono text-[7px] tracking-widest uppercase" style={{ color: "#3a2b0a" }}>
              {data.date}
            </p>
            <p className="font-display italic text-[9px] mt-1" style={{ color: "#5a4318" }}>
              {data.location}
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p
            className="font-display italic text-sm"
            style={{
              color: "#3a2b0a",
              opacity: open ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          >
            {data.subtitle ?? "Acompáñanos"}
          </p>
        </div>
      </div>
      <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
        {open ? "Toca para cerrar" : "Toca el relicario"}
      </p>
    </div>
  );
}
