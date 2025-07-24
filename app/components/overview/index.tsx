"use client";

import PageHeader from "@/app/components/shared/PageHeader";
import KpiGrid from "./components/Kpi/KpiGrid";
import RecentActivity from "./components/RecentActivity";
import Leaderboard from "./components/Leaderboard";
import WelcomeBanner from "./components/WelcomeBanner";
import AvatarSelector from "../avatar/AvatarSelector";
import type { View } from "@/app/components/sidebar";
import type { Learner } from "./components/LearnerProfile";

interface OverviewProps {
    profile: Learner;
    setViewAction: (v: View) => void;
}

export default function OverviewDashboard({
    profile,
    setViewAction,
}: OverviewProps) {
    return (
        <section className="space-y-6">
            <header>
                <PageHeader
                    title="Autonomous Teaching System"
                    subtitle=""
                    studentName={profile.name}
                />
            </header>

            <WelcomeBanner studentName={profile.name} />

            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{profile.name}</h2>
                <AvatarSelector
                    name={profile.name}
                    editable={false}
                    className="h-64 w-64"
                />
            </div>

            <KpiGrid setViewAction={setViewAction} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <Leaderboard />
            </div>
        </section>
    );
}
