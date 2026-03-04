import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ariaLabel,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-amber-500 text-white hover:bg-amber-600",
    outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
    white: "bg-white text-blue-700 hover:bg-slate-100 shadow-2xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
};
