"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { mockFeed } from "../data/mockFeed";

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {mockFeed.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
