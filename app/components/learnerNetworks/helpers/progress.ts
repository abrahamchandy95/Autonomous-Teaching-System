export const percent = (current: number, target: number) =>
  Math.min(100, Math.round((current / target) * 100));
