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
      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Sin imagen</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
      <img
        src={images[current]}
        alt={`Producto imagen ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === current ? 'bg-primary w-3' : 'bg-card/60'}`}
              />
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
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

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
    <div className="rounded-xl border border-border bg-card hover:shadow-lg transition-all overflow-hidden flex flex-col">
      {/* Image carousel */}
      <div className="relative">
        <ImageCarousel images={product.images} />
        {rank <= 3 && (
          <span className="absolute top-2.5 left-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
            #{rank}
          </span>
        )}
        <div className={`absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${match.bg} ${match.color} shadow-sm`}>
          <MatchIcon className="w-3 h-3" />
          {match.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Brand & Seller */}
        <div className="mb-3">
          <h4 className="font-semibold text-foreground text-base leading-tight">{product.brand}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{currentLabel}</p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Store className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{product.seller.name}</span>
            <span className="flex items-center gap-0.5 text-xs text-marketplace-aligned">
              <Star className="w-3 h-3 fill-current" />
              {product.seller.rating}
            </span>
            <span className="text-xs text-muted-foreground">· {product.seller.totalSales.toLocaleString()} ventas</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-mono text-xl font-bold text-foreground">${currentPrice.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground font-medium">${currentPricePerDose.toFixed(2)}/dosis</span>
        </div>

        {/* Certifications */}
        {product.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.certifications.map((cert) => (
              <span key={cert} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                <Award className="w-3 h-3" />
                {cert}
              </span>
            ))}
          </div>
        )}

        {/* Variants */}
        {hasVariants && product.variants.length > 1 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Presentación:</p>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  disabled={!variant.inStock}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
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
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-14 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${product.rankingScore}%` }} />
            </div>
            <span className="font-mono text-xs font-semibold">{product.rankingScore}</span>
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
    </div>
  );
}
