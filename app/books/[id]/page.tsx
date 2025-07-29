"use client";

import { useParams, useRouter } from "next/navigation";
import {
    mockAssignedTasks,
    AssignedTask,
    LearningResource,
} from "@/app/components/assignedTopics/data/mockAssignedTasks";

import Header from "./components/Header";
import ChapterOutline from "./components/ChapterOutline";
import Practice from "./components/Practice";

/* ─── Inline helper ─── */
const findResource = (
    bookId: string,
): { task: AssignedTask; resource: LearningResource } | null => {
    return (
        mockAssignedTasks
            .flatMap((task) =>
                task.resources.map((res) => ({ task, resource: res })),
            )
            .find(({ resource }) => resource.id === bookId) ?? null
    );
};

export default function BookPage() {
    const { id } = useParams();
    const router = useRouter();

    const data = findResource(id as string);

    if (!data) {
        return <div className="p-6 text-red-600">Book not found.</div>;
    }

    const { task, resource } = data;

    return (
        <main>
            <Header task={task} resource={resource} backAction={router.back} />

            <section className="max-w-6xl mx-auto px-6 py-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ChapterOutline
                        bookId={resource.id}
                        chapters={resource.chapters}
                    />
                    <Practice />
                </div>
            </section>
        </main>
    );
}
