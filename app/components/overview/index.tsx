"use client";

import PageHeader from "@/app/components/shared/PageHeader";
import KpiGrid from "./components/KpiGrid";
import RecentActivity from "./components/RecentActivity";
import Leaderboard from "./components/Leaderboard";
import type { View } from "@/app/components/sidebar";

interface DashboardProps {
  studentName: string;
  selectViewAction: (v: View) => void;
}

export default function OverviewDashboard({
  studentName,
  selectViewAction,
}: DashboardProps) {
  return (
    <section className="space-y-6">
      <header>
        <PageHeader
          title="Autonomous Teaching System"
          subtitle="Comprehensive AI‑powered educational platform"
          studentName={studentName}
        />
      </header>

      <KpiGrid setViewAction={selectViewAction} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <Leaderboard />
      </div>
    </section>
  );
}
