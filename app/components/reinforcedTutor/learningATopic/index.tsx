"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

import LatestAssessment from "./LatestAssessment";
import GenerateQuestionsPane from "./GenerateQuestionsPane";
import QuestionCard from "./QuestionCard";
import SummaryPane from "./SummaryPane";
import { isCorrect } from "./similarity";

import type { TopicProgress } from "../data/types";

interface QA {
  question: string;
  correctAnswer: string;
  learnerAnswer?: string;
}

export default function LearningPath({
  topic,
  onRegenerateAction,
  loading,
}: {
  topic: TopicProgress;
  onRegenerateAction: () => void;
  loading: boolean;
}) {
  const lastScore = topic.scores.at(-1)?.score ?? 0;

  const [deck, setDeck] = useState<QA[]>([]);
  const [idx, setIdx] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  /* ---------------- helpers ---------------- */
  const generateAction = (qty: number) => {
    const q = Array.from({ length: qty }, (_, i) => ({
      question: `Question ${i + 1}: …`,
      correctAnswer: `Answer ${i + 1}`,
    }));
    setDeck(q);
    setIdx(0);
    setFinalScore(null);
  };

  const submitAnswerAction = (ans: string) =>
    setDeck((d) =>
      d.map((qa, i) => (i === idx ? { ...qa, learnerAnswer: ans } : qa)),
    );

  const nextAction = () => {
    const next = idx + 1;
    if (next >= deck.length) {
      const correct = deck.filter((qa) =>
        isCorrect(qa.correctAnswer, qa.learnerAnswer ?? ""),
      ).length;
      setFinalScore(Math.round((correct / deck.length) * 100));
    }
    setIdx(next);
  };

  const restartAction = () => setDeck([]);

  const finished = idx >= deck.length && deck.length > 0;

  const content = () => {
    if (deck.length === 0)
      return (
        <GenerateQuestionsPane
          loading={loading}
          onGenerateAction={generateAction}
          onRegenerateAction={onRegenerateAction}
        />
      );

    if (!finished)
      return (
        <QuestionCard
          qa={deck[idx]}
          index={idx}
          total={deck.length}
          onSubmitAction={submitAnswerAction}
          onNextAction={nextAction}
        />
      );

    return (
      <SummaryPane
        deck={deck}
        score={finalScore ?? 0}
        onRestartAction={restartAction}
      />
    );
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Learning Path: {topic.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <LatestAssessment score={lastScore} />
        {content()}
        {deck.length === 0 && (
          <Button disabled className="w-full">
            <Play className="h-4 w-4 mr-2" />
            Awaiting Question Generation
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
