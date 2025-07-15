"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mockTopics } from "./data/mockTopics";
import type { TopicProgress } from "./data/types";

export default function UploadScoresPane() {
  const [topicId, setTopicId] = useState(mockTopics[0].topicId);
  const [score, setScore] = useState<number | "">("");
  const [difficulty, setDifficulty] = useState(1);
  const [busy, setBusy] = useState(false);

  const submitAction = async () => {
    if (score === "") return;
    setBusy(true);
    console.log("Upload", { topicId, score, difficulty });
    await new Promise((r) => setTimeout(r, 800));
    setBusy(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Upload Score
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Topic Score</DialogTitle>
          <DialogDescription>
            Record an assessment result for the selected topic.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAction();
          }}
          className="space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Topic</label>
            <select
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
            >
              {mockTopics.map((t: TopicProgress) => (
                <option key={t.topicId} value={t.topicId}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Score (%)</label>
            <Input
              type="number"
              min={0}
              max={100}
              required
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Difficulty Level</label>
            <select
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              value={difficulty}
              onChange={(e) => setDifficulty(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((lvl) => (
                <option key={lvl}>Level {lvl}</option>
              ))}
            </select>
          </div>

          <Button className="w-full" disabled={busy}>
            {busy ? "Saving…" : "Upload"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
