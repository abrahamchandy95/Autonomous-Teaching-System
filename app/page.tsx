"use client";

import { useState, useCallback } from "react";

import Sidebar, { type View } from "@/app/components/sidebar";
import OverviewDashboard from "@/app/components/overview";

import LearnFromChats from "@/app/components/learnFromChats";
import ReinforcedTutor from "@/app/components/reinforcedTutor";
import LearnerNetwork from "@/app/components/learnerNetworks";
import type { Learner } from "./components/overview/components/LearnerProfile";

export default function ATSDashboard() {
  const [activeView, setActiveView] = useState<View>("overview");
  const selectViewAction = useCallback((v: View) => setActiveView(v), []);

  /* hard‑coded for now; later pull from auth/session */
  const [learner, setLearner] = useState<Learner>({
    name: "Student #1247",
    age: 15,
    gender: "female",
    grade: "10th",
    interests: "Physics • Coding • Music",
  });

  const renderView = () => {
    switch (activeView) {
      case "learn-from-chats":
        return <LearnFromChats />;
      case "reinforced-tutor":
        return <ReinforcedTutor />;
      case "learner-networks":
        return <LearnerNetwork />;
      default:
        return (
          <OverviewDashboard
            learner={learner}
            saveLearnerAction={setLearner}
            selectViewAction={selectViewAction}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar active={activeView} setActiveAction={selectViewAction} />
      <main className="flex-1 overflow-auto p-6">{renderView()}</main>
    </div>
  );
}
