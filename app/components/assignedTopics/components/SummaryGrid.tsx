import React from "react";

interface Summary {
    total: number;
    needsReview: number;
    completed: number;
}

interface Props {
    summary: Summary;
}

const SummaryGrid: React.FC<Props> = ({ summary }) => (
    <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gray-100 rounded shadow">
            <div className="text-lg font-semibold">{summary.total}</div>
            <div>Total Assigned</div>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow">
            <div className="text-lg font-semibold">{summary.needsReview}</div>
            <div>Needs Review</div>
        </div>
        <div className="p-4 bg-green-100 rounded shadow">
            <div className="text-lg font-semibold">{summary.completed}</div>
            <div>Completed</div>
        </div>
    </div>
);

export default SummaryGrid;
