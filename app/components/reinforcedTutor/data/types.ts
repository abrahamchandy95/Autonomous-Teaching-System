/** learner’s progress on one topic */
export interface TopicProgress {
  topicId: string;
  name: string;
  /** 1–5 RL difficulty levels completed */
  scores: { level: number; score: number }[];
  /** RL‑suggested next sequence (difficulty levels) */
  suggestedSequence: number[];
}
