export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-4 md:flex md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SoulCart. All rights reserved in the afterlife.</p>
        <nav className="flex gap-6 text-sm">
          <a href="#contact" className="story-link">Contact the Afterlife</a>
          <a href="#policy" className="story-link">Spirit Return Policy</a>
          <a href="#social" className="story-link">Ethereal Socials</a>
        </nav>
      </div>
    </footer>
  );
}
