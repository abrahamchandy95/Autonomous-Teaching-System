export type TopicId = string;

/** Fine‑grained metrics stored per student. */
export interface StudentMetrics {
  /** Mastery score (0‑100 %) for each topic the student has attempted. */
  mastery: Record<TopicId, number>;
  /** Average minutes spent on the platform during the last 7 days. */
  engagementMinutes: number;
  /** Weekly growth rate as a decimal (e.g. 0.15 ⇒ +15 % per week). */
  growthRate: number;
  /** ISO timestamp of the most recent metric refresh. */
  lastUpdated: string;
}

export interface Student {
  id: string;
  name: string;
  /** Aggregated performance & engagement stats. */
  metrics: StudentMetrics;
}

export interface Task {
  id: string;
  title: string;
  type: "assessment" | "practice" | "project";
  difficulty: 1 | 2 | 3 | 4 | 5;
  /** Estimated time to complete, in minutes. */
  estimatedTimeMinutes: number;
}

/** Minimal slice used for fast list rendering. */
export interface ClusterSummary {
  id: string;
  /** Generated sentence that summarises why the group exists. */
  descriptor: string;
  /** Modularity / density score (0‑1). */
  cohesion: number;
  /** Mean performance across tracked topics (0‑100 %). */
  avgPerformance: number;
  /** Number of students in the cluster. */
  memberCount: number;
}

export interface LeaderboardRow {
  id: string; // student id or alias slot
  label: string; // "You", "Top score", "Next target", etc.
  score: number; // mastery %
  growth?: number; // optional growth rate
}

export interface BadgeProgress {
  name: string; // "Algebra Bronze"
  current: number; // mastered topics
  target: number; // topics needed
}

export interface LearningGap {
  conceptId: string; // e.g. "alg‑factoring"
  conceptName: string; // "Factoring quadratics"
  mastery: number; // 0‑100
  recommendedTask: Task; // one click → practise the gap
}

export interface ClusterDetail extends ClusterSummary {
  members: Student[];
  recommendedTasks: Task[];

  leaderboard?: {
    rows: LeaderboardRow[];
    badge: BadgeProgress;
    weeklyQuest: { goal: string; rewardXP: number };
  };

  learningGaps?: LearningGap[]; // <-- new
}
