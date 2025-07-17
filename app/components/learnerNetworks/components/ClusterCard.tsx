"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

import { ClusterSummary } from "../types";
import { performanceColor } from "../helpers/colors";
import { ClusterDetailDialog } from "./ClusterDetailDialog";

interface Props {
  cluster: ClusterSummary;
}

export const ClusterCard = ({ cluster }: Props) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{cluster.descriptor}</CardTitle>
          <CardDescription>{cluster.memberCount} students</CardDescription>
        </div>
        <div
          className={`text-lg font-semibold ${performanceColor(
            cluster.avgPerformance,
          )}`}
        >
          {cluster.avgPerformance}%
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Cohesion {(cluster.cohesion * 100).toFixed(0)}%
        </span>

        <ClusterDetailDialog clusterId={cluster.id}>
          <Button size="sm">
            <Eye className="h-4 w-4 mr-1" />
            View&nbsp;Details
          </Button>
        </ClusterDetailDialog>
      </div>
    </CardContent>
  </Card>
);
