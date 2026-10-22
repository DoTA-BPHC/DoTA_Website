import type { ComponentPropsWithoutRef } from "react";

type TagProps = ComponentPropsWithoutRef<"button"> & {
  active?: boolean;
  count?: number;
};

export function Tag({
  active = false,
  count,
  children,
  className = "",
  ...buttonProps
}: TagProps) {
  return (
    <button
      type="button"
      {...buttonProps}
      aria-pressed={active}
      className={`inline-flex h-8 items-center justify-center rounded-full border border-black px-3 font-mono text-mono-sm uppercase enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 ${active ? "bg-black text-cream" : "bg-cream text-black enabled:hover:bg-teal enabled:hover:text-black"} ${className}`}
    >
      {children}
      {count !== undefined && <span className="whitespace-pre">{` (${count})`}</span>}
    </button>
  );
}
