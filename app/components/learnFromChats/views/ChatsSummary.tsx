"use client";

import { Users, TrendingUp, Trophy } from "lucide-react";
import MetricOverview from "../components/MetricOverview";

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
      <MetricOverview
        title="Total Conversations"
        value={totalConversations}
        subtitle="+12 % from last week"
        icon={<Users className="h-4 w-4 text-blue-600" />}
      />

      <MetricOverview
        title="Topics Identified"
        value={topicsIdentified}
        subtitle="Requiring attention"
        icon={<TrendingUp className="h-4 w-4 text-green-600" />}
      />

      <MetricOverview
        title="Topics Cleared"
        value={topicsCleared}
        subtitle={trophyLabel}
        icon={<Trophy className={`h-4 w-4 ${trophyColor}`} />}
      />
    </div>
  );
}
