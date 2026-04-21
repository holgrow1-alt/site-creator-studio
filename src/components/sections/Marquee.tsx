interface Props { words: string[]; }

export function Marquee({ words }: Props) {
  const items = [...words, ...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-background py-8">
      <div className="flex marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="font-display text-6xl md:text-8xl text-foreground/90 mx-12 flex items-center gap-12">
            {w}
            <span className="w-3 h-3 rounded-full bg-primary shadow-neon inline-block" />
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}
