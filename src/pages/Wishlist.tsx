import { useStore } from "@/state/store";
import { SEO } from "@/components/SEO";
import SoulCard from "@/components/products/SoulCard";

export default function WishlistPage() {
  const { souls, wishlist } = useStore();
  const items = souls.filter((s) => wishlist.includes(s.id));
  return (
    <main className="container pt-24">
      <SEO title="Wishlist — SoulCart" description="Your saved spirits, waiting patiently." canonical="/wishlist" />
      <h1 className="font-display text-4xl font-bold">Wishlist</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-muted-foreground">No saved souls yet. Click the heart on a soul to add it here.</p>
      ) : (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <SoulCard key={s.id} soul={s} />
          ))}
        </section>
      )}
    </main>
  );
}
