import { useParams, Link } from 'react-router-dom';
import { getSupplementBySlug } from '@/data/supplements';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { ScoreBar } from '@/components/ScoreBar';
import { EvidenceMatrix } from '@/components/EvidenceMatrix';
import { ConsistencyAnalysis } from '@/components/ConsistencyAnalysis';
import { StudyList } from '@/components/StudyList';
import { ProductCard } from '@/components/ProductCard';
import { ArrowLeft, Users, Beaker, AlertTriangle, ShoppingBag } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{supplement.category}</p>
            <h1 className="font-display text-2xl sm:text-3xl text-foreground">{supplement.name}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Executive Summary */}
        <section className={`rounded-2xl border-2 p-6 sm:p-8 ${
          isLowEvidence
            ? 'border-evidence-limited/30 bg-evidence-limited-bg/30'
            : 'border-evidence-solid/30 bg-card'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-2">Resumen Ejecutivo</h2>
              <EvidenceBadge level={supplement.evidenceLevel} size="lg" />
            </div>
          </div>

          <p className="text-foreground leading-relaxed mb-6">{supplement.summary}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <ScoreBar label="Score Metodológico" value={supplement.methodologyScore} />
            <ScoreBar label="Consistencia" value={supplement.consistencyScore} />
            <ScoreBar label="Seguridad" value={supplement.safetyScore} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <Beaker className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Dosis efectiva</p>
                <p className="font-medium text-foreground">{supplement.effectiveDose}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Población</p>
                <p className="font-medium text-foreground">{supplement.population}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Matrix */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-4">Matriz de Evidencia Consolidada</h2>
          <EvidenceMatrix objectives={supplement.objectives} />
        </section>

        {/* Consistency */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-4">Análisis de Consistencia</h2>
          <ConsistencyAnalysis data={supplement.consistency} />
        </section>

        {/* Transparency */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl text-foreground mb-4">
            Transparencia Total
            <span className="ml-2 text-sm font-sans font-normal text-muted-foreground">
              {supplement.studies.length} estudios
            </span>
          </h2>
          <StudyList studies={supplement.studies} />
        </section>

        {/* Marketplace */}
        <section className="rounded-xl border border-border bg-marketplace-bg p-6">
          {isLowEvidence && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-evidence-limited-bg mb-6">
              <AlertTriangle className="w-5 h-5 text-evidence-limited shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-evidence-limited text-sm">Evidencia {supplement.evidenceLevel.toLowerCase()}</p>
                <p className="text-sm text-muted-foreground">Los resultados científicos para este suplemento son {supplement.evidenceLevel === 'Inconsistente' ? 'contradictorios' : 'limitados'}. Considera consultar con un profesional antes de comprar.</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag className="w-5 h-5 text-muted-foreground" />
            <h2 className="font-display text-xl text-foreground">Productos Disponibles</h2>
            <span className="text-sm text-muted-foreground ml-1">basados en este suplemento</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} rank={i + 1} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
