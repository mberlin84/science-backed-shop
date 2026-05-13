import { Link } from "react-router-dom";
import {
  RoyalWaxSealCard,
  EnchantedGardenCard,
  StarryNightCard,
  VintagePostcardCard,
  HolographicModernCard,
  WatercolorCard,
  ArtDecoCard,
  BohoTerracotaCard,
  PolaroidScrapbookCard,
  BeachWeddingCard,
  SunsetHorizonCard,
  UnderwaterPearlCard,
  TropicalHibiscusCard,
  MessageInBottleCard,
  CoastalMinimalCard,
  sampleInvitation,
} from "@/components/invitations";

const templates = [
  {
    id: "royal",
    name: "Sello Real",
    description:
      "Sobre clásico color marfil con sello de cera burgundy y monograma. Toca el sobre para abrir la solapa en 3D y revelar la invitación.",
    Component: RoyalWaxSealCard,
  },
  {
    id: "garden",
    name: "Jardín Encantado",
    description:
      "Pastel botánico con flores que rotan al pasar el cursor, una mariposa flotante y parallax suave que sigue al ratón.",
    Component: EnchantedGardenCard,
  },
  {
    id: "starry",
    name: "Noche Estrellada",
    description:
      "Cielo nocturno con setenta estrellas titilando, una luna que palpita y tipografía dorada con resplandor.",
    Component: StarryNightCard,
  },
  {
    id: "vintage",
    name: "Postal Vintage",
    description:
      "Postal antigua con sello de correos y giro 3D al tocar para descubrir el mensaje al reverso.",
    Component: VintagePostcardCard,
  },
  {
    id: "holographic",
    name: "Holograma Moderno",
    description:
      "Tarjeta minimalista con gradiente iridiscente y tilt 3D que sigue al cursor para un efecto holográfico vivo.",
    Component: HolographicModernCard,
  },
  {
    id: "watercolor",
    name: "Acuarela",
    description:
      "Manchas de acuarela suaves sobre papel con textura de grano. Al pasar el cursor, los pigmentos respiran y se expanden delicadamente.",
    Component: WatercolorCard,
  },
  {
    id: "artdeco",
    name: "Art Deco",
    description:
      "Geometría dorada simétrica sobre verde esmeralda al estilo años 20: abanicos, marcos finos y un destello que recorre la tarjeta al hover.",
    Component: ArtDecoCard,
  },
  {
    id: "boho",
    name: "Boho Terracota",
    description:
      "Paleta tierra con ramas de eucalipto y pampas grass que se mecen con keyframes suaves. Calidez de desierto.",
    Component: BohoTerracotaCard,
  },
  {
    id: "polaroid",
    name: "Polaroid Scrapbook",
    description:
      "Stack de tres polaroids con cinta washi. Al tocar se abren en abanico revelando recuerdos y detalles del evento.",
    Component: PolaroidScrapbookCard,
  },
  {
    id: "beach",
    name: "Boda en la Playa",
    description:
      "Atardecer costero con hojas de palmera que se mecen, sol palpitando, olas en movimiento, una estrella y una concha de mar. Hecha para celebraciones frente al océano.",
    Component: BeachWeddingCard,
  },
  {
    id: "sunset",
    name: "Atardecer en el Horizonte",
    description:
      "Cielo púrpura-coral con un sol enorme hundiéndose en el mar y su reflejo titilante sobre el agua. Palmeras en silueta y aves cruzando el horizonte.",
    Component: SunsetHorizonCard,
  },
  {
    id: "underwater",
    name: "Perla Submarina",
    description:
      "Vista desde el fondo del océano: rayos de luz atravesando el agua, burbujas ascendiendo sin pausa, algas meciéndose y una perla que palpita dentro de su concha.",
    Component: UnderwaterPearlCard,
  },
  {
    id: "tropical",
    name: "Hibisco Tropical",
    description:
      "Explosión floral con hibiscos enormes, hojas de monstera y palette coral-fucsia-amarillo. Las flores rotan despacio sobre fondo cálido de papel tropical.",
    Component: TropicalHibiscusCard,
  },
  {
    id: "bottle",
    name: "Mensaje en una Botella",
    description:
      "Botella de cristal flotando sobre un mapa antiguo, con rosa de los vientos y ancla. Al tocar, el corcho salta y el pergamino se despliega revelando los detalles.",
    Component: MessageInBottleCard,
  },
  {
    id: "coastal-minimal",
    name: "Costa Minimalista",
    description:
      "Editorial y respirable: papel granulado, una sola línea que se vuelve onda animada con stroke-dasharray, palma trazada y una concha contorneada. Aire de revista costera.",
    Component: CoastalMinimalCard,
  },
];

export default function Invitations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20 space-y-4">
          <Link
            to="/"
            className="inline-block font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver al inicio
          </Link>
          <h1 className="font-display text-5xl md:text-6xl">
            Plantillas de Invitación
          </h1>
          <p className="font-display italic text-lg text-muted-foreground max-w-2xl mx-auto">
            Quince estilos distintos con animaciones encantadoras. Pasa el
            cursor o tócalas para descubrir el efecto de cada una.
          </p>
        </header>

        <div className="space-y-28">
          {templates.map(({ id, name, description, Component }, idx) => (
            <section
              key={id}
              className={`grid md:grid-cols-5 gap-12 items-center ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-2 space-y-4">
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  Plantilla 0{idx + 1} / {id}
                </p>
                <h2 className="font-display text-3xl">{name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="md:col-span-3">
                <Component data={sampleInvitation} />
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-32 text-center text-xs font-mono tracking-widest uppercase text-muted-foreground">
          <p>
            Las plantillas reciben un objeto{" "}
            <code className="font-mono-data normal-case">InvitationData</code>{" "}
            con título, fecha, lugar y campos opcionales.
          </p>
        </footer>
      </div>
    </div>
  );
}
