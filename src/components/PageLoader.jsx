function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background"
    >
      <span className="flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-pulse rounded-full bg-signal"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        Loading…
      </p>
      <span className="sr-only">Loading page</span>
    </div>
  );
}

export default PageLoader;
