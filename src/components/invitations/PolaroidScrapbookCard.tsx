import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

interface PolaroidPhotoProps {
  bg: string;
  children: React.ReactNode;
}

function PolaroidPhoto({ bg, children }: PolaroidPhotoProps) {
  return (
    <div
      className="w-full aspect-square flex items-center justify-center"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

export function PolaroidScrapbookCard({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-[3/4] cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label={open ? "Recoger fotos" : "Desplegar fotos"}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #fff8ec 0%, #f0e3c8 70%, #d9c4a0 100%)",
          borderRadius: "8px",
          boxShadow:
            "0 30px 60px -20px rgba(80,60,30,0.45), inset 0 0 80px rgba(120,90,40,0.12)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(139,90,43,0.25) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgba(139,90,43,0.2) 0%, transparent 40%)",
          }}
        />

        <div
          className="absolute z-10"
          style={{
            top: "8%",
            left: "50%",
            width: "60%",
            height: "18px",
            background:
              "repeating-linear-gradient(135deg, rgba(244,114,182,0.7) 0 6px, rgba(251,191,36,0.7) 6px 12px)",
            transform: "translate(-50%, 0) rotate(-4deg)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            opacity: 0.85,
          }}
        />

        <div
          className="absolute z-20 rounded-sm bg-white p-2.5 transition-all duration-700 ease-out"
          style={{
            top: "30%",
            left: "50%",
            width: "58%",
            transform: open
              ? "translate(-115%, 6%) rotate(-22deg)"
              : "translate(-58%, 0) rotate(-9deg)",
            boxShadow: "0 14px 30px rgba(80,60,30,0.35)",
          }}
        >
          <PolaroidPhoto bg="linear-gradient(135deg, #fde2e4 0%, #f9c5d1 100%)">
            <svg viewBox="0 0 100 100" className="w-2/3 h-2/3" aria-hidden="true">
              <path
                d="M 50 78 C 25 60 12 45 20 28 C 26 16 42 16 50 28 C 58 16 74 16 80 28 C 88 45 75 60 50 78 Z"
                fill="#be4a6a"
                opacity="0.85"
              />
            </svg>
          </PolaroidPhoto>
          <p
            className="text-center font-display italic text-[#5a3a20] text-xs mt-1.5"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Para siempre
          </p>
        </div>

        <div
          className="absolute z-30 rounded-sm bg-white p-2.5 transition-all duration-700 ease-out"
          style={{
            top: "26%",
            left: "50%",
            width: "60%",
            transform: open
              ? "translate(15%, -10%) rotate(20deg)"
              : "translate(-42%, -4%) rotate(7deg)",
            boxShadow: "0 14px 30px rgba(80,60,30,0.35)",
          }}
        >
          <PolaroidPhoto bg="linear-gradient(135deg, #d7eef5 0%, #a6d8e5 100%)">
            <svg viewBox="0 0 100 100" className="w-2/3 h-2/3" aria-hidden="true">
              <g fill="none" stroke="#d4a04c" strokeWidth="4">
                <circle cx="38" cy="55" r="18" />
                <circle cx="64" cy="55" r="18" />
              </g>
              <g fill="#d4a04c">
                <rect x="35" y="32" width="6" height="6" />
                <rect x="61" y="32" width="6" height="6" />
              </g>
            </svg>
          </PolaroidPhoto>
          <p
            className="text-center font-display italic text-[#5a3a20] text-xs mt-1.5"
          >
            12 · 09 · 2026
          </p>
        </div>

        <div
          className="absolute z-40 rounded-sm bg-white p-2.5 transition-all duration-700 ease-out"
          style={{
            top: "22%",
            left: "50%",
            width: "62%",
            transform: open
              ? "translate(-50%, -2%) rotate(0deg) scale(1.05)"
              : "translate(-50%, 0) rotate(-3deg)",
            boxShadow: "0 18px 40px rgba(80,60,30,0.5)",
          }}
        >
          <div
            className="w-full aspect-square flex flex-col items-center justify-center text-center p-4"
            style={{
              background:
                "linear-gradient(135deg, #fff2e0 0%, #fde2cd 60%, #f4c7a8 100%)",
            }}
          >
            <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-[#8a4a2c]">
              Nos casamos
            </p>
            <div className="w-8 h-px bg-[#8a4a2c]/40 my-2" />
            <h2 className="font-display text-2xl text-[#5c2e1a] leading-tight">
              {data.title}
            </h2>
            <p className="font-display italic text-[10px] text-[#7a3a22] mt-2">
              {data.date}
            </p>
            <p className="font-display italic text-[9px] text-[#7a3a22] max-w-[90%] mt-1">
              {data.location}
            </p>
          </div>
          <p className="text-center font-display italic text-[#5a3a20] text-sm mt-2">
            {data.subtitle ?? "Save the date"}
          </p>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        >
          {data.rsvp && (
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#8a4a2c]">
              RSVP · {data.rsvp}
            </p>
          )}
        </div>

        <div
          className="absolute z-10 pointer-events-none"
          style={{
            bottom: "12%",
            left: "10%",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #fef3c7 0%, #d4a04c 60%, #8a6a2c 100%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            transform: "rotate(-10deg)",
          }}
        />
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: "60%",
            right: "8%",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #fef3c7 0%, #d4a04c 60%, #8a6a2c 100%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
        {open ? "Toca para recoger" : "Toca para desplegar"}
      </p>
    </div>
  );
}
