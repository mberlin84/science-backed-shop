import { useState } from 'react';
import { Product } from '@/data/types';
import { useCart } from '@/contexts/CartContext';
import { Check, Minus, X, Award, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  rank: number;
  supplementName: string;
  supplementSlug: string;
}

const doseMatchConfig = {
  'Sí': { icon: Check, color: 'text-marketplace-aligned', bg: 'bg-evidence-solid-bg', label: 'Dosis comprobada' },
  'Parcial': { icon: Minus, color: 'text-marketplace-partial', bg: 'bg-evidence-moderate-bg', label: 'Dosis parcial' },
  'No': { icon: X, color: 'text-marketplace-misaligned', bg: 'bg-evidence-inconsistent-bg', label: 'Dosis insuficiente' },
};

export function ProductCard({ product, rank, supplementName, supplementSlug }: ProductCardProps) {
  const { addItem } = useCart();
  const match = doseMatchConfig[product.effectiveDoseMatch];
  const MatchIcon = match.icon;

  const hasVariants = product.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  const currentPrice = selectedVariant?.price ?? product.price;
  const currentLabel = selectedVariant
    ? `${selectedVariant.concentration} · ${selectedVariant.form}`
    : `${product.concentration} · ${product.form}`;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant?.id ?? 'default',
      brand: product.brand,
      variantLabel: currentLabel,
      price: currentPrice,
      currency: product.currency,
      supplementName,
      supplementSlug,
    });
  };

  return (
    <div className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all flex flex-col">
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
          <p className="text-sm text-muted-foreground mt-0.5">{currentLabel}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-bold text-foreground">${currentPrice.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">${product.pricePerEffectiveDose.toFixed(2)}/dosis</p>
        </div>
      </div>

      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${match.bg} ${match.color} self-start`}>
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

      {/* Variants selector */}
      {hasVariants && (
        <div className="mt-4 space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Presentación:</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                disabled={!variant.inStock}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  selectedVariant?.id === variant.id
                    ? 'border-primary bg-primary/10 text-primary'
                    : variant.inStock
                    ? 'border-border text-muted-foreground hover:border-primary/50'
                    : 'border-border text-muted-foreground/40 line-through cursor-not-allowed'
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Score + Add to cart */}
      <div className="mt-auto pt-4 border-t border-border mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${product.rankingScore}%` }} />
          </div>
          <span className="font-mono text-xs font-semibold">{product.rankingScore}/100</span>
        </div>
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={selectedVariant ? !selectedVariant.inStock : false}
          className="gap-1.5"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Agregar
        </Button>
      </div>
    </div>
  );
}
