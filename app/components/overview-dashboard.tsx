"use client";

import { type ComponentType } from "react";
import {
  MessageSquare,
  Brain,
  Share2,
  type LucideProps,
  Award,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { View } from "./sidebar";

/* ---- mock data you can replace with API queries ---- */
const FEED = [
  {
    type: "cluster",
    text: "🟦 2 peers in your network mastered Quadratic Eq.",
  },
  {
    type: "achievement",
    text: "🏆 You earned 'First Pass' in Photosynthesis!",
  },
  { type: "cluster", text: "🟪 Learner B finished 3 new assessments" },
];

const LEADERBOARD = [
  { name: "Learner B", points: 37 },
  { name: "Learner A (you)", points: 29 },
  { name: "Learner C", points: 25 },
];

/* KPI counts (static demo) */
const KPI = {
  chats: 24,
  tutorQs: 156,
  networks: 8,
};

/* -------------------------------------------------
   OverviewDashboard
-------------------------------------------------- */
export default function OverviewDashboard({
  selectViewAction,
}: {
  selectViewAction: (v: View) => void;
}) {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Autonomous Teaching System</h1>
        <p className="text-gray-600 mt-2">
          Comprehensive AI-powered educational platform
        </p>
      </header>

      {/* KPI grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiCard
          view="learn-from-chats"
          select={selectViewAction}
          title="Learn from Chats"
          count={KPI.chats}
          Icon={MessageSquare}
          color="text-blue-600"
          desc="Analyze learner conversations for gaps."
        />
        <KpiCard
          view="reinforced-tutor"
          select={selectViewAction}
          title="Reinforced Tutor"
          count={KPI.tutorQs}
          Icon={Brain}
          color="text-green-600"
          desc="RL-driven personalised questioning."
        />
        <KpiCard
          view="learner-networks"
          select={selectViewAction}
          title="Learner Networks"
          count={KPI.networks}
          Icon={Share2}
          color="text-purple-600"
          desc="Cluster students via knowledge graphs."
        />
      </div>

      {/* Lower two-card section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {FEED.map((f, i) => (
                <li key={i}>{f.text}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leaderboard</CardTitle>
            <Award className="h-4 w-4 text-amber-500 ml-auto" aria-hidden />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {LEADERBOARD.map((s, idx) => (
                <li key={s.name} className="flex justify-between">
                  <span>
                    {idx + 1}. {s.name}
                  </span>
                  <span className="font-medium">{s.points}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
type LucideIcon = ComponentType<LucideProps>;

function KpiCard({
  view,
  select,
  title,
  count,
  Icon,
  color,
  desc,
}: {
  view: View;
  select: (v: View) => void;
  title: string;
  count: number;
  Icon: LucideIcon;
  color: string;
  desc: string;
}) {
  return (
    <Card
      onClick={() => select(view)}
      className="cursor-pointer hover:shadow-lg transition-shadow"
    >
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ml-auto ${color}`} aria-hidden />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <CardDescription className="mt-2">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
}
