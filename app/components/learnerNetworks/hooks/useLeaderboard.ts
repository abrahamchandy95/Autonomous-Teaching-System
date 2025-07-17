"use client";

import { useClusterDetail } from "./useLearnerClusters";
import { LeaderboardRow, BadgeProgress } from "../types";

/** shape returned by the hook */
interface LeaderboardData {
  rows: LeaderboardRow[];
  badge?: BadgeProgress;
  quest?: { goal: string; rewardXP: number };
}

export const useLeaderboard = (clusterId: string): LeaderboardData => {
  const { cluster } = useClusterDetail(clusterId);

  if (!cluster || !cluster.leaderboard) {
    return { rows: [] };
  }

  const { rows, badge, weeklyQuest } = cluster.leaderboard;
  return { rows, badge, quest: weeklyQuest };
};
