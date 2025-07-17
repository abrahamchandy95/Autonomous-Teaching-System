"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Layers, TrendingUp, Zap } from "lucide-react";
import { useLearnerClusters } from "../hooks/useLearnerClusters";

/**
 * Dashboard KPI cards – total students, clusters, average performance, etc.
 * Pulls the mock data via useLearnerClusters(), so no props are needed.
 */
export const ClusterSummaryCards = () => {
  const { clusters } = useLearnerClusters(); // returns mock data instantly
  if (!clusters) return null;

  // Aggregate stats
  const totals = {
    students: clusters.reduce((sum, c) => sum + c.memberCount, 0),
    clusters: clusters.length,
    avgPerformance: Math.round(
      clusters.reduce((s, c) => s + c.avgPerformance, 0) / clusters.length,
    ),
    tasksThisWeek: 0, // placeholder until a real metric is available
  };

  // Card config
  const items = [
    {
      label: "Total Students",
      value: totals.students,
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: "Active Clusters",
      value: totals.clusters,
      icon: Layers,
      color: "text-green-600",
    },
    {
      label: "Avg Performance",
      value: `${totals.avgPerformance}%`,
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      label: "Tasks Assigned",
      value: totals.tasksThisWeek,
      icon: Zap,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {items.map(({ label, value, icon: Icon, color }) => (
        <Card key={label}>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Icon className={`h-4 w-4 ml-auto ${color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">
              {label === "Tasks Assigned" ? "This week" : "Across all clusters"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
