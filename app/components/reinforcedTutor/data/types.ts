export interface TopicProgress {
  topicId: string;
  name: string;
  scores: { level: number; score: number }[];
  suggestedSequence: number[];

  /* analytics */
  lessonsViewed: number;
  attempts: number;
  passes: number;

  /** ✅ total questions the learner has already answered */
  questionsCompleted: number;
}
