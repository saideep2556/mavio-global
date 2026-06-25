import { useState } from "react";

/**
 * SafeImage — a plain <img> with a graceful fallback. If the source
 * fails to load (broken URL, offline, hotlink blocked) it swaps to a
 * solid colour block instead of showing a broken-image icon, so the
 * layout never looks broken even if a specific photo URL goes stale.
 */
const SafeImage = ({ src, alt, className = "", fallbackColor = "var(--cream-dim)", ...rest }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        style={{ background: fallbackColor }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
};

export default SafeImage;
