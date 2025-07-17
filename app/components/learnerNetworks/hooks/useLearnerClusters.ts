"use client";

import { clusterSummary, clusterDetailById } from "../data/mockApiResponse";
import { ClusterSummary, ClusterDetail } from "../types";

export const useLearnerClusters = (): {
  clusters: ClusterSummary[];
  isLoading: false;
  error: null;
} => {
  return { clusters: clusterSummary, isLoading: false, error: null };
};

export const useClusterDetail = (
  clusterId: string | null,
): {
  cluster: ClusterDetail | undefined;
  isLoading: false;
  error: null;
} => {
  const cluster = clusterId ? clusterDetailById[clusterId] : undefined;
  return { cluster, isLoading: false, error: null };
};
