"use client";

import PageHeader from "@/app/components/shared/PageHeader";
import ChatsSummary from "./views/ChatsSummary";
import TopicsIdentified from "./views/TopicsIdentified";

import { mockTopics } from "./data/mockTopics";
import { peersClearedCounts } from "./data/mockCohort";

/* percentile → trophy tier */
function getTier(p: number) {
  if (p >= 90)
    return { label: "Diamond Rank \u{1F48E}", color: "text-cyan-600" };
  if (p >= 70) return { label: "Gold Rank \u{1F947}", color: "text-amber-500" };
  if (p >= 40)
    return { label: "Silver Rank \u{1F948}", color: "text-slate-400" };
  if (p >= 10)
    return { label: "Bronze Rank \u{1F949}", color: "text-orange-600" };
  return { label: "Rookie \u{1F331}", color: "text-green-600" };
}

export default function LearnFromChats() {
  const totalConversations = 47;
  const topicsIdentified = mockTopics.length;
  const topicsCleared = mockTopics.filter(
    (t) => t.passes > 0 && t.difficulty === "Hard",
  ).length;

  const percentile = peersClearedCounts.length
    ? Math.round(
        (peersClearedCounts.filter((n) => n < topicsCleared).length /
          peersClearedCounts.length) *
          100,
      )
    : 0;

  const { label: trophyLabel, color: trophyColor } = getTier(percentile);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Learn from Chats"
        subtitle="Analyze your conversations and identify knowledge gaps"
        /* no studentName → no badge */
      />

      <ChatsSummary
        totalConversations={totalConversations}
        topicsIdentified={topicsIdentified}
        topicsCleared={topicsCleared}
        trophyLabel={trophyLabel}
        trophyColor={trophyColor}
      />

      <TopicsIdentified />
    </div>
  );
}
