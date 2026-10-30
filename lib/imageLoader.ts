/**
 * Static export has no image server, so large photos are pre-resized into
 * `-640`, `-900` and `-1200` WebP files. Refer to them by their base name
 * (for example "/hero.webp") and the browser picks the right size.
 */
const WIDTHS = [640, 900, 1200];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  if (!/^\/(hero|store)\.webp$/.test(src)) return src;
  const size = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  return src.replace(/\.webp$/, `-${size}.webp`);
}
