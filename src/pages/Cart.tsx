import { useStore } from "@/state/store";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, souls, setQty, removeFromCart, cartTotal } = useStore();
  const navigate = useNavigate();
  const rows = cart.map((c) => ({ item: c, soul: souls.find((s) => s.id === c.id)! })).filter((r) => !!r.soul);

  return (
    <main className="container pt-24">
      <SEO title="Your Cart — SoulCart" description="Review your spectral selections and proceed to checkout." canonical="/cart" />
      <h1 className="font-display text-4xl font-bold">Your Cart</h1>

      {rows.length === 0 ? (
        <div className="mt-8 rounded-xl border p-8 text-center">
          <p className="text-muted-foreground">Your cart is currently empty. Spirits are waiting!</p>
          <Link to="/souls" className="mt-4 inline-block">
            <Button variant="hero">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-xl border divide-y">
            {rows.map(({ item, soul }) => (
              <div key={item.id} className="grid grid-cols-[96px_1fr_auto] items-center gap-4 p-4">
                <img src={soul.image} alt={soul.name} className="h-20 w-24 rounded-md object-cover" />
                <div>
                  <h3 className="font-semibold leading-tight">{soul.name}</h3>
                  <p className="text-xs text-muted-foreground">{soul.origin}</p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs">
                    <button onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease quantity"><Minus className="h-3 w-3" /></button>
                    <span className="min-w-[24px] text-center">{item.qty}</span>
                    <button onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase quantity"><Plus className="h-3 w-3" /></button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹{(soul.price * item.qty).toFixed(2)}</div>
                  <button onClick={() => removeFromCart(item.id)} className="mt-2 inline-flex items-center gap-1 text-sm text-destructive">
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-xl border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
            </div>
            <Button className="mt-4 w-full" variant="glow" onClick={() => navigate('/checkout')}>Checkout</Button>
            <Link to="/souls" className="mt-2 inline-flex w-full justify-center">
              <Button variant="outline" className="w-full">Continue Shopping</Button>
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
