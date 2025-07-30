"use client";

import React from "react";

import { useAssignedTasks } from "./hooks/useAssignedTasks";
import SummaryGrid from "./components/SummaryGrid";
import AssignedTaskCard from "./components/AssignedTaskCard";

interface Props {
    onReviewClick?: (taskId: string) => void;
}

const LearnAssignedTasks: React.FC<Props> = ({ onReviewClick }) => {
    const { topics: tasks, summary } = useAssignedTasks();

    return (
        <section className="space-y-6">
            <SummaryGrid summary={summary} />

            <div>
                {tasks.map((task) => (
                    <AssignedTaskCard
                        key={task.id}
                        task={task}
                        onAction={onReviewClick}
                    />
                ))}
            </div>
        </section>
    );
};

export default LearnAssignedTasks;
