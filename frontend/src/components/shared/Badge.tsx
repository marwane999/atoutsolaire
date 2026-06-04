import { cn } from "@/lib/utils";

type BadgeVariant = "garantie" | "promo" | "nouveau" | "eco" | "stock";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  garantie: "bg-green-100 text-green-800 border-green-200",
  promo: "bg-red-100 text-red-800 border-red-200 animate-pulse",
  nouveau: "bg-blue-100 text-blue-800 border-blue-200",
  eco: "bg-emerald-100 text-emerald-800 border-emerald-200",
  stock: "bg-amber-100 text-amber-800 border-amber-200",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
