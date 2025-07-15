import { Badge } from "@/components/ui/badge";

interface Props {
  difficulty: "Easy" | "Medium" | "Hard";
}

export default function DifficultyBadge({ difficulty }: Props) {
  const color = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  }[difficulty];

  return <Badge className={color}>{difficulty}</Badge>;
}
