import React from "react";
import type { AssignedTask, LearningResource } from "../data/mockAssignedTasks";

interface Props {
    task: AssignedTask & { needsReview: boolean };
    onAction: (bookId: string) => void;
}

export default function AssignedTaskCard({ task, onAction }: Props) {
    const primary = task.resources[0];

    return (
        <article
            className={`border rounded p-4 hover:shadow-lg transition mb-4 ${
                task.needsReview ? "border-red-500" : "border-gray-300"
            }`}
        >
            <TitleSection task={task} />
            <ProgressBar progress={task.progress} />
            {primary && <ResourceLink resource={primary} />}
            {task.needsReview && <NeedsReviewBadge />}
            <ActionButton
                needsReview={task.needsReview}
                onClick={() => {
                    console.log("Nav to book:", primary.id);
                    onAction(primary.id);
                }}
            />
        </article>
    );
}

/* ------------------------------------------------------------------ *
 *  Sub‑components                                                    *
 * ------------------------------------------------------------------ */

function TitleSection({ task }: { task: AssignedTask }) {
    return (
        <>
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
                Assigned by <strong>{task.assignedBy}</strong> — Due:{" "}
                {task.dueDate}
            </p>
        </>
    );
}

function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

function ResourceLink({ resource }: { resource: LearningResource }) {
    return (
        <p className="text-sm mb-2">
            Resource:&nbsp;
            {resource.link ? (
                <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    {resource.title}
                </a>
            ) : (
                resource.title
            )}
        </p>
    );
}

function NeedsReviewBadge() {
    return (
        <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mb-2">
            Needs Review
        </span>
    );
}

function ActionButton({
    needsReview,
    onClick,
}: {
    needsReview: boolean;
    onClick: () => void;
}) {
    return (
        <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition"
            onClick={onClick}
        >
            {needsReview ? "Review Now" : "Study Now"}
        </button>
    );
}
