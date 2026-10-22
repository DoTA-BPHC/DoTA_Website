import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
} & (
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (ComponentPropsWithoutRef<typeof Link> & { disabled?: never })
);

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const stateClasses = props.disabled
    ? "cursor-not-allowed border-[#7A7A6E] bg-[#E2E2CE] text-[#7A7A6E] shadow-none"
    : variant === "primary"
      ? "cursor-pointer border-black bg-red text-cream shadow-hard hover:bg-black hover:shadow-[6px_6px_0_#31C4B8] active:shadow-none"
      : "cursor-pointer border-black bg-cream text-black shadow-hard-sm hover:bg-teal hover:text-black hover:shadow-[5px_5px_0_#000] active:shadow-none";
  const motionClasses = props.disabled
    ? ""
    : "motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-x-0.5 motion-safe:active:translate-y-0.5";
  const classes = `inline-flex items-center justify-center rounded-none border px-5 font-mono text-mono-md font-medium uppercase motion-safe:transition-[background-color,color,box-shadow,translate] motion-safe:duration-180 motion-safe:ease-out-quart ${size === "lg" ? "h-13" : "h-11"} ${stateClasses} ${motionClasses} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={classes}>
      {children}
    </button>
  );
}
