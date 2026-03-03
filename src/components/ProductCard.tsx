import { useState, useCallback } from 'react';
import { Product } from '@/data/types';
import { useCart } from '@/contexts/CartContext';
import { Check, Minus, X, Award, ShoppingCart, ChevronLeft, ChevronRight, Star, Store } from 'lucide-react';
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

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const prev = useCallback(() => setCurrent(i => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setCurrent(i => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  if (images.length === 0) {
    return (
      <div className="h-28 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground text-xs">Sin imagen</span>
      </div>
    );
  }

  return (
    <div className="relative h-28 rounded-lg overflow-hidden bg-muted group shrink-0">
      <img
        src={images[current]}
        alt={`Producto ${current + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-3 h-3 text-foreground" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-3 h-3 text-foreground" />
          </button>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === current ? 'bg-primary' : 'bg-card/60'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProductCard({ product, rank, supplementName, supplementSlug }: ProductCardProps) {
  const { addItem } = useCart();
  const match = doseMatchConfig[product.effectiveDoseMatch];
  const MatchIcon = match.icon;

  const hasVariants = product.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(hasVariants ? product.variants[0] : null);

  const currentPrice = selectedVariant?.price ?? product.price;
  const currentPricePerDose = selectedVariant?.pricePerEffectiveDose ?? product.pricePerEffectiveDose;
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
    <div className="rounded-xl border border-border bg-card hover:shadow-md transition-all overflow-hidden">
      <div className="flex gap-3 p-3">
        {/* Compact image */}
        <div className="w-28 shrink-0 relative">
          <ImageCarousel images={product.images} />
          {rank <= 3 && (
            <span className="absolute top-1 left-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold shadow">
              #{rank}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-semibold text-foreground text-sm leading-tight">{product.brand}</h4>
              <div className="flex items-center gap-1 mt-0.5">
                <Store className="w-3 h-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground">{product.seller.name}</span>
                <Star className="w-3 h-3 text-marketplace-aligned fill-current" />
                <span className="text-[11px] text-muted-foreground">{product.seller.rating}</span>
              </div>
            </div>
            <div className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${match.bg} ${match.color} shrink-0`}>
              <MatchIcon className="w-2.5 h-2.5" />
              {match.label}
            </div>
          </div>

          {/* Price row */}
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-mono text-lg font-bold text-foreground">${currentPrice.toFixed(2)}</span>
            <span className="text-[11px] text-muted-foreground">${currentPricePerDose.toFixed(2)}/dosis</span>
          </div>

          {/* Certs inline */}
          {product.certifications.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {product.certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-muted text-muted-foreground">
                  <Award className="w-2.5 h-2.5" />
                  {cert}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Variants + Add to cart */}
      <div className="px-3 pb-3 pt-0 flex items-end justify-between gap-2">
        {hasVariants && product.variants.length > 1 ? (
          <div className="flex flex-wrap gap-1">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                disabled={!variant.inStock}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-all ${
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
        ) : (
          <span className="text-[11px] text-muted-foreground">{currentLabel}</span>
        )}
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={selectedVariant ? !selectedVariant.inStock : false}
          className="gap-1 text-xs shrink-0"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Agregar
        </Button>
      </div>
    </div>
  );
}
