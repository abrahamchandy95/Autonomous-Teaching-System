"use client";
interface Props {
  goal: string;
  rewardXP: number;
}

export const ChallengeCard = ({ goal, rewardXP }: Props) => (
  <div className="p-4 rounded-lg border border-yellow-300 bg-yellow-50">
    <p className="text-sm mb-2">{goal}</p>
    <p className="text-xs font-medium text-yellow-800">Reward {rewardXP} XP</p>
  </div>
);
