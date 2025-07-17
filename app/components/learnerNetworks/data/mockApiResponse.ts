import {
  ClusterSummary,
  ClusterDetail,
  LeaderboardRow,
  BadgeProgress,
  LearningGap,
} from "../types";

/* ════════════ 1. SUMMARY LIST ════════════ */
export const clusterSummary: ClusterSummary[] = [
  {
    id: "cluster-01",
    descriptor: "Learning group #1",
    cohesion: 0.79,
    avgPerformance: 76,
    memberCount: 42,
  },
  {
    id: "cluster-02",
    descriptor: "Learning group #2",
    cohesion: 0.73,
    avgPerformance: 84,
    memberCount: 37,
  },
];

/* ════════════ 2. FULL DETAIL BY ID ════════════ */
export const clusterDetailById: Record<string, ClusterDetail> = {
  /* ── Cluster 01 ───────────────────────────────────────────── */
  "cluster-01": {
    ...clusterSummary[0],

    /* five learners exposed in the leaderboard slice */
    members: [
      {
        id: "you",
        name: "You",
        metrics: {
          mastery: { Algebra: 76, Geometry: 70 },
          engagementMinutes: 210,
          growthRate: 0.12,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "top-score",
        name: "Top score",
        metrics: {
          mastery: { Algebra: 92, Geometry: 82 },
          engagementMinutes: 245,
          growthRate: 0.1,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "top-growth",
        name: "Top improver",
        metrics: {
          mastery: { Algebra: 80, Geometry: 68 },
          engagementMinutes: 270,
          growthRate: 0.21,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "next-up",
        name: "Next target",
        metrics: {
          mastery: { Algebra: 78, Geometry: 71 },
          engagementMinutes: 200,
          growthRate: 0.11,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "behind-you",
        name: "Close behind",
        metrics: {
          mastery: { Algebra: 74, Geometry: 69 },
          engagementMinutes: 185,
          growthRate: 0.09,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
    ],

    /* ATS handles task recs elsewhere → keep empty */
    recommendedTasks: [],

    /* learner‑facing extras */
    leaderboard: {
      rows: [
        { id: "top-score", label: "Top score", score: 92 },
        { id: "top-growth", label: "Top improver", score: 80, growth: 0.21 },
        { id: "you", label: "You", score: 76, growth: 0.12 },
        { id: "next-up", label: "Next target", score: 78 },
        { id: "behind-you", label: "Close behind", score: 74 },
      ] as LeaderboardRow[],

      badge: {
        name: "Algebra Bronze",
        current: 18,
        target: 20,
      } as BadgeProgress,

      weeklyQuest: {
        goal: "Beat the group’s average mastery this week",
        rewardXP: 50,
      },
    },

    /* top 3 concepts holding you back */
    learningGaps: [
      {
        conceptId: "alg‑factoring",
        conceptName: "Factoring quadratics",
        mastery: 46,
        recommendedTask: {
          id: "g1",
          title: "Factoring Quadratics Drill",
          type: "practice",
          difficulty: 2,
          estimatedTimeMinutes: 20,
        },
      },
      {
        conceptId: "alg‑solve‑inequalities",
        conceptName: "Solving inequalities",
        mastery: 52,
        recommendedTask: {
          id: "g2",
          title: "Inequality Word Problems",
          type: "assessment",
          difficulty: 3,
          estimatedTimeMinutes: 30,
        },
      },
      {
        conceptId: "alg‑vertex‑form",
        conceptName: "Quadratic vertex form",
        mastery: 58,
        recommendedTask: {
          id: "g3",
          title: "Graphing Vertex‑Form Quadratics",
          type: "practice",
          difficulty: 3,
          estimatedTimeMinutes: 25,
        },
      },
    ] as LearningGap[],
  },

  /* ── Cluster 02 ───────────────────────────────────────────── */
  "cluster-02": {
    ...clusterSummary[1],

    members: [
      {
        id: "you",
        name: "You",
        metrics: {
          mastery: { Geometry: 84, Physics: 82, Calculus: 78 },
          engagementMinutes: 230,
          growthRate: 0.1,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "top-score",
        name: "Top score",
        metrics: {
          mastery: { Geometry: 95, Physics: 90, Calculus: 88 },
          engagementMinutes: 260,
          growthRate: 0.11,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "top-growth",
        name: "Top improver",
        metrics: {
          mastery: { Geometry: 88, Physics: 84, Calculus: 83 },
          engagementMinutes: 280,
          growthRate: 0.19,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "next-up",
        name: "Next target",
        metrics: {
          mastery: { Geometry: 86, Physics: 84, Calculus: 80 },
          engagementMinutes: 215,
          growthRate: 0.09,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
      {
        id: "behind-you",
        name: "Close behind",
        metrics: {
          mastery: { Geometry: 81, Physics: 80, Calculus: 79 },
          engagementMinutes: 200,
          growthRate: 0.08,
          lastUpdated: "2025-07-17T09:00:00Z",
        },
      },
    ],

    recommendedTasks: [],

    leaderboard: {
      rows: [
        { id: "top-score", label: "Top score", score: 95 },
        { id: "top-growth", label: "Top improver", score: 88, growth: 0.19 },
        { id: "you", label: "You", score: 84, growth: 0.1 },
        { id: "next-up", label: "Next target", score: 86 },
        { id: "behind-you", label: "Close behind", score: 81 },
      ],

      badge: {
        name: "Geometry Silver",
        current: 24,
        target: 30,
      },

      weeklyQuest: {
        goal: "Log 180 min of STEM practice",
        rewardXP: 60,
      },
    },

    learningGaps: [
      {
        conceptId: "geo‑proof‑vectors",
        conceptName: "Vector proofs",
        mastery: 50,
        recommendedTask: {
          id: "g4",
          title: "Vector Proofs Workshop",
          type: "assessment",
          difficulty: 4,
          estimatedTimeMinutes: 40,
        },
      },
      {
        conceptId: "phys‑kinematics",
        conceptName: "2‑D kinematics",
        mastery: 55,
        recommendedTask: {
          id: "g5",
          title: "Projectile Motion Simulation",
          type: "project",
          difficulty: 5,
          estimatedTimeMinutes: 60,
        },
      },
      {
        conceptId: "calc‑limits",
        conceptName: "Limits & continuity",
        mastery: 57,
        recommendedTask: {
          id: "g6",
          title: "Limits Mastery Quiz",
          type: "practice",
          difficulty: 3,
          estimatedTimeMinutes: 25,
        },
      },
    ] as LearningGap[],
  },
};
