import { useState } from "react";

function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`img-wrapper ${className || ""}`} data-loaded={loaded}>
      {!loaded && !error && (
        <div className="img-skeleton" aria-hidden="true">
          <div className="skeleton-shimmer" />
        </div>
      )}
      {error && (
        <div className="img-fallback" aria-label="Image unavailable">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={loaded ? "" : "img-hidden"}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
}

export default LazyImage;