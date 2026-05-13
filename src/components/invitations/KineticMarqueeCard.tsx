import type { InvitationData } from "./types";

interface Props {
  data: InvitationData;
}

export function KineticMarqueeCard({ data }: Props) {
  const repeat = (text: string, n: number) =>
    Array.from({ length: n })
      .map(() => text)
      .join(" · ");

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-md overflow-hidden cursor-pointer shadow-2xl"
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #e7e5e4 100%)",
      }}
    >
      {[6, 28, 56, 78].map((top, i) => (
        <div
          key={i}
          className="absolute inset-x-0 overflow-hidden whitespace-nowrap py-1 pointer-events-none"
          style={{
            top: `${top}%`,
            background: i % 2 === 0 ? "#0a0a0a" : "#fafafa",
            transform: `rotate(${i % 2 === 0 ? -1.5 : 1.2}deg)`,
            width: "120%",
            marginLeft: "-10%",
          }}
        >
          <div
            className="inline-block font-mono uppercase tracking-[0.35em] text-sm whitespace-nowrap"
            style={{
              color: i % 2 === 0 ? "#fafafa" : "#0a0a0a",
              animation: `marquee-scroll-${i % 2} ${18 + i * 4}s linear infinite`,
            }}
          >
            {repeat(
              i === 0
                ? `${data.title} · Save the date · ${data.title} · `
                : i === 1
                ? `${data.date} · ${data.location} · ${data.date} · `
                : i === 2
                ? "Una nueva historia comienza · una nueva historia comienza · "
                : "RSVP · gracias por venir · RSVP · gracias por venir · ",
              5,
            )}
          </div>
        </div>
      ))}

      <div
        className="absolute"
        style={{
          top: "40%",
          left: "0",
          right: "0",
          height: "14%",
          background:
            "linear-gradient(90deg, transparent 0%, #fafafa 8%, #fafafa 92%, transparent 100%)",
        }}
      />

      <div
        className="absolute left-1/2 text-center pointer-events-none"
        style={{
          top: "41%",
          width: "85%",
          transform: "translateX(-50%)",
        }}
      >
        <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-2 text-stone-700">
          Confirmamos
        </p>
        <h2
          className="font-display text-5xl leading-[0.95] tracking-tight"
          style={{ color: "#0a0a0a" }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="font-display italic text-base mt-1 text-stone-600">
            {data.subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 text-center pointer-events-none">
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: "#0a0a0a" }}>
          {data.time && `${data.time} · `}
          {data.dressCode}
        </p>
      </div>

      <style>{`
        @keyframes marquee-scroll-0 {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-1 {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
