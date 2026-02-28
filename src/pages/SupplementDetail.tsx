import { useParams, Link } from 'react-router-dom';
import { getSupplementBySlug } from '@/data/supplements';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { ScoreBar } from '@/components/ScoreBar';
import { EvidenceMatrix } from '@/components/EvidenceMatrix';
import { ConsistencyAnalysis } from '@/components/ConsistencyAnalysis';
import { StudyList } from '@/components/StudyList';
import { ProductCard } from '@/components/ProductCard';
import { CartButton } from '@/components/CartButton';
import { ArrowLeft, Pill, Users, AlertTriangle, ShoppingBag } from 'lucide-react';

export default function SupplementDetail() {
  const { slug } = useParams<{ slug: string }>();
  const supplement = getSupplementBySlug(slug || '');

  if (!supplement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-2">Suplemento no encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const isLowEvidence = supplement.evidenceLevel === 'Limitada' || supplement.evidenceLevel === 'Inconsistente';
  const sortedProducts = [...supplement.products].sort((a, b) => b.rankingScore - a.rankingScore);
  const avgScore = Math.round((supplement.methodologyScore + supplement.consistencyScore + supplement.safetyScore) / 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{supplement.category}</p>
              <h1 className="font-display text-2xl sm:text-3xl text-foreground">{supplement.name}</h1>
            </div>
          </div>
          <CartButton />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Executive Summary — simplified */}
        <section className={`rounded-2xl border-2 p-6 sm:p-8 ${
          isLowEvidence
            ? 'border-evidence-limited/30 bg-evidence-limited-bg/30'
            : 'border-evidence-solid/30 bg-card'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-3xl font-bold text-foreground">{avgScore}</span>
                <span className="text-sm text-muted-foreground">/100 score global</span>
              </div>
              <EvidenceBadge level={supplement.evidenceLevel} size="lg" />
            </div>
          </div>

          <p className="text-foreground leading-relaxed mb-5">{supplement.summary}</p>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <ScoreBar label="Ciencia" value={supplement.methodologyScore} />
            <ScoreBar label="Consistencia" value={supplement.consistencyScore} />
            <ScoreBar label="Seguridad" value={supplement.safetyScore} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2.5">
              <Pill className="w-4 h-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Dosis recomendada</p>
                <p className="text-sm font-medium text-foreground">{supplement.effectiveDose}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">¿Para quién?</p>
                <p className="text-sm font-medium text-foreground">{supplement.population}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence — card-based */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-1">¿Para qué sirve?</h2>
          <p className="text-sm text-muted-foreground mb-4">Qué dice la ciencia sobre cada beneficio</p>
          <EvidenceMatrix objectives={supplement.objectives} />
        </section>

        {/* Consistency — simplified */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-1">¿Qué tan confiable es?</h2>
          <p className="text-sm text-muted-foreground mb-4">Resumen de resultados de todos los estudios</p>
          <ConsistencyAnalysis data={supplement.consistency} />
        </section>

        {/* Studies — collapsible */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-1">Estudios científicos</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {supplement.studies.length} estudios analizados — puedes verificar cada uno
          </p>
          <StudyList studies={supplement.studies} />
        </section>

        {/* Marketplace */}
        <section className="rounded-xl border border-border bg-marketplace-bg p-6">
          {isLowEvidence && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-evidence-limited-bg mb-5">
              <AlertTriangle className="w-5 h-5 text-evidence-limited shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-evidence-limited text-sm">Precaución</p>
                <p className="text-sm text-muted-foreground">
                  La evidencia para este suplemento es {supplement.evidenceLevel === 'Inconsistente' ? 'contradictoria' : 'limitada'}.
                  Considera consultar con un profesional antes de comprar.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mb-5">
            <ShoppingBag className="w-5 h-5 text-muted-foreground" />
            <h2 className="font-display text-xl text-foreground">Productos disponibles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                rank={i + 1}
                supplementName={supplement.name}
                supplementSlug={supplement.slug}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
