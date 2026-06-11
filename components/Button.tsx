import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium text-sm tracking-wide transition-all duration-200 rounded-md px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal";

const variants: Record<Variant, string> = {
  primary: "bg-brand-teal-deep text-white hover:bg-brand-teal",
  secondary: "border border-brand-teal-deep text-brand-teal-deep hover:bg-brand-mint",
  ghost: "text-brand-teal-deep hover:text-brand-teal underline-offset-4 hover:underline px-0",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
