import ghost from "@/assets/ghost-silhouette.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl" />
      </div>

      {/* Floating ghosts */}
      <img src={ghost} alt="floating ghost" className="pointer-events-none absolute left-6 top-16 h-16 w-16 opacity-50 animate-fade-in" />
      <img src={ghost} alt="floating ghost" className="pointer-events-none absolute right-10 top-28 h-20 w-20 opacity-40 animate-fade-in" />
      <img src={ghost} alt="floating ghost" className="pointer-events-none absolute left-1/3 bottom-10 h-14 w-14 opacity-40 animate-fade-in" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">
            Buy a Soul Today
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            One-of-a-kind spirits, lovingly curated for you.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/souls">
              <Button size="lg" variant="hero" className="hover-scale">
                Shop Now
              </Button>
            </Link>
            <a href="#about" className="story-link text-sm">Learn our origin story</a>
          </div>
        </div>
      </div>
    </section>
  );
}
