"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TopicProgress } from "./data/types";

interface Props {
  topics: TopicProgress[];
  selectedId: string;
  onSelectAction: (topic: TopicProgress) => void; // ✅ action suffix
}

export default function TopicSelector({
  topics,
  selectedId,
  onSelectAction,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Topic</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {topics.map((t) => {
          const doneLevels = t.scores.length;
          const latestScore = t.scores[doneLevels - 1]?.score ?? 0;
          const selected = t.topicId === selectedId;
          return (
            <div
              key={t.topicId}
              onClick={() => onSelectAction(t)}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                selected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{t.name}</h4>
                  <p className="text-sm text-gray-600">
                    Levels done: {doneLevels}
                  </p>
                </div>
                <Badge variant="outline">{latestScore}%</Badge>
              </div>
              <Progress value={latestScore} className="h-2 mt-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
