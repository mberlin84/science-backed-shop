import { useState } from "react";
import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function RoyalWaxSealCard({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-[3/4] cursor-pointer select-none"
        style={{ perspective: "1500px" }}
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label={open ? "Cerrar invitación" : "Abrir invitación"}
      >
        <div
          className={`absolute inset-x-3 transition-all duration-700 ease-out ${
            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            top: "6%",
            height: "90%",
            zIndex: 20,
            transitionDelay: open ? "450ms" : "0ms",
          }}
        >
          <div className="w-full h-full bg-[#fef9ec] rounded-sm shadow-2xl border border-[#d4af37]/40 p-2">
            <div className="w-full h-full border-double border-2 border-[#d4af37]/60 p-6 flex flex-col items-center justify-center text-center gap-2">
              <p className="font-display italic text-[#7a5b1e] text-[10px] tracking-[0.35em] uppercase">
                Tenemos el honor
              </p>
              <h2 className="font-display text-3xl text-[#3a2b0a] leading-tight">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="font-display italic text-[#5a4318] text-sm">
                  {data.subtitle}
                </p>
              )}
              <div className="w-16 h-px bg-[#d4af37] my-1" />
              <p className="font-mono text-[10px] tracking-widest text-[#3a2b0a] uppercase">
                {data.date}
              </p>
              {data.time && (
                <p className="font-mono text-[10px] tracking-widest text-[#5a4318]">
                  {data.time}
                </p>
              )}
              <p className="font-display italic text-[#5a4318] text-sm max-w-[85%]">
                {data.location}
              </p>
              {data.dressCode && (
                <p className="text-[10px] font-mono mt-1 text-[#7a5b1e] uppercase tracking-widest">
                  {data.dressCode}
                </p>
              )}
              {data.rsvp && (
                <p className="text-[10px] font-mono text-[#7a5b1e] uppercase tracking-widest">
                  RSVP · {data.rsvp}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 rounded-b-sm shadow-xl overflow-hidden"
          style={{
            top: "45%",
            zIndex: 25,
            background:
              "linear-gradient(140deg, #f3e5cf 0%, #e2c891 50%, #c9a564 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "linear-gradient(180deg, rgba(120,80,30,0.25) 0%, transparent 35%, rgba(120,80,30,0.35) 100%)",
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 top-0 origin-top transition-transform [transition-duration:800ms] ease-in-out"
          style={{
            height: "55%",
            transformStyle: "preserve-3d",
            transform: open ? "rotateX(-180deg)" : "rotateX(0deg)",
            zIndex: open ? 15 : 30,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background:
                "linear-gradient(160deg, #e9d3a9 0%, #d4b576 50%, #b8954c 100%)",
              boxShadow: "inset 0 -4px 12px rgba(120,80,30,0.4)",
            }}
          />
          <div
            className="absolute left-1/2 w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              top: "55%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle at 35% 30%, #c93a4f 0%, #8b1d2c 45%, #4a0a16 100%)",
              boxShadow:
                "inset -3px -5px 10px rgba(0,0,0,0.5), inset 3px 4px 8px rgba(255,255,255,0.15), 0 6px 14px rgba(0,0,0,0.4)",
            }}
          >
            <span
              className="font-display italic text-3xl"
              style={{
                color: "#fce7c8",
                textShadow: "0 1px 2px rgba(0,0,0,0.4)",
              }}
            >
              {data.monogram ?? "M"}
            </span>
          </div>
        </div>
      </div>
      <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
        {open ? "Toca para cerrar" : "Toca para abrir"}
      </p>
    </div>
  );
}
