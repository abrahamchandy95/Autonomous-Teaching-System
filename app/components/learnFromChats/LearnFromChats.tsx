"use client";

import { Users, TrendingUp, Trophy, User } from "lucide-react";

import StatsCard from "./StatsCard";
import TopicCard from "./TopicCard";
import useExpanded from "./hooks/useExpanded";
import { mockTopics } from "./data/mockTopics";
import { peersClearedCounts } from "./data/mockCohort";

/* map percentile ➞ trophy tier */
function getTier(percentile: number) {
  if (percentile >= 90)
    return { label: "Diamond Rank \u{1F48E}", color: "text-cyan-600" };
  if (percentile >= 70)
    return { label: "Gold Rank \u{1F947}", color: "text-amber-500" };
  if (percentile >= 40)
    return { label: "Silver Rank \u{1F948}", color: "text-slate-400" };
  if (percentile >= 10)
    return { label: "Bronze Rank \u{1F949}", color: "text-orange-600" };
  return { label: "Rookie \u{1F331}", color: "text-green-600" };
}

export default function LearnFromChats() {
  const { toggle, isOpen } = useExpanded<string>();
  const activeStudent = "Student #1247"; // TODO: pull from session

  /* ────────── top-level metrics ────────── */
  const totalConversations = 47; // TODO: derive from API

  // Cleared = passed >= 1 AND difficulty === "Hard"
  const clearedTopics = mockTopics.filter(
    (t) => t.passes > 0 && t.difficulty === "Hard",
  ).length;

  /* percentile rank against peers */
  const percentile = peersClearedCounts.length
    ? Math.round(
        (peersClearedCounts.filter((n) => n < clearedTopics).length /
          peersClearedCounts.length) *
          100,
      )
    : 0;

  const { label: trophyLabel, color: trophyColor } = getTier(percentile);

  /* ─────────────── UI ─────────────── */
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learn from Chats</h1>
          <p className="text-gray-600 mt-2">
            Analyze your conversations and identify knowledge gaps
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
          <User className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">{activeStudent}</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Total Conversations"
          value={totalConversations}
          subtitle="+12 % from last week"
          icon={<Users className="h-4 w-4 text-blue-600" />}
        />

        <StatsCard
          title="Topics Identified"
          value={mockTopics.length}
          subtitle="Requiring attention"
          icon={<TrendingUp className="h-4 w-4 text-green-600" />}
        />

        <StatsCard
          title="Topics Cleared"
          value={clearedTopics}
          subtitle={trophyLabel}
          icon={<Trophy className={`h-4 w-4 ${trophyColor}`} />}
        />
      </div>

      {/* Topic list */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Identified Learning Topics</h2>
        {mockTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            open={isOpen(topic.id)}
            onToggle={() => toggle(topic.id)}
          />
        ))}
      </div>
    </div>
  );
}
