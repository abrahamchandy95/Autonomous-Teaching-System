"use client";

import PageHeader from "@/app/components/shared/PageHeader";
import KpiGrid from "./components/Kpi/KpiGrid";
import RecentActivity from "./components/RecentActivity";
import Leaderboard from "./components/Leaderboard";
import WelcomeBanner from "./components/WelcomeBanner";
import AvatarSelector from "../avatar/AvatarSelector";

import type { View } from "@/app/components/shared/Sidebar";
import type { Learner } from "../shared/LearnerProfile";

interface OverviewProps {
    profile: Learner;
    setViewAction: (v: View) => void;
}

export default function OverviewDashboard({
    profile,
    setViewAction,
}: OverviewProps) {
    return (
        <section className="space-y-8">
            {/* ───────────── Header ───────────── */}
            <PageHeader
                title="Autonomous Teaching System"
                subtitle=""
                studentName={profile.name}
            />

            <WelcomeBanner studentName={profile.name} />

            {/* ───────────── Avatar + details ───────────── */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <AvatarSelector
                    name={profile.name}
                    editable={false}
                    className="h-64 w-64"
                />

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

            {/* ───────────── KPI grid ───────────── */}
            {/* KpiGrid handles its own “click → setViewAction('review-topics')” */}
            <KpiGrid setViewAction={setViewAction} />

            {/* ───────────── Activity + leaderboard ───────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <Leaderboard />
            </div>
        </section>
    );
}
