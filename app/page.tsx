"use client";

import { useState, useCallback } from "react";

import Sidebar, { type View } from "@/app/components/sidebar";
import OverviewDashboard from "@/app/components/overview";

import LearnFromChats from "@/app/components/learnFromChats";
import ReinforcedTutor from "@/app/components/reinforcedTutor";
import LearnerNetwork from "@/app/components/learnerNetworks";

import type { Learner } from "./components/shared/LearnerProfile";

export default function ATSHomePage() {
    /* -------------------------------------------------------------- *
     *  1. Tab / section state                                        *
     * -------------------------------------------------------------- */
    const [currentView, setCurrentView] = useState<View>("overview");
    const changeViewAction = useCallback((v: View) => setCurrentView(v), []);

    /* -------------------------------------------------------------- *
     *  2. Learner profile state (hard‑coded for now)                 *
     * -------------------------------------------------------------- */
    const [profile, setProfile] = useState<Learner>({
        name: "Student #1247",
        age: 15,
        gender: "female",
        grade: "10th",
        interests: "Physics • Coding • Music",
    });

    /* -------------------------------------------------------------- *
     *  3. Which component to show in <main>                          *
     * -------------------------------------------------------------- */
    function renderSection() {
        switch (currentView) {
            case "learn-from-chats":
                return <LearnFromChats />;
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

    /* -------------------------------------------------------------- *
     *  4. Layout                                                     *
     * -------------------------------------------------------------- */
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                currentView={currentView}
                changeViewAction={changeViewAction}
                profile={profile}
                saveProfileAction={setProfile}
            />

            {/* Main content */}
            <main className="flex-1 overflow-auto p-6">{renderSection()}</main>
        </div>
    );
}
