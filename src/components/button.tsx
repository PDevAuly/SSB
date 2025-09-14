"use client";
import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  { className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2",
        "border border-white/15 bg-white/10 text-white",
        "hover:bg-white/20 transition-colors",
        className
      )}
      {...props}
    />
  );
});

export default Button;          // ✅ Default-Export
export { Button };              // (Optional) Named-Export zusätzlich
