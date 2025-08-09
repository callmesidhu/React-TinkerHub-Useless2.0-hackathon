import { useParams, useNavigate, Link } from "react-router-dom";
import { useStore } from "@/state/store";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import SoulCard from "@/components/products/SoulCard";

export default function SoulDetailPage() {
  const { id } = useParams();
  const { souls, addToCart } = useStore();
  const navigate = useNavigate();
  const soul = souls.find((s) => s.id === id);

  if (!soul) {
    return (
      <main className="container pt-24">
        <h1 className="text-2xl font-semibold">Soul not found</h1>
        <p className="mt-2 text-muted-foreground">This spirit has wandered off. Try another!</p>
        <Link to="/souls" className="story-link mt-6 inline-block">Back to Souls</Link>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: soul.name,
    description: soul.oneLiner,
    image: soul.image,
    brand: { '@type': 'Brand', name: 'SoulCart' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: soul.price.toFixed(2), availability: 'https://schema.org/InStock' },
  };

  // Get related souls (same era or location, excluding current soul)
  const relatedSouls = souls
    .filter((s) => s.id !== soul.id && (s.era === soul.era || s.location === soul.location))
    .slice(0, 4);

  return (
    <main className="container pt-24">
      <SEO title={`${soul.name} — SoulCart`} description={soul.oneLiner} canonical={`/soul/${soul.id}`} jsonLd={jsonLd} />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <img src={soul.image} alt={`Full portrait of ₹{soul.name}, whimsical ghost`} className="w-full rounded-xl border opacity-95" />
        </div>
        <div>
          <h1 className="font-display text-4xl font-bold">{soul.name}</h1>
          <p className="mt-2 text-muted-foreground">{soul.origin} · d. {new Date(soul.dateOfDeath).toLocaleDateString()}</p>
          <p className="mt-4 text-lg">{soul.oneLiner}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-muted-foreground">Age at Death:</span> {soul.ageAtDeath}</div>
            <div><span className="text-muted-foreground">Height:</span> {soul.height}</div>
            <div><span className="text-muted-foreground">Weight:</span> {soul.weight}</div>
            <div><span className="text-muted-foreground">Era:</span> {soul.era}</div>
            <div><span className="text-muted-foreground">Location:</span> {soul.location}</div>
            <div><span className="text-muted-foreground">Cause:</span> {soul.causeOfDeath}</div>
          </div>

          <div className="mt-4 text-sm">
            <span className="text-muted-foreground">Favorite Haunts:</span> {soul.favoriteHauntingLocations.join(', ')}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button variant="glow" onClick={() => addToCart(soul.id)}>Add to Cart – ₹{soul.price.toFixed(2)}</Button>
            <Button variant="hero" onClick={() => { addToCart(soul.id); navigate('/checkout'); }}>Buy Now</Button>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Related souls</h2>
        <p className="text-sm text-muted-foreground">Spirits you might also adore.</p>
        {relatedSouls.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedSouls.map((s) => (
              <SoulCard key={s.id} soul={s} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No related souls found at this time.</p>
        )}
      </section>
    </main>
  );
}
