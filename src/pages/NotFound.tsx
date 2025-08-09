import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="container pt-24">
      <SEO title="404 — SoulCart" description="Oops! Page not found." canonical="/404" />
      <div className="mx-auto max-w-lg text-center rounded-2xl border p-10 bg-card shadow-sm">
        <h1 className="font-display text-5xl font-extrabold tracking-tight">404</h1>
        <p className="mt-3 text-muted-foreground">Oops! This page drifted into the beyond.</p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="hero">Return Home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
