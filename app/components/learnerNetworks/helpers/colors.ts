export const difficultyBadge = (level: number): string => {
  const colors = {
    1: "bg-green-100 text-green-800",
    2: "bg-blue-100 text-blue-800",
    3: "bg-yellow-100 text-yellow-800",
    4: "bg-orange-100 text-orange-800",
    5: "bg-red-100 text-red-800",
  } as const;
  return colors[level as keyof typeof colors] ?? "bg-gray-100 text-gray-800";
};

export const performanceColor = (score: number) => {
  if (score >= 80) return "text-green-600";
  if (score >= 70) return;
};
