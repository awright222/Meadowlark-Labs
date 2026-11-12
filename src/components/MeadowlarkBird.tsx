import type { CSSProperties } from "react";
import {
  BIRD_VIEWBOX,
  BODY,
  BREAST,
  BREAST_STROKE,
  HEAD,
  INK_STROKES,
  TAIL,
  WING_UPPER,
} from "@/components/meadowlark-bird-paths";

// Padding keeps feather tips and anti-aliased edges from being clipped.
const PAD = 8;
const W = BIRD_VIEWBOX.width + PAD * 2;
const H = BIRD_VIEWBOX.height + PAD * 2;

// Each reveal stroke is drawn as stacked copies of the same path, from a fine tip to
// full width. Narrower copies start earlier and finish earlier, so the leading edge is
// a thin point that widens behind it, like a brush gaining pressure. The full-width
// copy finishes last (at the stroke's own end time), so coverage is unchanged.
const LAYER_COUNT = 5;
const MIN_TIP = 8;
const TIP_SCALE = 0.22; // tip width as a share of the full stroke width
const TIP_END = 0.82; // the tip finishes at this share of the stroke duration
const BODY_LAG = 0.17; // the full-width copy starts this share of the duration late

const LAYERS = Array.from({ length: LAYER_COUNT }, (_, i) => {
  const f = i / (LAYER_COUNT - 1);
  const offset = BODY_LAG * f;
  const end = TIP_END + (1 - TIP_END) * f;
  return {
    scale: TIP_SCALE + (1 - TIP_SCALE) * f,
    style: { "--o": +offset.toFixed(4), "--k": +(end - offset).toFixed(4) } as CSSProperties,
  };
});

function Brush({ name, d, width }: { name: string; d: string; width: number }) {
  return (
    <>
      {LAYERS.map((l, i) => (
        <path
          key={i}
          data-stroke={name}
          pathLength={1}
          d={d}
          strokeWidth={i === LAYER_COUNT - 1 ? width : Math.max(MIN_TIP, +(width * l.scale).toFixed(1))}
          style={l.style}
        />
      ))}
    </>
  );
}

const maskBox = {
  maskUnits: "userSpaceOnUse" as const,
  x: -PAD,
  y: -PAD,
  width: W,
  height: H,
};

/**
 * The Meadowlark bird mark as inline SVG. Purely decorative: it is hidden from
 * assistive tech by its parent and carries no text.
 *
 * The markup is the finished logo. For the hero reveal, CSS applies two SVG masks
 * only while the animation runs (see "Meadowlark bird" in globals.css). Broad white
 * brush strokes inside each mask are drawn along the inside of the feathers, body,
 * head and tail, so the ink appears to be painted in. Once the animation ends the
 * masks are no longer applied and the untouched logo remains.
 */
export default function MeadowlarkBird({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${W} ${H}`}
      className={`bird-art ${className}`}
      fill="none"
      focusable="false"
      aria-hidden="true"
    >
      <defs>
        <mask id="bird-ink-mask" {...maskBox}>
          <g
            className="bird-brush"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {INK_STROKES.map((s) => (
              <Brush key={s.name} name={s.name} d={s.d} width={s.width} />
            ))}
          </g>
          {/* Safety net: softly completes the reveal so no hairline can pop in. */}
          <rect className="bird-wash" x={-PAD} y={-PAD} width={W} height={H} fill="#fff" />
        </mask>
        <mask id="bird-gold-mask" {...maskBox}>
          <g
            className="bird-brush"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Brush name="gold" d={BREAST_STROKE.d} width={BREAST_STROKE.width} />
          </g>
          <rect className="bird-wash" x={-PAD} y={-PAD} width={W} height={H} fill="#fff" />
        </mask>
      </defs>

      <g className="bird-ink" fill="var(--foreground)" fillRule="evenodd">
        <path d={WING_UPPER} />
        <path d={BODY} />
        <path d={TAIL} />
        <path d={HEAD} />
      </g>
      <path className="bird-breast" d={BREAST} fill="var(--accent)" fillRule="evenodd" />
    </svg>
  );
}
