import { SEO } from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  return (
    <main className="container pt-24 text-center">
      <SEO title="Order Placed Successfully — SoulCart" description="Your soul will arrive in the next full moon cycle." canonical="/success" />
      <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
      <h1 className="mt-4 font-display text-4xl font-bold">Payment Completed — Order Placed Successfully!</h1>
      <p className="mt-2 text-muted-foreground">Your soul will arrive in the next full moon cycle.</p>
      <Link to="/souls" className="mt-6 inline-block">
        <Button variant="hero">Continue Shopping</Button>
      </Link>
    </main>
  );
}
