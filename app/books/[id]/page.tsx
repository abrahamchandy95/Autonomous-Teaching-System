"use client";

import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    PlayCircle,
    StickyNote,
    CheckCircle,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    mockAssignedTasks,
    AssignedTask,
    LearningResource,
} from "@/app/components/assignedTopics/data/mockAssignedTasks";
import Image from "next/image";

function findResource(bookId: string): {
    task: AssignedTask;
    resource: LearningResource;
} | null {
    for (const task of mockAssignedTasks) {
        const res = task.resources.find((r) => r.id === bookId);
        if (res) return { task, resource: res };
    }
    return null;
}

/* ------------------------------------------------------------------ *
 *  Page                                                               *
 * ------------------------------------------------------------------ */
export default function BookReviewPage() {
    const { id } = useParams(); // bookId from URL
    const router = useRouter();

    const data = findResource(id as string);
    if (!data) return <div className="p-6 text-red-600">Book not found.</div>;

    const { task, resource } = data;

    return (
        <div className="max-w-6xl mx-auto py-8 space-y-8">
            {/* ───────────── Back + Meta ───────────── */}
            <div className="flex items-start gap-6">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>

                <div className="relative aspect-[3/4] w-24 md:w-28 lg:w-32 flex-none">
                    <Image
                        src={resource.coverImageUrl ?? "/placeholder-book.png"}
                        alt={`${resource.title} cover`}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 6rem, (max-width: 1024px) 7rem, 9rem"
                        priority
                    />
                </div>

                <div className="flex-1 space-y-2">
                    <h1 className="text-2xl font-bold">{resource.title}</h1>
                    <p className="text-gray-600">
                        Assigned by <strong>{task.assignedBy}</strong> • Due 
                        {task.dueDate}
                    </p>

                    <Progress value={task.progress} />
                    <p className="text-xs text-gray-500 mt-1">
                        {task.progress}% of assignment completed
                    </p>
                </div>
            </div>

            {/* ───────────── Chapters & Practice ───────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chapters accordion */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Chapters</h2>

                    <Accordion type="multiple" className="space-y-3">
                        {resource.chapters.map((ch) => (
                            <AccordionItem
                                key={ch.id}
                                value={ch.id}
                                className="border border-gray-200 rounded-lg"
                            >
                                <AccordionTrigger className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-4 w-4" />
                                        <span>{ch.title}</span>
                                        {ch.pages && (
                                            <span className="ml-auto text-xs text-gray-500">
                                                {ch.pages}
                                            </span>
                                        )}
                                    </div>
                                </AccordionTrigger>

                                <AccordionContent className="px-4 pb-4 space-y-4">
                                    {/* Notes */}
                                    <Card>
                                        <CardHeader className="flex items-center gap-2 pb-2">
                                            <StickyNote className="h-4 w-4 text-yellow-600" />
                                            <CardTitle className="text-sm">
                                                Notes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-sm text-gray-700">
                                            {ch.summary}
                                        </CardContent>
                                    </Card>

                                    {/* Practice list */}
                                    {ch.practice?.length && (
                                        <Card>
                                            <CardHeader className="flex items-center gap-2 pb-2">
                                                <PlayCircle className="h-4 w-4 text-blue-600" />
                                                <CardTitle className="text-sm">
                                                    Practice
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                                    {ch.practice.map((p) => (
                                                        <li key={p}>{p}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Actions */}
                                    <div className="flex justify-end gap-3">
                                        <Button size="sm" variant="outline">
                                            <PlayCircle className="h-4 w-4 mr-1" />
                                            Start Quiz
                                        </Button>
                                        <Button size="sm" variant="ghost">
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                            Mark Completed
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Quick‑start quiz card */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Practice Center</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base font-medium">
                                Strengthen your understanding
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-gray-700">
                                Start a mixed quiz from all chapters or focus on
                                a specific one.
                            </p>
                            <Button className="w-full">
                                <PlayCircle className="h-4 w-4 mr-2" />
                                Start 10‑question Quiz
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
