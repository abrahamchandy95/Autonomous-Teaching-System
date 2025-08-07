"use client";

import { useParams, useRouter } from "next/navigation";
import { mockTopics } from "@/app/components/learnFromChats/data/mockTopics";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
    ArrowLeft,
    Play,
    CheckCircle2,
    BookOpen,
    Trophy,
    FileText,
} from "lucide-react";
import React from "react";

interface Topic {
    id: string;
    name: string;
    description?: string;
    progress?: number;
    masteryLevel?: string; // "Novice" | "Intermediate" | "Advanced"
    questionsAnswered?: number;
    questionsCorrect?: number;
    lastReviewed?: string;
    badge?: string;
    resources?: { title: string; url: string; type?: string }[];
    prerequisites?: { title: string; completed: boolean }[];
    lessons?: { id: string; title: string; duration: string }[];
}

const StatsGrid: React.FC<{ topic: Topic }> = ({ topic }) => {
    const {
        progress = 0,
        questionsAnswered = 0,
        questionsCorrect = 0,
        badge,
    } = topic;

    const accuracy =
        questionsAnswered > 0
            ? Math.round((questionsCorrect / questionsAnswered) * 100)
            : 0;

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Completion
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">
                            {progress}%
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {progress < 100 ? "Keep going!" : "Mastered"}
                        </span>
                    </div>
                    <Progress value={progress} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">
                        Accuracy
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">
                    {accuracy}%
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">
                        Answered
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">
                    {questionsAnswered}
                </CardContent>
            </Card>

            {badge && (
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5" /> Achievement
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Badge variant="outline">{badge}</Badge>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

const ActionButtons: React.FC<{ topic: Topic }> = ({ topic }) => {
    const router = useRouter();
    const startLesson = () => {
        router.push(`/topic/${topic.id}/lesson`);
    };

    const practiceQuiz = () => {
        router.push(`/topic/${topic.id}/quiz`);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={startLesson} className="gap-2">
                <Play className="h-4 w-4" /> Start Lesson
            </Button>
            <Button
                onClick={practiceQuiz}
                variant="secondary"
                className="gap-2"
            >
                <FileText className="h-4 w-4" /> Practice Quiz
            </Button>
        </div>
    );
};

const ResourceList: React.FC<{ resources?: Topic["resources"] }> = ({
    resources,
}) => {
    if (!resources || resources.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {resources.map((r) => (
                        <li
                            key={r.url}
                            className="flex items-center justify-between"
                        >
                            <span className="flex items-center gap-2">
                                {r.type === "video" ? (
                                    <Play className="h-4 w-4" />
                                ) : (
                                    <BookOpen className="h-4 w-4" />
                                )}
                                <a
                                    href={r.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    {r.title}
                                </a>
                            </span>
                            {r.type && (
                                <Badge variant="secondary">{r.type}</Badge>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

const Prerequisites: React.FC<{ prerequisites?: Topic["prerequisites"] }> = ({
    prerequisites,
}) => {
    if (!prerequisites || prerequisites.length === 0) return null;

    const incomplete = prerequisites.filter((p) => !p.completed);

    return (
        <Alert variant={incomplete.length ? "destructive" : "default"}>
            <AlertTitle className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {incomplete.length
                    ? "Incomplete prerequisites"
                    : "All prerequisites completed"}
            </AlertTitle>
            <AlertDescription>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    {prerequisites.map((p) => (
                        <li
                            key={p.title}
                            className={
                                p.completed
                                    ? "line-through text-muted-foreground"
                                    : ""
                            }
                        >
                            {p.title}
                        </li>
                    ))}
                </ul>
            </AlertDescription>
        </Alert>
    );
};

export default function TopicDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params as { id: string };

    const topic = (mockTopics as Topic[]).find((t) => t.id === id);

    if (!topic) {
        return <div className="p-6">Topic not found</div>;
    }

    const handleBack = () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
            <Button
                variant="ghost"
                onClick={handleBack}
                className="flex items-center gap-2"
            >
                <ArrowLeft className="h-4 w-4" /> Back
            </Button>

            <header className="space-y-2">
                <h1 className="text-3xl font-bold">{topic.name}</h1>
                {topic.description && (
                    <p className="text-muted-foreground">{topic.description}</p>
                )}
            </header>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="lessons">Lessons</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                <Separator className="my-4" />
                <TabsContent value="overview" className="space-y-6">
                    <StatsGrid topic={topic} />
                    <ActionButtons topic={topic} />
                    <Prerequisites prerequisites={topic.prerequisites} />
                </TabsContent>
                <TabsContent value="lessons">
                    {topic.lessons && topic.lessons.length ? (
                        <Card>
                            <CardHeader>
                                <CardTitle>Lessons</CardTitle>
                            </CardHeader>
                            <CardContent className="divide-y">
                                {topic.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="py-2 flex justify-between"
                                    >
                                        <span>{lesson.title}</span>
                                        <Badge variant="secondary">
                                            {lesson.duration}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ) : (
                        <p>No lessons available.</p>
                    )}
                </TabsContent>
                <TabsContent value="resources">
                    <ResourceList resources={topic.resources} />
                </TabsContent>
                <TabsContent value="notes">
                    <p className="text-muted-foreground">
                        Notes feature coming soon.
                    </p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
