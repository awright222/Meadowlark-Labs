import {
  BIRD_VIEWBOX,
  BODY,
  BREAST,
  HEAD,
  OUTLINES,
  TAIL,
  WING_UPPER,
} from "@/components/meadowlark-bird-paths";

// Padding keeps feather tips and anti-aliased edges from being clipped.
const PAD = 8;

/**
 * The Meadowlark bird mark as inline SVG. Purely decorative: it is hidden from
 * assistive tech by its parent and carries no text.
 *
 * Layers, bottom to top (timings live in globals.css under "Meadowlark bird"):
 *   1. fill groups  - wing, body, tail, head in the ink colour, gold breast
 *   2. outline pen  - the seamless silhouette that traces in before the fills
 * The markup is the finished logo; the animation is CSS only.
 */
export default function MeadowlarkBird({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${BIRD_VIEWBOX.width + PAD * 2} ${BIRD_VIEWBOX.height + PAD * 2}`}
      className={`bird-art ${className}`}
      fill="none"
      focusable="false"
      aria-hidden="true"
    >
      <g fill="var(--foreground)" fillRule="evenodd">
        <path className="bird-fill" data-part="wing-upper" d={WING_UPPER} />
        <path className="bird-fill" data-part="body" d={BODY} />
        <path className="bird-fill" data-part="tail" d={TAIL} />
        <path className="bird-fill" data-part="head" d={HEAD} />
      </g>
      <path
        className="bird-breast"
        data-part="breast"
        d={BREAST}
        fill="var(--accent)"
        fillRule="evenodd"
      />
      <g className="bird-lines">
        {OUTLINES.map((d, i) => (
          <path key={i} pathLength={1} d={d} />
        ))}
      </g>
    </svg>
  );
}
