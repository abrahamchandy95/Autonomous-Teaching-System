"use client";

import Header from "./components/Header";
import KpiGrid from "./components/KpiGrid";
import RecentActivity from "./components/RecentActivity";
import Leaderboard from "./components/Leaderboard";
import type { View } from "@/app/components/sidebar";

export default function OverviewDashboard({
  selectViewAction,
}: {
  selectViewAction: (v: View) => void;
}) {
  return (
    <section className="space-y-6">
      <Header />
      <KpiGrid setViewAction={selectViewAction} />

      {/* lower two‑card grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <Leaderboard />
      </div>
    </section>
  );
}
