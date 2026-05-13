import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function BauhausGeometricCard({ data }: Props) {
  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{ background: "#f5f1e8" }}
    >
      <div
        className="absolute group-hover:rotate-[120deg] transition-transform duration-1000 ease-out"
        style={{
          top: "-8%",
          right: "-8%",
          width: "55%",
          aspectRatio: "1",
          background: "#dc2626",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute group-hover:translate-x-4 transition-transform duration-700 ease-out"
        style={{
          top: "10%",
          left: "0",
          width: "40%",
          height: "10%",
          background: "#1d4ed8",
        }}
      />
      <div
        className="absolute group-hover:-translate-x-3 transition-transform duration-700 ease-out delay-100"
        style={{
          top: "35%",
          left: "0",
          width: "55%",
          height: "8%",
          background: "#fbbf24",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "0",
          left: "0",
          width: "35%",
          height: "35%",
          background: "#1d4ed8",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      />
      <div
        className="absolute group-hover:rotate-90 transition-transform duration-1000 ease-out"
        style={{
          bottom: "18%",
          right: "12%",
          width: "70px",
          height: "70px",
          background: "#1c1c1c",
          transform: "rotate(45deg)",
          transformOrigin: "center",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "60%",
          right: "8%",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#fbbf24",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "78%",
          left: "12%",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#dc2626",
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-12 z-10">
        <p
          className="font-mono text-[10px] tracking-[0.5em] uppercase"
          style={{ color: "#1c1c1c" }}
        >
          Form follows feeling
        </p>
        <div className="my-3 h-px w-10" style={{ background: "#1c1c1c" }} />
        <h2
          className="font-display text-5xl leading-[0.95] tracking-tight"
          style={{ color: "#1c1c1c" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-mono text-xs tracking-[0.35em] uppercase mt-2" style={{ color: "#1d4ed8" }}>
            {data.subtitle}
          </p>
        )}
        <div className="mt-6 space-y-1.5">
          <p className="font-mono text-[11px] tracking-[0.4em] uppercase" style={{ color: "#1c1c1c" }}>
            {data.date}
          </p>
          {data.time && (
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: "#1d4ed8" }}>
              {data.time}
            </p>
          )}
          <p className="font-display italic text-sm max-w-[80%] mx-auto" style={{ color: "#1c1c1c" }}>
            {data.location}
          </p>
        </div>
        {data.rsvp && (
          <p className="absolute bottom-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: "#dc2626" }}>
            RSVP · {data.rsvp}
          </p>
        )}
      </div>
    </div>
  );
}
