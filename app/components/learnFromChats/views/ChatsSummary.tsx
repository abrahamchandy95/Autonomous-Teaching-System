"use client";

import { Users, TrendingUp, Trophy } from "lucide-react";
import KpiCard from "../components/KpiCard";

interface ChatSummaryProps {
  totalConversations: number;
  topicsIdentified: number;
  topicsCleared: number;
  trophyLabel: string;
  trophyColor: string;
}

export default function ChatsSummary({
  totalConversations,
  topicsIdentified,
  topicsCleared,
  trophyLabel,
  trophyColor,
}: ChatSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <KpiCard
        title="Total Conversations"
        value={totalConversations}
        subtitle="+12 % from last week"
        icon={<Users className="h-4 w-4 text-blue-600" />}
      />

      <KpiCard
        title="Topics Identified"
        value={topicsIdentified}
        subtitle="Requiring attention"
        icon={<TrendingUp className="h-4 w-4 text-green-600" />}
      />

      <KpiCard
        title="Topics Cleared"
        value={topicsCleared}
        subtitle={trophyLabel}
        icon={<Trophy className={`h-4 w-4 ${trophyColor}`} />}
      />
    </div>
  );
}
