"use client";
import * as React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function cn(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
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

export default Textarea;        // ✅ Default-Export
export { Textarea };            // (Optional) Named-Export zusätzlich
