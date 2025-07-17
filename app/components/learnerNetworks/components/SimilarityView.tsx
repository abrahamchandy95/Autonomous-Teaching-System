// LearnerNetworks/components/SimilarityView.tsx
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useClusterDetail } from "../hooks/useLearnerClusters";
import { similarityMatrix } from "../helpers/similarity";
import { Fragment } from "react";

interface Props {
  clusterId: string;
}

/** Collapsed “advanced insight” – shows only when the user picks Similarity. */
export const SimilarityView = ({ clusterId }: Props) => {
  const { cluster } = useClusterDetail(clusterId);
  if (!cluster) return null;

  const topics = Object.keys(cluster.members[0].metrics.mastery);
  const matrix = similarityMatrix(cluster.members, topics);

  const colours = [
    "bg-gray-100",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        Similarity Matrix – {cluster.descriptor}
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>Student Similarity</CardTitle>
          <CardDescription>
            Cosine similarity of mastery profiles
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            {/* Build the matrix grid */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${
                  cluster.members.length + 1
                }, 3.5rem)`,
              }}
            >
              {/* Column headers */}
              <div />
              {cluster.members.map((s) => (
                <div
                  key={s.id}
                  className="text-xs font-medium text-center truncate"
                >
                  {s.name.split(" ")[0]}
                </div>
              ))}

              {/* Row headers + cells */}
              {cluster.members.map((row, i) => (
                <Fragment key={row.id}>
                  <div className="text-xs font-medium truncate">
                    {row.name.split(" ")[0]}
                  </div>
                  {cluster.members.map((_, j) => {
                    const sim = matrix[i][j];
                    const intensity = Math.round(sim * 5);
                    return (
                      <div
                        key={`${i}-${j}`}
                        className={`w-14 h-14 ${
                          colours[intensity]
                        } border border-gray-200 flex items-center justify-center text-[10px]`}
                        title={`Similarity: ${(sim * 100).toFixed(0)}%`}
                      >
                        {i === j ? "1" : (sim * 100).toFixed(0)}
                      </div>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
