import React from "react";
import type { AssignedTask, LearningResource } from "../data/mockAssignedTasks";

interface Props {
    task: AssignedTask & { needsReview: boolean };
    onAction: (bookId: string) => void;
    height?: string;
}

export default function AssignedTaskCard({
    task,
    onAction,
    height = "min-h-76",
}: Props) {
    const primary = task.resources[0];

    return (
        <article
            className={`${height} border rounded p-4 hover:shadow-lg transition mb-4 border-gray-300 flex flex-col justify-between`}
        >
            <div className="flex flex-col gap-2">
                <TitleSection task={task} />
                <ProgressBar progress={task.progress} />
                {primary && <ResourceLink resource={primary} />}
            </div>
            {task.needsReview && (
                <div className="flex items-center gap-4 mt-2">
                    <NeedsReviewBadge />
                    <ReviewButton onClick={() => onAction(primary.id)} />
                </div>
            )}
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
        <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
            Needs Review
        </span>
    );
}

function ReviewButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300 transition"
            onClick={onClick}
        >
            Review now
        </button>
    );
}
