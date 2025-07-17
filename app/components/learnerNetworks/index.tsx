"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { ClusterSummaryCards } from "./components/ClusterSummaryCards";
import { ClusterList } from "./components/ClusterList";
import { SimilarityView } from "./components/SimilarityView";

import { useLearnerClusters } from "./hooks/useLearnerClusters";

export default function LearnerNetwork() {
  const [view, setView] = useState("clusters");
  const [simId, setSimId] = useState("");

  const { clusters } = useLearnerClusters();

  const firstId = clusters?.[0]?.id ?? "";

  return (
    <div className="space-y-6">
      {/* Header + tab switcher */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learner Network</h1>
          <p className="text-gray-600 mt-2">
            Your groups &amp; mastery insights
          </p>
        </div>

        {clusters && (
          <div className="flex bg-gray-100 rounded-lg p-1">
            <Button
              variant={view === "clusters" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("clusters")}
            >
              Clusters
            </Button>

            <Button
              variant={view === "similarity" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                /* choose first cluster if none selected yet */
                setSimId(simId || firstId);
                setView("similarity");
              }}
            >
              Similarity
            </Button>
          </div>
        )}
      </header>

      {/* KPI cards */}
      <ClusterSummaryCards />

      {/* Main body */}
      {view === "clusters" && <ClusterList />}
      {view === "similarity" && simId && <SimilarityView clusterId={simId} />}
    </div>
  );
}
