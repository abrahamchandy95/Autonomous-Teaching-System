/* -------------------------------------------------
   Tiny self‑contained cosine‑similarity helper
-------------------------------------------------- */

/* turn text into bag‑of‑words vector */
export function toVector(text: string): Record<string, number> {
  return text
    .toLowerCase()
    .replace(/[^\w\s]+/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .reduce<Record<string, number>>((acc, w) => {
      acc[w] = (acc[w] ?? 0) + 1;
      return acc;
    }, {});
}

/* cosine between two term‑freq vectors */
export function cosine(
  a: Record<string, number>,
  b: Record<string, number>,
): number {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0,
    magA = 0,
    magB = 0;
  keys.forEach((k) => {
    const va = a[k] ?? 0;
    const vb = b[k] ?? 0;
    dot += va * vb;
    magA += va * va;
    magB += vb * vb;
  });
  return magA && magB ? dot / Math.sqrt(magA * magB) : 0;
}

/* true if similarity ≥ threshold (default 0.35) */
export function isCorrect(model: string, answer: string, t = 0.35) {
  return cosine(toVector(model), toVector(answer)) >= t;
}
