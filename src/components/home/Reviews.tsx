const REVIEWS = [
  {
    name: "Penelope G.",
    text: "My new spectral roommate makes the best midnight tea! 10/10 would be haunted again.",
  },
  {
    name: "Darius K.",
    text: "Delivery was so fast the lights flickered before the doorbell rang.",
  },
  {
    name: "Mina L.",
    text: "She whispers encouragement during exams. Slightly eerie, very supportive.",
  },
  {
    name: "Oscar V.",
    text: "Eternal satisfaction is real. He still laughs at my jokes. Usually at 3am.",
  },
];

export default function Reviews() {
  return (
    <section className="container mt-20">
      <h2 className="font-display text-3xl font-semibold text-center">Happy Soul Buyers</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((r) => (
          <article key={r.name} className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">“{r.text}”</p>
            <p className="mt-4 text-sm font-semibold">— {r.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
