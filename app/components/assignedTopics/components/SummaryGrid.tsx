import React from "react";

interface Summary {
    total: number;
    needsReview: number;
    completed: number;
}

interface SummaryProps {
    summary: Summary;
    cardHeight?: string;
}

interface TileMetrics {
    value: number;
    label: string;
    color: string;
    height: string;
}

function StatTile({ value, label, color, height }: TileMetrics) {
    return (
        <div
            className={`p-4 ${color} ${height} rounded shadow flex flex-col items-center justify-center`}
        >
            <div className="text-oxl font-semibold">{value}</div>
            <div className="text-sm">{label}</div>
        </div>
    );
}

const SummaryGrid: React.FC<SummaryProps> = ({
    summary,
    cardHeight = "h-32",
}) => {
    const stats = [
        { value: summary.total, label: "Total Assigned", color: "bg-gray-100" },
        {
            value: summary.needsReview,
            label: "Needs Review",
            color: "bg-yellow-100",
        },
        { value: summary.completed, label: "Completed", color: "bg-green-100" },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map(({ value, label, color }) => (
                <StatTile
                    key={label}
                    value={value}
                    label={label}
                    color={color}
                    height={cardHeight}
                />
            ))}
        </div>
    );
};
export default SummaryGrid;
