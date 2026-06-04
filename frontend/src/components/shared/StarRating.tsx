import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function StarRating({
  rating,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const stars = Math.round(rating);
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeMap[size],
            i < stars
              ? "fill-primary text-primary"
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
