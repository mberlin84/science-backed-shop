import { Product } from '@/data/types';
import { Check, Minus, X, Award } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  rank: number;
}

const doseMatchConfig = {
  'Sí': { icon: Check, color: 'text-marketplace-aligned', bg: 'bg-evidence-solid-bg', label: 'Dosis alineada' },
  'Parcial': { icon: Minus, color: 'text-marketplace-partial', bg: 'bg-evidence-moderate-bg', label: 'Dosis parcial' },
  'No': { icon: X, color: 'text-marketplace-misaligned', bg: 'bg-evidence-inconsistent-bg', label: 'Dosis insuficiente' },
};

export function ProductCard({ product, rank }: ProductCardProps) {
  const match = doseMatchConfig[product.effectiveDoseMatch];
  const MatchIcon = match.icon;

  return (
    <div className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            {rank <= 3 && (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {rank}
              </span>
            )}
            <h4 className="font-semibold text-foreground">{product.brand}</h4>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{product.concentration} · {product.form}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-bold text-foreground">${product.price}</p>
          <p className="text-xs text-muted-foreground">${product.pricePerEffectiveDose.toFixed(2)}/dosis</p>
        </div>
      </div>

      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${match.bg} ${match.color}`}>
        <MatchIcon className="w-3.5 h-3.5" />
        {match.label}
      </div>

      {product.certifications.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {product.certifications.map((cert) => (
            <span key={cert} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
              <Award className="w-3 h-3" />
              {cert}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Score de alineación</span>
          <div className="flex items-center gap-2">
            <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${product.rankingScore}%` }}
              />
            </div>
            <span className="font-mono text-xs font-semibold">{product.rankingScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
