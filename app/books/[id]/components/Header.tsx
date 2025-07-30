"use client";

import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type {
    AssignedTask,
    LearningResource,
} from "@/app/components/assignedTopics/data/mockAssignedTasks";

dayjs.extend(relativeTime);

const DueBadge = ({ due }: { due: string }) => {
    const days = dayjs(due).diff(dayjs(), "day");
    const palette = {
        past: "bg-red-600",
        today: "bg-yellow-500",
        future: "bg-green-600",
    } as const;

    const color =
        days < 0 ? palette.past : days === 0 ? palette.today : palette.future;

    return (
        <span
            className={`${color} text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider`}
        >
            {days < 0
                ? `${Math.abs(days)} d overdue`
                : days === 0
                  ? "due today"
                  : `due ${dayjs(due).fromNow()}`}
        </span>
    );
};

const MetaDetails = ({ task }: { task: AssignedTask }) => (
    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
        <span>
            Assigned by <strong>{task.assignedBy}</strong>
        </span>
        <DueBadge due={task.dueDate} />
    </div>
);

const ProgressWithLabel = ({ value }: { value: number }) => (
    <div className="relative">
        <Progress value={value} className="h-2 rounded" />
        <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white"
        >
            {value}%
        </span>
    </div>
);

const ReviewProgress = ({ value }: { value: number }) => (
    <div className="mt-3 space-y-1">
        <ProgressWithLabel value={value} />
        <span className="text-xs text-gray-500">
            {value}% of review completed
        </span>
    </div>
);

const CoverImage = ({ url, title }: { url?: string; title: string }) => (
    <div className="relative aspect-[3/4] w-20 sm:w-24 md:w-28 lg:w-32 flex-none rounded-lg overflow-hidden shadow">
        <Image
            src={url ?? "/placeholder-book.png"}
            alt={`${title} cover`}
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px) 7rem, 9rem"
        />
    </div>
);

const BackButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        variant="ghost"
        onClick={onClick}
        aria-label="Go Back"
        className="absolute top-6 left-6 z-10 flex items-center gap-1 pl-4 pr-5 h-9 opacity-60 hover:opacity-100 transition"
    >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
    </Button>
);

interface Props {
    task: AssignedTask;
    resource: LearningResource;
    backAction: () => void;
}

export default function Header({ task, resource, backAction }: Props) {
    return (
        <header className="relative w-full flex items-start gap-6 px-6 py-6 bg-white shadow-sm">
            <BackButton onClick={backAction} />

            <div className="flex items-start gap-6 mt-26 sm:mt-16 lg:mt-10 pl-14 sm:pl-12 lg:pl-10">
                <CoverImage
                    url={resource.coverImageUrl}
                    title={resource.title}
                />

                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl md:text-3xl font-bold truncate">
                        {resource.title}
                    </h1>

                    <MetaDetails task={task} />
                    <ReviewProgress value={task.progress} />
                </div>
            </div>
        </header>
    );
}
