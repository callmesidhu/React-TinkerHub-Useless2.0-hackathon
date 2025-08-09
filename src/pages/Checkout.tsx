import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import qr from "@/assets/fake-qr.png";
import { Loader2 } from "lucide-react";
import { useStore } from "@/state/store";

export default function CheckoutPage() {
  const [paying, setPaying] = useState(false);
  const [blurred, setBlurred] = useState(true); // QR starts blurred
  const navigate = useNavigate();
  const { clearCart } = useStore();

  useEffect(() => {
    let t;
    if (paying) {
      t = window.setTimeout(() => {
        clearCart();
        navigate("/success");
      }, 120000);
    }
    return () => t && clearTimeout(t);
  }, [paying, navigate, clearCart]);

  const handlePayNow = () => {
    setPaying(true);
    setBlurred(false); // Unblur QR immediately
  };

  return (
    <main className="container pt-24">
      <SEO
        title="Checkout — SoulCart"
        description="Scan to purchase your soul."
        canonical="/checkout"
      />
      <h1 className="font-display text-4xl font-bold">Checkout</h1>
      <p className="mt-2 text-muted-foreground">
        Scan to purchase your soul
      </p>

      <div className="mt-10 grid place-items-center">
        <img
          src={qr}
          alt="Playful fake payment QR code"
          className={`h-56 w-56 rounded-lg border bg-card p-3 transition-all duration-500 ${
            blurred ? "blur-lg" : "blur-0"
          }`}
        />
        {!paying ? (
          <Button
            variant="hero"
            className="mt-6"
            onClick={handlePayNow}
          >
            Pay Now
          </Button>
        ) : (
          <div className="mt-6 inline-flex items-center gap-2 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Contacting the Afterlife…
          </div>
        )}
      </div>
    </main>
  );
}
