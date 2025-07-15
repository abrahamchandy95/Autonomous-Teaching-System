"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Target, Brain, BarChart, Zap } from "lucide-react";

export default function KpiGrid({ totalStudents }: { totalStudents: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <KpiCard
        Icon={Target}
        title="Active Students"
        value={totalStudents}
        color="text-blue-600"
      />
      <KpiCard
        Icon={Brain}
        title="Questions Bank"
        value="1 247"
        color="text-green-600"
      />
      <KpiCard
        Icon={BarChart}
        title="Avg Accuracy"
        value="78 %"
        color="text-purple-600"
      />
      <KpiCard
        Icon={Zap}
        title="RL Updates"
        value="24"
        color="text-orange-600"
      />
    </div>
  );
}

function KpiCard({
  Icon,
  title,
  value,
  color,
}: {
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  value: string | number;
  color: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ml-auto ${color}`} aria-hidden />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
