"use client";

import { useState } from "react";
import { mockTopics } from "./data/mockTopics";
import type { TopicProgress } from "./data/types";

import KpiGrid from "./KpiGrid";
import UploadScoresPane from "./UploadScoresPane";
import TopicSelector from "./TopicSelector";
import LearningPath from "./learningATopic";

export default function ReinforcedTutor() {
  const [topics] = useState<TopicProgress[]>(mockTopics);
  const [selected, setSelected] = useState<TopicProgress>(topics[0]);
  const [loading, setLoading] = useState(false);

  const regenerateAction = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const newSeq = Array.from(
      { length: 8 },
      () => Math.floor(Math.random() * 5) + 1,
    );
    setSelected((p) => ({ ...p, suggestedSequence: newSeq }));
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* header + upload */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Personalized Tutor</h1>
          <p className="text-gray-600">
            Adaptive RL model assigns questions by topic difficulty
          </p>
        </div>
        <UploadScoresPane />
      </div>
      <KpiGrid totalStudents={1} /> {/* static demo */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopicSelector
          topics={topics}
          selectedId={selected.topicId}
          onSelectAction={setSelected}
        />
        <LearningPath
          topic={selected}
          onRegenerateAction={regenerateAction}
          loading={loading}
        />
      </div>
    </div>
  );
}
