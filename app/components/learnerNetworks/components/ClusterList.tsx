"use client";

import { useLearnerClusters } from "../hooks/useLearnerClusters";
import { ClusterCard } from "./ClusterCard";

export const ClusterList = () => {
  const { clusters } = useLearnerClusters();

  if (!clusters) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clusters.map((c) => (
        <ClusterCard key={c.id} cluster={c} />
      ))}
    </div>
  );
};
