"use client";
import KpiCard from "./KpiCard";
import { KPI_CONFIG } from "./config";
import type { View } from "@/app/components/sidebar";

export default function KpiGrid({
    setViewAction,
}: {
    setViewAction: (v: View) => void;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KPI_CONFIG.map((kpi) => (
                <KpiCard
                    key={kpi.id}
                    {...kpi}
                    onClickAction={() => setViewAction(kpi.id as View)}
                />
            ))}
        </div>
    );
}
