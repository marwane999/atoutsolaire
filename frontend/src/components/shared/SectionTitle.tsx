import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4",
            light
              ? "bg-primary/20 text-primary-light"
              : "bg-primary/10 text-primary"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-display-md md:text-display-lg font-bold",
          light ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
