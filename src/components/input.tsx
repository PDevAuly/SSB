"use client";
import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function cn(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2",
        "text-slate-100 placeholder:text-slate-400",
        "outline-none ring-0 focus:border-white/20 focus:bg-white/10",
        "transition-colors",
        className
      )}
      {...props}
    />
  );
});

export default Input;           // ✅ Default-Export
export { Input };               // (Optional) Named-Export zusätzlich
