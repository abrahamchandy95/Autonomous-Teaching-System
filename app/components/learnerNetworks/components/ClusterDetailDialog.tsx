"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fragment, ReactNode } from "react";

import { useClusterDetail } from "../hooks/useLearnerClusters";
import { useLeaderboard } from "../hooks/useLeaderboard";

import { Leaderboard } from "./Leaderboard";
import { ProgressBadge } from "./ProgressBadge";
import { ChallengeCard } from "./ChallengeCard";
import { LearningGap } from "../types";

interface Props {
  clusterId: string;
  children: ReactNode; // e.g. <Button>View Details</Button>
}

export const ClusterDetailDialog = ({ clusterId, children }: Props) => {
  /* fetch the full cluster record */
  const { cluster, isLoading } = useClusterDetail(clusterId);
  /* slice out learner‑specific widgets */
  const { rows, badge, quest } = useLeaderboard(clusterId);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-md">
        {isLoading || !cluster ? (
          <p className="text-center py-10">Loading…</p>
        ) : (
          <Fragment>
            {/* ── header ────────────────────────────────────── */}
            <DialogHeader>
              <DialogTitle>{cluster.descriptor}</DialogTitle>
              <DialogDescription>
                Your standing and next steps inside this learning group
              </DialogDescription>
            </DialogHeader>

            {/* ── leaderboard, badge, quest ─────────────────── */}
            <Leaderboard rows={rows} />
            {badge && <ProgressBadge badge={badge} />}
            {quest && (
              <ChallengeCard goal={quest.goal} rewardXP={quest.rewardXP} />
            )}

            {/* ── learning gaps list ────────────────────────── */}
            {cluster.learningGaps?.length ? (
              <div className="space-y-3">
                <h4 className="font-semibold mt-4">Focus concepts</h4>
                {cluster.learningGaps.map((gap: LearningGap) => (
                  <Card key={gap.conceptId}>
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <p className="text-sm">{gap.conceptName}</p>
                        <p className="text-xs text-gray-600">
                          Mastery {gap.mastery}% — improve to unlock{" "}
                          {badge?.name ?? "next badge"}
                        </p>
                      </div>
                      <Button size="sm">Practice now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}
          </Fragment>
        )}
      </DialogContent>
    </Dialog>
  );
};
