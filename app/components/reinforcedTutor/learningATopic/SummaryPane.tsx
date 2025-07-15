"use client";

import { Button } from "@/components/ui/button";

interface QA {
  question: string;
  correctAnswer: string;
  learnerAnswer?: string;
}

export default function SummaryPane({
  deck,
  score,
  onRestartAction,
}: {
  deck: QA[];
  score: number;
  onRestartAction: () => void;
}) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">Session Complete</h4>
      <p className="text-lg font-bold">Score: {score}%</p>
      <ul className="list-decimal pl-5 text-sm space-y-1">
        {deck.map((qa, i) => (
          <li key={i}>
            {qa.question}
            <br />
            <span className="text-gray-600">
              Your: {qa.learnerAnswer ?? "-"} | Correct: {qa.correctAnswer}
            </span>
          </li>
        ))}
      </ul>
      <Button variant="outline" onClick={onRestartAction}>
        Start New Set
      </Button>
    </div>
  );
}
