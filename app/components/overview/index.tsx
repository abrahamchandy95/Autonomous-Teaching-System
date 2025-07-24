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
            {/* ---------------- Page header ---------------- */}
            <header>
                <PageHeader
                    title="Autonomous Teaching System"
                    subtitle=""
                    studentName={profile.name}
                />
            </header>

            <WelcomeBanner studentName={profile.name} />

            {/* ---------------- Avatar + details row ---------------- */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                {/* Avatar */}
                <AvatarSelector
                    name={profile.name}
                    editable={false}
                    className="h-64 w-64"
                />

                {/* Details */}
                <div className="space-y-2 text-center lg:text-left">
                    <h2 className="text-2xl font-semibold">{profile.name}</h2>
                    <p className="text-gray-600">
                        <span className="font-medium">Grade:</span>{" "}
                        {profile.grade}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Age:</span> {profile.age}
                    </p>
                </div>
            </div>

            {/* ---------------- KPI grid ---------------- */}
            <KpiGrid setViewAction={setViewAction} />

            {/* ---------------- Activity + leaderboard ---------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <Leaderboard />
            </div>
        </section>
    );
}
