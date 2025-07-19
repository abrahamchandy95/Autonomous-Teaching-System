import { Badge } from "@/components/ui/badge";

const ACHIEVEMENTS: Record<string, { label: string; color: string }> = {
  first_pass: { label: "✓ First Pass", color: "bg-green-100 text-green-700" },
  five_passes: { label: "★ 5 Passes", color: "bg-amber-100 text-amber-700" },
  cleared_topic: {
    label: "\u{1F3C6} Cleared",
    color: "bg-purple-100 text-purple-700",
  },
};

export default function Achievements({ ids }: { ids: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {ids.map((id) => {
        const { label, color } = ACHIEVEMENTS[id] ?? {
          label: id,
          color: "bg-gray-100 text-gray-700",
        };
        return (
          <Badge key={id} className={`${color} text-xs`} variant="outline">
            {label}
          </Badge>
        );
      })}
    </div>
  );
}
