"use client";

import { useState, useCallback } from "react";

import { Sidebar, type View } from "@/app/components/sidebar";
import OverviewDashboard from "@/app/components/overview-dashboard";

import LearnFromChats from "@/app/components/learnFromChats";
import ReinforcedTutor from "@/app/components/reinforcedTutor";
import LearnerNetworks from "@/app/components/learner-networks";

export default function ATSDashboard() {
  const [activeView, setActiveView] = useState<View>("overview");

  /* stable setter to prevent needless re‑renders inside Sidebar */
  const selectViewAction = useCallback((v: View) => setActiveView(v), []);

  const renderView = () => {
    switch (activeView) {
      case "learn-from-chats":
        return <LearnFromChats />;
      case "reinforced-tutor":
        return <ReinforcedTutor />;
      case "learner-networks":
        return <LearnerNetworks />;
      default:
        return <OverviewDashboard selectViewAction={selectViewAction} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar active={activeView} setActive={selectViewAction} />
      <main className="flex-1 overflow-auto p-6">{renderView()}</main>
    </div>
  );
}
