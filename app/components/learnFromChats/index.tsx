"use client";

import Header from "./views/Header";
import ChatsSummary from "./views/ChatsSummary";
import TopicsIdentified from "./views/TopicsIdentified";

import { mockTopics } from "./data/mockTopics";
import { peersClearedCounts } from "./data/mockCohort";

/* ───────── percentile → trophy tier ───────── */
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
  /* session / active user */
  const activeStudent = "Student #1247";

  /* top‑level metrics */
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

  /* ─────────────── UI ─────────────── */
  return (
    <div className="space-y-6">
      {/* page header */}
      <Header studentName={activeStudent} />

      {/* KPI grid */}
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
