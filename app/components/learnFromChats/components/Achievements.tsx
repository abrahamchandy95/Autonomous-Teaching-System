import { Badge } from "@/components/ui/badge";

const ACHIEVEMENTS: Record<string, { label: string; color: string }> = {
  first_pass: { label: "✓ First Pass", color: "bg-green-100 text-green-700" },
  five_passes: { label: "★ 5 Passes", color: "bg-amber-100 text-amber-700" },
  cleared_topic: {
    label: "\u{1F3C6} Topic Cleared", // 🏆
    color: "bg-purple-100 text-purple-700",
  },
};

export default function AchievementBadge({ id }: { id: string }) {
  const { label, color } = ACHIEVEMENTS[id] ?? {
    label: id,
    color: "bg-gray-100 text-gray-700",
  };

  return (
    <Badge className={`${color} text-xs`} variant="outline">
      {label}
    </Badge>
  );
}
