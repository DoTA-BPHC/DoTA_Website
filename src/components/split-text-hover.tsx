type SplitTextHoverProps = {
  text: string;
  className?: string;
};

export function SplitTextHover({ text, className = "" }: SplitTextHoverProps) {
  return (
    <span className={`inline-block ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <span key={index} className="relative inline-block overflow-hidden align-bottom whitespace-pre">
            <span
              className="inline-block motion-safe:transition-transform motion-safe:duration-280 motion-safe:ease-out-quart motion-safe:group-hover:-translate-y-full motion-safe:group-focus-visible:-translate-y-full"
              style={{ transitionDelay: `${index * 14}ms` }}
            >
              {character}
            </span>
            <span
              className="absolute inset-0 inline-block translate-y-full text-red motion-safe:transition-transform motion-safe:duration-280 motion-safe:ease-out-quart motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0"
              style={{ transitionDelay: `${index * 14}ms` }}
            >
              {character}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
