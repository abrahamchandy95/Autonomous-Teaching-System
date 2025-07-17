"use client";
import { LeaderboardRow } from "../types";
import { performanceColor } from "../helpers/colors";

interface Props {
  rows: LeaderboardRow[];
}

export const Leaderboard = ({ rows }: Props) => (
  <div className="space-y-2">
    {rows.map((r, idx) => (
      <div
        key={idx}
        className="flex justify-between px-4 py-2 bg-gray-50 rounded"
      >
        <span className="text-sm">
          {idx + 1}. {r.label}
        </span>
        <span className={`font-semibold ${performanceColor(r.score)}`}>
          {r.score}%
        </span>
      </div>
    ))}
  </div>
);
