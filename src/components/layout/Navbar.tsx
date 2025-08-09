import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Logo from "@/components/Logo";
import { useStore } from "@/state/store";
import { Button } from "@/components/ui/button";

const navCls = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"} transition-colors`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navCls}>Home</NavLink>
          <NavLink to="/souls" className={navCls}>Souls</NavLink>
          <NavLink to="/wishlist" className={navCls}>Wishlist</NavLink>
          <NavLink to="/cart" className={navCls}>Cart</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="outline" size="sm" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 grid gap-2">
            <NavLink to="/" end className={navCls} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/souls" className={navCls} onClick={() => setOpen(false)}>Souls</NavLink>
            <NavLink to="/wishlist" className={navCls} onClick={() => setOpen(false)}>Wishlist</NavLink>
            <NavLink to="/cart" className={navCls} onClick={() => setOpen(false)}>Cart</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
