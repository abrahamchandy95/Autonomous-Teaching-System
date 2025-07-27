"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import Sidebar, { type View } from "@/app/components/shared/Sidebar";

import OverviewDashboard from "@/app/components/overview";
import LearnFromChats from "@/app/components/learnFromChats";
import ReviewTopics from "@/app/components/reviewTopics";
import LearnAssignedTasks from "./components/assignedTopics";
import ReinforcedTutor from "@/app/components/reinforcedTutor";
import LearnerNetwork from "@/app/components/learnerNetworks";

import type { Learner } from "./components/shared/LearnerProfile";

export default function ATSHomePage() {
    /* ────────── sidebar tab state ────────── */
    const [currentView, setCurrentView] = useState<View>("overview");
    const changeViewAction = useCallback((v: View) => setCurrentView(v), []);

    /* ────────── learner profile (mock) ────────── */
    const [profile, setProfile] = useState<Learner>({
        name: "Student #1247",
        age: 15,
        gender: "female",
        grade: "10th",
        interests: "Physics • Coding • Music",
    });

    /* ────────── topic‑detail navigation helper ────────── */
    const router = useRouter();
    const handleBookReview = useCallback(
        (bookId: string) => {
            console.log("handleBookReview got:", bookId);
            router.push(`/books/${bookId}`);
        },
        [router],
    );

    /* ────────── which section to show ────────── */
    function renderSection() {
        switch (currentView) {
            case "learn-from-chats":
                return <LearnFromChats />;
            case "review-topics":
                return <ReviewTopics onClickAction={handleBookReview} />;
            case "assigned-learning":
                return <LearnAssignedTasks onBookClick={handleBookReview} />;
            case "reinforced-tutor":
                return <ReinforcedTutor />;
            case "learner-networks":
                return <LearnerNetwork />;
            default:
                return (
                    <OverviewDashboard
                        profile={profile}
                        setViewAction={changeViewAction}
                    />
                );
        }
    }

    /* ────────── layout ────────── */
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar
                currentView={currentView}
                changeViewAction={changeViewAction}
                profile={profile}
                saveProfileAction={setProfile}
            />
            <main className="flex-1 overflow-auto p-6">{renderSection()}</main>
        </div>
    );
}
