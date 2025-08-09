import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Reviews from "@/components/home/Reviews";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main>
      <SEO
        title="SoulCart — Hand-Picked Spirits From the Beyond"
        description="Buy whimsical souls online. Premium, playful, and slightly spooky."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SoulCart',
          url: '/',
          potentialAction: {
            '@type': 'SearchAction',
            target: '/souls?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      <Hero />
      <Features />

      <section id="about" className="container mt-20">
        <div className="rounded-2xl border bg-gradient-to-b from-background to-secondary p-8 shadow-sm">
          <h2 className="font-display text-3xl font-semibold">Our Origin Story</h2>
          <p className="mt-4 text-muted-foreground">
            SoulCart began when a particularly friendly specter insisted on helping us fold laundry. Since then, we’ve
            dedicated ourselves to matching exceptional spirits with equally exceptional people. Every soul is curated
            with care, documented with whimsy, and delivered with a gentle whoosh.
          </p>
          <div className="mt-6">
            <Link to="/souls">
              <Button variant="hero">Browse Souls</Button>
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  );
};

export default Index;
