import { Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import type { Soul } from "@/data/souls";
import { Button } from "@/components/ui/button";
import { useStore } from "@/state/store";

export default function SoulCard({ soul }: { soul: Soul }) {
  const { toggleWishlist, inWishlist, addToCart } = useStore();
  const wished = inWishlist(soul.id);

  return (
    <article className="group rounded-xl border bg-card p-3 shadow-sm transition-all hover:shadow-md">
      <Link to={`/soul/${soul.id}`} aria-label={`View ${soul.name}`}>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={soul.image}
            alt={`Portrait of ${soul.name}, a whimsical ghost`}
            className="aspect-[3/4] w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold leading-tight">{soul.name}</h3>
          <p className="text-xs text-muted-foreground">{soul.origin} · d. {new Date(soul.dateOfDeath).getFullYear()}</p>
        </div>
        <button
          onClick={() => toggleWishlist(soul.id)}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all ${wished ? "bg-accent/20" : "hover:bg-muted"}`}
          aria-label="Toggle wishlist"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-accent text-accent" : ""}`} />
        </button>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{soul.oneLiner}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold">₹{soul.price.toFixed(2)}</span>
        <div className="flex gap-2">
          <Link to={`/soul/${soul.id}`}>
            <Button variant="outline" size="sm" className="group/button">
              <Info className="mr-2 h-4 w-4" /> Details
            </Button>
          </Link>
          <Button size="sm" variant="glow" onClick={() => addToCart(soul.id)}>
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
