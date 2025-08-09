import { Link } from "react-router-dom";
import logo from "@/assets/logo-ghostcart.png";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={logo}
        width={size}
        height={size}
        alt="SoulCart logo - ghost cart"
        className="rounded-sm"
      />
      <span className="font-display text-lg leading-none">SoulCart</span>
    </Link>
  );
}
