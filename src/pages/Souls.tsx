import { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { useStore } from "@/state/store";
import Filters, { type Filters as FilterType } from "@/components/products/Filters";
import SoulCard from "@/components/products/SoulCard";

export default function SoulsPage() {
  const { souls } = useStore();
  const [filters, setFilters] = useState<FilterType>({ sort: "newest" });

  const eraSet = Array.from(new Set(souls.map((s) => s.era))).filter(Boolean);
  const locSet = Array.from(new Set(souls.map((s) => s.location))).filter(Boolean);
  const persSet = Array.from(new Set(souls.map((s) => s.personality))).filter(Boolean);

  const list = useMemo(() => {
    let out = souls.slice();
    if (filters.era) out = out.filter((s) => s.era === filters.era);
    if (filters.location) out = out.filter((s) => s.location === filters.location);
    if (filters.personality) out = out.filter((s) => s.personality === filters.personality);

    if (filters.sort === "newest") {
      out.sort((a, b) => +new Date(b.dateOfDeath) - +new Date(a.dateOfDeath));
    } else if (filters.sort === "oldest") {
      out.sort((a, b) => +new Date(a.dateOfDeath) - +new Date(b.dateOfDeath));
    } else if (filters.sort === "haunted") {
      out.sort((a, b) => b.price - a.price);
    }
    return out;
  }, [souls, filters]);

  return (
    <main className="container pt-24">
      <SEO
        title="Souls for Sale — SoulCart"
        description="Browse hand-picked spirits by era, location, and personality."
        canonical="/souls"
      />
      <h1 className="font-display text-4xl font-bold">Souls</h1>
      <p className="mt-2 text-muted-foreground">Find your perfectly haunted companion.</p>

      <div className="mt-6">
        <Filters
          eras={eraSet}
          locations={locSet}
          personalities={persSet}
          value={filters}
          onChange={setFilters}
        />
      </div>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s) => (
          <SoulCard key={s.id} soul={s} />
        ))}
      </section>
    </main>
  );
}
