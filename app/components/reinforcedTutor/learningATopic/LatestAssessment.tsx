"use client";
import { Progress } from "@/components/ui/progress";

export default function LatestAssessment({ score }: { score: number }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">Latest Assessment</h4>
      <Progress value={score} />
      <p className="text-sm mt-1">{score}%</p>
    </div>
  );
}
