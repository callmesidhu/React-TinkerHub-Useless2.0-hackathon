import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import qr from "@/assets/fake-qr.png";
import { Loader2, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { useStore } from "@/state/store";

export default function CheckoutPage() {
  const [paying, setPaying] = useState(false);
  const [blurred, setBlurred] = useState(true);
  const navigate = useNavigate();
  const { clearCart } = useStore();

  // Initial payment & tax calculation
  const initialPayment = 299;
  const taxRate = 0.18; // 18% GST
  const taxAmount = Math.round(initialPayment * taxRate);
  const totalAmount = initialPayment + taxAmount;

  useEffect(() => {
    let t;
    if (paying) {
      t = window.setTimeout(() => {
        clearCart();
        navigate("/success");
      }, 15000);
    }
    return () => t && clearTimeout(t);
  }, [paying, navigate, clearCart]);

  const handlePayNow = () => {
    setPaying(true);
    setBlurred(false);
  };

  return (
    <main className="container pt-24 pb-20">
      <SEO
        title="Checkout — SoulCart"
        description="Complete your initial payment to reserve your soul."
        canonical="/checkout"
      />

      {/* Page Header */}
      <section className="text-center">
        <h1 className="font-display text-4xl font-bold">
          Reserve Your Soul
        </h1>
        <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
          Begin your otherworldly journey with a small down payment. 
          Your chosen soul will be held exclusively for you in our astral vault.
        </p>
      </section>

      {/* QR Section */}
      <div className="mt-10 grid place-items-center">
        <img
          src={qr}
          alt="Playful fake payment QR code"
          className={`h-56 w-56 rounded-lg border bg-card p-3 shadow-lg transition-all duration-500 ${
            blurred ? "blur-lg" : "blur-0"
          }`}
        />
        {!paying ? (
          <Button
            variant="hero"
            className="mt-6 px-10 py-6 text-lg"
            onClick={handlePayNow}
          >
            Pay ₹{totalAmount} Now
          </Button>
        ) : (
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Contacting the Afterlife…
          </div>
        )}
      </div>

      {/* Order Summary */}
      <section className="mt-16 max-w-lg mx-auto bg-card p-6 rounded-xl shadow-md">
        <h2 className="font-semibold text-xl mb-4">Initial Payment Summary</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Initial Reservation Fee</span>
            <span>₹{initialPayment}</span>
          </li>
          <li className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{taxAmount}</span>
          </li>
          <li className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          *The remaining balance will be due upon final soul transfer ceremony.
        </p>
      </section>

      {/* Perks / Assurance */}
      <section className="mt-16 grid gap-8 sm:grid-cols-3 text-center">
        <div>
          <ShieldCheck className="mx-auto h-8 w-8 text-green-500" />
          <h3 className="mt-2 font-medium">Safe & Secure</h3>
          <p className="text-xs text-muted-foreground">
            Our astral gateways are protected by 256-bit spectral encryption.
          </p>
        </div>
        <div>
          <Clock className="mx-auto h-8 w-8 text-blue-500" />
          <h3 className="mt-2 font-medium">15s Delivery</h3>
          <p className="text-xs text-muted-foreground">
            Your soul reservation is instant, and binding for eternity.
          </p>
        </div>
        <div>
          <Sparkles className="mx-auto h-8 w-8 text-yellow-500" />
          <h3 className="mt-2 font-medium">Guaranteed Binding</h3>
          <p className="text-xs text-muted-foreground">
            Once reserved, no other mortal may claim your soul.
          </p>
        </div>
      </section>
    </main>
  );
}
