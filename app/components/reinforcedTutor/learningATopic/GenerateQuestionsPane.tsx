"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  loading: boolean;
  onGenerateAction: (qty: number) => void;
  onRegenerateAction: () => void;
}

export default function GenerateQuestionsPane({
  loading,
  onGenerateAction,
  onRegenerateAction,
}: Props) {
  const [qty, setQty] = useState(5);

  return (
    <div className="space-y-3">
      <h4 className="font-semibold">Generate Practice Questions</h4>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min={1}
          max={20}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-20"
        />
        <Button disabled={loading} onClick={() => onGenerateAction(qty)}>
          {loading ? "Generating…" : "Get Questions"}
        </Button>
        <Button variant="ghost" onClick={onRegenerateAction}>
          Regenerate Sequence
        </Button>
      </div>
    </div>
  );
}
