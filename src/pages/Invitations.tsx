import type { ComponentType } from "react";
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
  RoseGardenCard,
  LocketHeartCard,
  InkedCalligraphyCard,
  LaceDoilyCard,
  CastleFairytaleCard,
  AuroraBorealisCard,
  FloatingLanternsCard,
  ConstellationLoversCard,
  PhoenixFlameCard,
  BauhausGeometricCard,
  GlassMorphismCard,
  NeonRetroCard,
  BrutalistCard,
  OrigamiCraneCard,
  WaxRibbonTrioCard,
  CrystalSphereCard,
  KineticMarqueeCard,
  MountainVistaCard,
  ForestGladeCard,
  TuscanyVineyardCard,
  WinterSnowfallCard,
  DesertDunesCard,
  HotAirBalloonCard,
  PearlCameoCard,
  DriftwoodBeachCard,
  CoralReefCard,
  TropicalSunriseCard,
  BeachBonfireCard,
  CherryBlossomCard,
  LavenderFieldCard,
  sampleInvitation,
  type InvitationData,
} from "@/components/invitations";

type CardComponent = ComponentType<{ data: InvitationData }>;

interface Template {
  id: string;
  name: string;
  description: string;
  Component: CardComponent;
}

interface Category {
  id: string;
  name: string;
  tagline: string;
  templates: Template[];
}

