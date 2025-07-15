"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface QA {
  question: string;
  correctAnswer: string;
  learnerAnswer?: string;
}

interface Props {
  qa: QA;
  index: number;
  total: number;
  onSubmitAction: (answer: string) => void;
  onNextAction: () => void;
}

export default function QuestionCard({
  qa,
  index,
  total,
  onSubmitAction,
  onNextAction,
}: Props) {
  const [draft, setDraft] = useState("");

  if (qa.learnerAnswer === undefined) {
    return (
      <div className="space-y-4">
        <p className="font-medium">
          {index + 1}/{total}
        </p>
        <p>{qa.question}</p>
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type your answer…"
        />
        <Button
          className="w-full"
          disabled={!draft.trim()}
          onClick={() => {
            onSubmitAction(draft.trim());
            setDraft("");
          }}
        >
          Submit
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="font-medium">
        {index + 1}/{total}
      </p>
      <p>{qa.question}</p>
      <p className="text-sm">
        <span className="font-medium">Your answer:</span> {qa.learnerAnswer}
      </p>
      <p className="text-sm">
        <span className="font-medium">Correct answer:</span> {qa.correctAnswer}
      </p>
      <Button className="w-full" onClick={onNextAction}>
        Next Question
      </Button>
    </div>
  );
}
