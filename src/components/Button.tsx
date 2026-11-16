import type { ReactNode } from "react";
import { Arrow } from "./Icons";
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`button button-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Arrow diagonal={external} />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
