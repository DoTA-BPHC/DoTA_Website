import type { ReactNode } from "react";

type CornerTelemetryProps = {
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function CornerTelemetry({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  children,
  className = "",
}: CornerTelemetryProps) {
  const labelClasses = "absolute font-mono text-mono-xs uppercase";

  return (
    <div className={`relative ${className}`}>
      {topLeft != null && (
        <span className={`${labelClasses} top-4 left-4 lg:top-6 lg:left-6`}>{topLeft}</span>
      )}
      {topRight != null && (
        <span className={`${labelClasses} top-4 right-4 text-right lg:top-6 lg:right-6`}>{topRight}</span>
      )}
      {children}
      {bottomLeft != null && (
        <span className={`${labelClasses} bottom-4 left-4 lg:bottom-6 lg:left-6`}>{bottomLeft}</span>
      )}
      {bottomRight != null && (
        <span className={`${labelClasses} right-4 bottom-4 text-right lg:right-6 lg:bottom-6`}>{bottomRight}</span>
      )}
    </div>
  );
}
