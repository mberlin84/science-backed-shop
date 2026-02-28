import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supplements } from '@/data/supplements';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { Search, Beaker, Shield, TrendingUp, BarChart3 } from 'lucide-react';

type SortKey = 'methodology' | 'safety' | 'consistency' | 'benefit-risk';

const sortConfig: Record<SortKey, { label: string; icon: typeof Shield; fn: (a: typeof supplements[0], b: typeof supplements[0]) => number }> = {
  methodology: { label: 'Respaldo Científico', icon: Beaker, fn: (a, b) => b.methodologyScore - a.methodologyScore },
  safety: { label: 'Seguridad', icon: Shield, fn: (a, b) => b.safetyScore - a.safetyScore },
  consistency: { label: 'Consistencia', icon: TrendingUp, fn: (a, b) => b.consistencyScore - a.consistencyScore },
  'benefit-risk': { label: 'Beneficio/Riesgo', icon: BarChart3, fn: (a, b) => {
    const scoreA = (a.methodologyScore + a.safetyScore + a.consistencyScore) / 3;
    const scoreB = (b.methodologyScore + b.safetyScore + b.consistencyScore) / 3;
    return scoreB - scoreA;
  }},
};

export default function Index() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('methodology');

  const filtered = supplements
    .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase()))
    .sort(sortConfig[sortBy].fn);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Supplement<br />Evidence Engine
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Evidencia científica agregada y transparente. Decide qué suplementos valen la pena — basado en datos, no en marketing.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar suplemento o categoría..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-base"
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Sort tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.entries(sortConfig) as [SortKey, typeof sortConfig[SortKey]][]).map(([key, cfg]) => {
            const Icon = cfg.icon;
            const active = sortBy === key;
            return (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* Supplement list */}
        <div className="space-y-4">
          {filtered.map((supplement, index) => {
            const avgScore = Math.round((supplement.methodologyScore + supplement.consistencyScore + supplement.safetyScore) / 3);
            return (
              <Link
                key={supplement.id}
                to={`/suplemento/${supplement.slug}`}
                className="block rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground font-mono font-bold text-sm shrink-0">
                      #{index + 1}
                    </span>
                    <div>
                      <h2 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                        {supplement.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5">{supplement.category}</p>
                      <div className="mt-2">
                        <EvidenceBadge level={supplement.evidenceLevel} size="sm" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <p className="font-mono text-2xl font-bold text-foreground">{avgScore}</p>
                      <p className="text-xs text-muted-foreground">Score global</p>
                    </div>
                    <div className="hidden sm:grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="font-mono text-sm font-semibold">{supplement.methodologyScore}</p>
                        <p className="text-xs text-muted-foreground">Metodología</p>
                      </div>
                      <div>
                        <p className="font-mono text-sm font-semibold">{supplement.consistencyScore}</p>
                        <p className="text-xs text-muted-foreground">Consistencia</p>
                      </div>
                      <div>
                        <p className="font-mono text-sm font-semibold">{supplement.safetyScore}</p>
                        <p className="text-xs text-muted-foreground">Seguridad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No se encontraron suplementos para "{query}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
