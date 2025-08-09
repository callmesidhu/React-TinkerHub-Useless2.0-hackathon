import { BookOpen, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Authentic Backstories",
    desc: "Each spirit comes with a lovingly embellished tale from their former life.",
  },
  {
    icon: Truck,
    title: "Fast Spirit Delivery",
    desc: "1–3 business hauntings. Please leave a creaky door unlocked.",
  },
  {
    icon: ShieldCheck,
    title: "Eternal Satisfaction",
    desc: "Because they’ll be with you forever. Returns accepted during eclipses only.",
  },
];

export default function Features() {
  return (
    <section className="container mt-20">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-6 shadow-sm hover-scale">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