const categories: Category[] = [
  {
    id: "clasicas",
    name: "Clásicas y Románticas",
    tagline: "Tradición, encaje y promesas selladas con cera.",
    templates: [
      {
        id: "royal",
        name: "Sello Real",
        description: "Sobre marfil con sello de cera burgundy. La solapa pentagonal tilea exacta con el cuerpo en V y se abre en 3D.",
        Component: RoyalWaxSealCard,
      },
      {
        id: "vintage",
        name: "Postal Vintage",
        description: "Postal sepia con sello SVG y giro 3D entre frente ilustrado y reverso con mensaje.",
        Component: VintagePostcardCard,
      },
      {
        id: "watercolor",
        name: "Acuarela",
        description: "Manchas de acuarela con SVG filters (turbulence + displacement) que respiran al hover.",
        Component: WatercolorCard,
      },
      {
        id: "lace",
        name: "Encaje Doily",
        description: "Patrón floral de encaje SVG con vignette radial y broches en las esquinas.",
        Component: LaceDoilyCard,
      },
      {
        id: "rose-garden",
        name: "Jardín de Rosas",
        description: "Rosas SVG en cinco pétalos con enredaderas en las esquinas; rotan al hover.",
        Component: RoseGardenCard,
      },
      {
        id: "locket",
        name: "Relicario",
        description: "Relicario dorado en forma de corazón que se abre con rotación 3D revelando el interior.",
        Component: LocketHeartCard,
      },
      {
        id: "wax-ribbon",
        name: "Sello y Cinta",
        description: "Tres sellos de cera de colores atados por cintas serpenteantes sobre papel granulado.",
        Component: WaxRibbonTrioCard,
      },
      {
        id: "calligraphy",
        name: "Caligrafía a Tinta",
        description: "Trazos manuscritos dibujándose con stroke-dasharray sobre papel envejecido.",
        Component: InkedCalligraphyCard,
      },
      {
        id: "cameo",
        name: "Camafeo de Perla",
        description: "Camafeo victoriano con marco dorado, perlas perimetrales y silueta en relieve.",
        Component: PearlCameoCard,
      },
      {
        id: "garden",
        name: "Jardín Encantado",
        description: "Pastel botánico con flores que rotan al hover y parallax suave siguiendo al cursor.",
        Component: EnchantedGardenCard,
      },
    ],
  },
  {
    id: "magicas",
    name: "Mágicas y Fantasía",
    tagline: "Cuentos, constelaciones y luces que respiran.",
    templates: [
      {
        id: "starry",
        name: "Noche Estrellada",
        description: "70 estrellas titilando con un PRNG determinista y luna palpitando con glow.",
        Component: StarryNightCard,
      },
      {
        id: "constellation",
        name: "Nuestra Constelación",
        description: "Una constelación inventada que se dibuja secuencialmente y luego titila.",
        Component: ConstellationLoversCard,
      },
      {
        id: "aurora",
        name: "Aurora Boreal",
        description: "Tres velos de luz (verde, púrpura, cyan) con mix-blend-screen y filter blur ondulando.",
        Component: AuroraBorealisCard,
      },
      {
        id: "lanterns",
        name: "Faroles Flotantes",
        description: "Faroles de papel ascendiendo continuamente con drift horizontal y agua reflejando luz.",
        Component: FloatingLanternsCard,
      },
      {
        id: "castle",
        name: "Castillo de Cuento",
        description: "Silueta de castillo con torres, banderas y ventanas iluminadas; chispas mágicas en el cielo.",
        Component: CastleFairytaleCard,
      },
      {
        id: "crystal",
        name: "Esfera de Cristal",
        description: "Bola de cristal mística cuya luz sigue al cursor (radial-gradient dinámico).",
        Component: CrystalSphereCard,
      },
      {
        id: "phoenix",
        name: "Llama Fénix",
        description: "Tres capas de llamas ascendentes con keyframes que estiran y comprimen, más brasas elevándose.",
        Component: PhoenixFlameCard,
      },
      {
        id: "holographic",
        name: "Holograma Moderno",
        description: "Tilt 3D que sigue al cursor con conic-gradient iridiscente reactivo.",
        Component: HolographicModernCard,
      },
    ],
  },
  {
    id: "modernas",
    name: "Modernas y Geométricas",
    tagline: "Diseño actual, tipografía como protagonista.",
    templates: [
      {
        id: "artdeco",
        name: "Art Deco",
        description: "Marco esmeralda + oro con abanicos simétricos arriba y abajo, shimmer al hover.",
        Component: ArtDecoCard,
      },
      {
        id: "bauhaus",
        name: "Bauhaus",
        description: "Composición de círculos, triángulos y rectángulos en azul, rojo, amarillo y negro.",
        Component: BauhausGeometricCard,
      },
      {
        id: "glass",
        name: "Glassmorphism",
        description: "Tarjeta de vidrio esmerilado con backdrop-blur, blobs de color reaccionan al cursor.",
        Component: GlassMorphismCard,
      },
      {
        id: "neon",
        name: "Neón Retro 80s",
        description: "Synthwave: sol gradient, grid, scanlines y tipografía con neon glow y flicker.",
        Component: NeonRetroCard,
      },
      {
        id: "brutalist",
        name: "Brutalista",
        description: "Hormigón granulado, grid duro, tipografía monoespaciada y bloques de color crudos.",
        Component: BrutalistCard,
      },
      {
        id: "origami",
        name: "Grulla de Origami",
        description: "Grulla de papel poligonal con sombras y luces; pétalos rotando alrededor.",
        Component: OrigamiCraneCard,
      },
      {
        id: "kinetic",
        name: "Marquee Cinético",
        description: "Bandas de tipografía corriendo en direcciones opuestas, inclinadas y contrastadas.",
        Component: KineticMarqueeCard,
      },
    ],
  },
  {
    id: "naturaleza",
    name: "Naturaleza",
    tagline: "Paisajes y elementos al aire libre.",
    templates: [
      {
        id: "boho",
        name: "Boho Terracota",
        description: "Tierra y eucalipto con pampas grass; las ramas se mecen con keyframes propios.",
        Component: BohoTerracotaCard,
      },
      {
        id: "mountain",
        name: "Cumbre de Montaña",
        description: "Capas de montañas con nieve en las cimas, sol cálido y nubes que cruzan el cielo.",
        Component: MountainVistaCard,
      },
      {
        id: "forest",
        name: "Claro del Bosque",
        description: "Bosque de pinos con rayos de luz cayendo y luciérnagas flotando entre los árboles.",
        Component: ForestGladeCard,
      },
      {
        id: "vineyard",
        name: "Viñedo Toscano",
        description: "Hileras de viñas, racimo de uvas SVG, hoja de parra y sol cálido sobre la colina.",
        Component: TuscanyVineyardCard,
      },
      {
        id: "winter",
        name: "Nieve Invernal",
        description: "50 copos de nieve SVG cayendo con drift, montañas nevadas y textura helada.",
        Component: WinterSnowfallCard,
      },
      {
        id: "desert",
        name: "Dunas del Desierto",
        description: "Sol con halo, dunas en capas, cactus y vientos arenosos atravesando la composición.",
        Component: DesertDunesCard,
      },
      {
        id: "balloon",
        name: "Globo Aerostático",
        description: "Globo a rayas flotando sobre cerros con segundo globo en parallax y nubes pasando.",
        Component: HotAirBalloonCard,
      },
      {
        id: "cherry",
        name: "Flor de Cerezo",
        description: "Hanami: pétalos de sakura cayendo con rotación independiente y ramas con flores SVG.",
        Component: CherryBlossomCard,
      },
      {
        id: "lavender",
        name: "Campo de Lavanda",
        description: "Cuatro filas de lavandas en perspectiva meciéndose, con abejas zigzagueando.",
        Component: LavenderFieldCard,
      },
    ],
  },
  {
    id: "playa",
    name: "Boda en la Playa",
    tagline: "El océano como protagonista.",
    templates: [
      {
        id: "beach",
        name: "Playa Clásica",
        description: "Sol pulsando, palmeras que se mecen, olas animadas y conchas decorando.",
        Component: BeachWeddingCard,
      },
      {
        id: "sunset",
        name: "Atardecer en el Horizonte",
        description: "Sol enorme medio-hundido con reflejo titilante, palmeras en silueta y aves cruzando.",
        Component: SunsetHorizonCard,
      },
      {
        id: "sunrise",
        name: "Amanecer Tropical",
        description: "Sol naciendo entre dos palmeras en silueta, mar en gradiente azul y nubes pasando.",
        Component: TropicalSunriseCard,
      },
      {
        id: "underwater",
        name: "Perla Submarina",
        description: "Vista desde el fondo del océano: rayos de luz, burbujas y una perla en su ostra.",
        Component: UnderwaterPearlCard,
      },
      {
        id: "coral",
        name: "Arrecife de Coral",
        description: "Coral rosa y oro meciéndose, peces nadando, burbujas y rayos atravesando el agua.",
        Component: CoralReefCard,
      },
      {
        id: "tropical",
        name: "Hibisco Tropical",
        description: "Hibiscos rotando lento sobre fondo coral, hojas de monstera con fenestraciones.",
        Component: TropicalHibiscusCard,
      },
      {
        id: "bottle",
        name: "Mensaje en una Botella",
        description: "Botella translúcida sobre mapa antiguo; al tocar el corcho salta y el pergamino se despliega.",
        Component: MessageInBottleCard,
      },
      {
        id: "polaroid",
        name: "Polaroid Scrapbook",
        description: "Stack de polaroids con cinta washi; al tocar se abren en abanico.",
        Component: PolaroidScrapbookCard,
      },
      {
        id: "driftwood",
        name: "Madera a la Deriva",
        description: "Madera flotante, sea glass, estrella de mar y arena granulada con sol cálido.",
        Component: DriftwoodBeachCard,
      },
      {
        id: "bonfire",
        name: "Hoguera en la Arena",
        description: "Fogata con llamas multinivel, chispas elevándose con drift y cielo nocturno con estrellas.",
        Component: BeachBonfireCard,
      },
      {
        id: "coastal-minimal",
        name: "Costa Minimalista",
        description: "Editorial: papel granulado, línea-onda dibujada con dasharray y palma contorneada.",
        Component: CoastalMinimalCard,
      },
    ],
  },
];

const totalTemplates = categories.reduce((acc, c) => acc + c.templates.length, 0);

export default function Invitations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 space-y-4">
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
            {totalTemplates} estilos distintos con animaciones encantadoras,
            agrupados en {categories.length} categorías. Pasa el cursor o
            tócalas para descubrir el efecto de cada una.
          </p>
          <nav className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border border-foreground/15 hover:bg-foreground hover:text-background transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </header>

        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-24 scroll-mt-8">
            <header className="text-center mb-12 space-y-2">
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                {cat.templates.length} plantilla{cat.templates.length === 1 ? "" : "s"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl">{cat.name}</h2>
              <p className="font-display italic text-muted-foreground">{cat.tagline}</p>
            </header>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14">
              {cat.templates.map(({ id, name, description, Component }) => (
                <div key={id} className="space-y-3">
                  <Component data={sampleInvitation} />
                  <div className="space-y-1 px-1">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                      {cat.id} / {id}
                    </p>
                    <h3 className="font-display text-xl">{name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <footer className="mt-16 text-center text-xs font-mono tracking-widest uppercase text-muted-foreground">
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
