import { TopicProgress } from "./types";

export const mockTopics: TopicProgress[] = [
  {
    topicId: "t1",
    name: "Quadratic Equations",
    scores: [
      { level: 1, score: 90 },
      { level: 2, score: 78 },
    ],
    suggestedSequence: [2, 2, 3, 2, 3, 3],
  },
  {
    topicId: "t2",
    name: "Photosynthesis",
    scores: [{ level: 1, score: 68 }],
    suggestedSequence: [1, 1, 2, 1, 2, 2],
  },
  {
    topicId: "t3",
    name: "French Verb Conjugation",
    scores: [
      { level: 1, score: 92 },
      { level: 2, score: 85 },
      { level: 3, score: 78 },
    ],
    suggestedSequence: [3, 3, 3, 4, 3],
  },
];
