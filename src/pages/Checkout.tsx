import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Truck, CreditCard, Check, Minus, Plus, Trash2, ChevronRight } from 'lucide-react';

type Step = 'address' | 'shipping' | 'payment';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  days: string;
}

const shippingOptions: ShippingOption[] = [
  { id: 'standard', name: 'Envío estándar', price: 4.99, days: '5-7 días' },
  { id: 'express', name: 'Envío express', price: 9.99, days: '2-3 días' },
  { id: 'overnight', name: 'Envío 24h', price: 19.99, days: '1 día hábil' },
];

const paymentMethods = [
  { id: 'card', label: 'Tarjeta de crédito/débito', icon: CreditCard },
  { id: 'paypal', label: 'PayPal', icon: CreditCard },
  { id: 'oxxo', label: 'OXXO / Efectivo', icon: CreditCard },
];

export default function Checkout() {
  const { items, totalPrice, updateQuantity, removeItem } = useCart();
  const [step, setStep] = useState<Step>('address');

  // Address form
  const [address, setAddress] = useState({
    name: '', email: '', phone: '',
    street: '', city: '', state: '', zip: '', country: 'MX',
  });

  // Shipping per seller
  const sellers = [...new Set(items.map(i => i.brand))]; // group loosely by brand for now
  const sellerGroups = sellers.map(seller => ({
    seller,
    items: items.filter(i => i.brand === seller),
  }));

  const [selectedShipping, setSelectedShipping] = useState<Record<string, string>>({});
  const [selectedPayment, setSelectedPayment] = useState('');

  const shippingTotal = Object.values(selectedShipping).reduce((sum, optId) => {
    const opt = shippingOptions.find(o => o.id === optId);
    return sum + (opt?.price ?? 0);
  }, 0);

  const grandTotal = totalPrice + shippingTotal;

  const steps: { key: Step; label: string; icon: typeof MapPin }[] = [
    { key: 'address', label: 'Dirección', icon: MapPin },
    { key: 'shipping', label: 'Envío', icon: Truck },
    { key: 'payment', label: 'Pago', icon: CreditCard },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === step);

  const canProceedAddress = address.name && address.email && address.street && address.city && address.zip;
  const canProceedShipping = sellerGroups.every(g => selectedShipping[g.seller]);
  const canProceedPayment = !!selectedPayment;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-3">Tu carrito está vacío</p>
          <Link to="/" className="text-primary hover:underline">Volver a explorar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-xl text-foreground">Finalizar compra</h1>
        </div>
      </header>

      {/* Step indicator */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2">
          {steps.map((s, i) => {
            const StepIcon = s.icon;
            const isActive = s.key === step;
            const isDone = i < currentStepIndex;
            return (
              <div key={s.key} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                <button
                  onClick={() => i <= currentStepIndex && setStep(s.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive ? 'bg-primary text-primary-foreground' :
                    isDone ? 'bg-evidence-solid-bg text-marketplace-aligned' :
                    'bg-muted text-muted-foreground'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" /> : <StepIcon className="w-3.5 h-3.5" />}
                  {s.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Address */}
            {step === 'address' && (
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-lg text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Datos de envío
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs">Nombre completo</Label>
                    <Input id="name" value={address.name} onChange={e => setAddress(p => ({ ...p, name: e.target.value }))} placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs">Email</Label>
                    <Input id="email" type="email" value={address.email} onChange={e => setAddress(p => ({ ...p, email: e.target.value }))} placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="phone" className="text-xs">Teléfono</Label>
                    <Input id="phone" value={address.phone} onChange={e => setAddress(p => ({ ...p, phone: e.target.value }))} placeholder="+52 55 1234 5678" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="street" className="text-xs">Dirección</Label>
                    <Input id="street" value={address.street} onChange={e => setAddress(p => ({ ...p, street: e.target.value }))} placeholder="Calle y número" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="city" className="text-xs">Ciudad</Label>
                    <Input id="city" value={address.city} onChange={e => setAddress(p => ({ ...p, city: e.target.value }))} placeholder="CDMX" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="state" className="text-xs">Estado</Label>
                    <Input id="state" value={address.state} onChange={e => setAddress(p => ({ ...p, state: e.target.value }))} placeholder="Estado" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="zip" className="text-xs">Código postal</Label>
                    <Input id="zip" value={address.zip} onChange={e => setAddress(p => ({ ...p, zip: e.target.value }))} placeholder="06600" />
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <Button onClick={() => setStep('shipping')} disabled={!canProceedAddress} className="gap-1.5">
                    Continuar a envío <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Shipping per seller */}
            {step === 'shipping' && (
              <div className="space-y-4">
                <h2 className="font-display text-lg text-foreground flex items-center gap-2">
                  <Truck className="w-5 h-5" /> Opciones de envío
                </h2>
                <p className="text-sm text-muted-foreground">Selecciona el envío para cada vendedor</p>
                {sellerGroups.map(group => (
                  <div key={group.seller} className="rounded-xl border border-border bg-card p-5 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-border">
                      <Truck className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold text-sm text-foreground">Envío de: {group.seller}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {group.items.map(i => i.variantLabel).join(', ')}
                    </div>
                    <div className="space-y-2">
                      {shippingOptions.map(opt => (
                        <label
                          key={opt.id}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedShipping[group.seller] === opt.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/30'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name={`shipping-${group.seller}`}
                              checked={selectedShipping[group.seller] === opt.id}
                              onChange={() => setSelectedShipping(p => ({ ...p, [group.seller]: opt.id }))}
                              className="accent-primary"
                            />
                            <div>
                              <p className="text-sm font-medium text-foreground">{opt.name}</p>
                              <p className="text-xs text-muted-foreground">{opt.days}</p>
                            </div>
                          </div>
                          <span className="font-mono text-sm font-semibold text-foreground">${opt.price.toFixed(2)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={() => setStep('address')}>Atrás</Button>
                  <Button onClick={() => setStep('payment')} disabled={!canProceedShipping} className="gap-1.5">
                    Continuar a pago <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 'payment' && (
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-lg text-foreground flex items-center gap-2">
                  <CreditCard className="w-5 h-5" /> Método de pago
                </h2>
                <div className="space-y-2">
                  {paymentMethods.map(pm => {
                    const PmIcon = pm.icon;
                    return (
                      <label
                        key={pm.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedPayment === pm.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedPayment === pm.id}
                          onChange={() => setSelectedPayment(pm.id)}
                          className="accent-primary"
                        />
                        <PmIcon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">{pm.label}</span>
                      </label>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep('shipping')}>Atrás</Button>
                  <Button disabled={!canProceedPayment} className="gap-1.5">
                    Confirmar pedido — ${grandTotal.toFixed(2)}
                  </Button>
                </div>
                <p className="text-xs text-center text-muted-foreground">Procesado con MedusaJS — próximamente</p>
              </div>
            )}
          </div>

          {/* Order summary sidebar — always visible */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-5 space-y-4 sticky top-6">
              <h3 className="font-display text-base text-foreground">Resumen del pedido</h3>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={`${item.productId}-${item.variantId}`} className="flex gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-xs truncate">{item.brand}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{item.variantLabel}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} className="p-0.5 hover:bg-muted rounded">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} className="p-0.5 hover:bg-muted rounded">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.productId, item.variantId)} className="p-0.5 hover:text-destructive ml-1">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-mono text-xs font-semibold shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-3 space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-mono font-semibold text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                {shippingTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-mono font-semibold text-foreground">${shippingTotal.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-mono text-lg font-bold text-foreground">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
