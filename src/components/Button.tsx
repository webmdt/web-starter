import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:ring-zinc-900",
        variant === "secondary" &&
          "border border-zinc-500 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-400",
        className,
      )}
      {...props}
    />
  );
}
