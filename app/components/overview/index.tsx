"use client";

import PageHeader from "@/app/components/shared/PageHeader";
import KpiGrid from "./components/Kpi/KpiGrid";
import RecentActivity from "./components/RecentActivity";
import Leaderboard from "./components/Leaderboard";
import WelcomeBanner from "./components/WelcomeBanner";
import type { View } from "@/app/components/sidebar";

import LearnerProfile, { type Learner } from "./components/LearnerProfile";

interface DashboardProps {
    learner: Learner;
    saveLearnerAction: (next: Learner) => void;
    selectViewAction: (v: View) => void;
}

export default function OverviewDashboard({
    learner,
    saveLearnerAction,
    selectViewAction,
}: DashboardProps) {
    return (
        <section className="space-y-6">
            <header>
                <PageHeader
                    title="Autonomous Teaching System"
                    subtitle=""
                    studentName={learner.name}
                />
            </header>
            <WelcomeBanner studentName={learner.name} />

            <LearnerProfile
                learner={learner}
                onSaveAction={saveLearnerAction}
            />
            <KpiGrid setViewAction={selectViewAction} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <Leaderboard />
            </div>
        </section>
    );
}
