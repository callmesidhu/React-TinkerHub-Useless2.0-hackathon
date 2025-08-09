import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useStore } from "@/state/store";

export default function FloatingCart() {
  const { cartCount } = useStore();
  if (cartCount === 0) return null;
  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg hover:brightness-110 hover:shadow-xl transition-all"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-4 w-4" />
      <span className="text-sm font-semibold">{cartCount}</span>
    </Link>
  );
}
