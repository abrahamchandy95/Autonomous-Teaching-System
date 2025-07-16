"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { mockLeaders } from "../data/mockLeaders";

export default function Leaderboard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Leaderboard</CardTitle>
        <Award className="h-4 w-4 text-amber-500 ml-auto" aria-hidden />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {mockLeaders.map((s, i) => (
            <li className="flex justify-between" key={s.name}>
              <span>
                {i + 1}. {s.name}
              </span>
              <span className="font-medium">{s.points}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
