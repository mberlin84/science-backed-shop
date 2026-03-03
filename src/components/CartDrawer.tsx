import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingBag className="w-5 h-5" />
            Tu Carrito ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">Tu carrito está vacío</p>
              <p className="text-sm text-muted-foreground mt-1">Explora suplementos con respaldo científico</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="flex gap-3 p-3 rounded-lg border border-border bg-card">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground">{item.brand}</p>
                    <p className="text-xs text-muted-foreground">{item.variantLabel}</p>
                    <Link
                      to={`/suplemento/${item.supplementSlug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-primary hover:underline"
                    >
                      {item.supplementName}
                    </Link>
                    <p className="font-mono text-sm font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => removeItem(item.productId, item.variantId)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1.5 border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                        className="p-1 hover:bg-muted rounded-l-lg transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                        className="p-1 hover:bg-muted rounded-r-lg transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-muted-foreground">Total</span>
                <span className="font-mono text-xl font-bold text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Impuestos y envío calculados al finalizar</p>
              <Link to="/checkout" onClick={() => setIsOpen(false)}>
                <Button className="w-full" size="lg">
                  Finalizar compra
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
