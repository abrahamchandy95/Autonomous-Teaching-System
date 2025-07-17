"use client";
import { BadgeProgress } from "../types";
import { percent } from "../helpers/progress";

interface Props {
  badge: BadgeProgress;
}

export const ProgressBadge = ({ badge }: Props) => {
  const pct = percent(badge.current, badge.target);

  return (
    <div className="flex items-center space-x-3">
      <svg width="48" height="48" className="shrink-0">
        <circle
          cx="24"
          cy="24"
          r="20"
          strokeWidth="4"
          className="stroke-gray-200"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          strokeWidth="4"
          className="stroke-blue-500"
          fill="none"
          strokeDasharray={`${pct * 1.26} 126`}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[10px]"
        >
          {badge.current}/{badge.target}
        </text>
      </svg>

      <div>
        <p className="text-sm font-medium">
          Next badge: <span className="font-semibold">{badge.name}</span>
        </p>
        <p className="text-xs text-gray-600">
          {badge.target - badge.current} more topics to go
        </p>
      </div>
    </div>
  );
};
