import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Reviews from "@/components/home/Reviews";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="bg-gradient-to-b from-background via-secondary/20 to-background min-h-screen">
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

      <section id="about" className="container mt-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-secondary/30 bg-gradient-to-b from-background to-secondary/10 p-10 shadow-lg backdrop-blur-md relative overflow-hidden"
        >
          {/* Glow Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>

          <h2 className="font-display text-4xl font-bold text-foreground drop-shadow-md">
            Our Origin Story
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
            SoulCart began when a particularly friendly specter insisted on helping us fold laundry. 
            Since then, we’ve dedicated ourselves to matching exceptional spirits with equally exceptional people. 
            Every soul is curated with care, documented with whimsy, and delivered with a gentle whoosh.
          </p>
          <div className="mt-8">
            <Link to="/souls">
              <Button
                variant="hero"
                className="text-lg px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Browse Souls 👻
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Reviews />
    </main>
  );
};

export default Index;
