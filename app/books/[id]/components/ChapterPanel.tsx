"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Lightbulb, FileCheck2, PenLine } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ResourceChapter } from "@/app/components/assignedTopics/data/mockAssignedTasks";

interface BodyProps {
    bookId: string;
    chapter: ResourceChapter;
}

/* ───────── HEADER ROW ───────── */
const Header = ({ chapter }: { chapter: ResourceChapter }) => (
    <div className="flex items-center gap-3">
        <BookOpen className="h-4 w-4" />
        <span>{chapter.title}</span>
        {chapter.pages && (
            <span className="ml-auto text-xs text-gray-500">
                {chapter.pages}
            </span>
        )}
    </div>
);

/* ───────── BODY / LINKS ROW ───────── */
const Body = ({ bookId, chapter }: BodyProps) => {
    const router = useRouter();
    const base = `/books/${bookId}/chapters/${chapter.id}`;

    const tiles: {
        label: string;
        icon: React.ReactNode;
        href: string;
        blurb: string;
    }[] = [
        {
            label: "Concept",
            icon: <Lightbulb className="h-5 w-5 text-emerald-600" />,
            href: `${base}/concept`,
            blurb: "Key idea & explanation",
        },
        {
            label: "Solved Example",
            icon: <FileCheck2 className="h-5 w-5 text-blue-600" />,
            href: `${base}/example`,
            blurb: "Step‑by‑step solution",
        },
        {
            label: "Practice",
            icon: <PenLine className="h-5 w-5 text-yellow-600" />,
            href: `${base}/practice`,
            blurb: "Try it yourself",
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {tiles.map(({ label, icon, href, blurb }) => (
                <Card key={label} className="flex flex-col">
                    <CardHeader className="flex items-center gap-2 pb-1">
                        {icon}
                        <CardTitle className="text-sm font-semibold">
                            {label}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between">
                        <p className="text-sm text-gray-600 mb-3">{blurb}</p>
                        <Button
                            size="sm"
                            className="w-full mt-auto"
                            onClick={() => router.push(href)}
                        >
                            Open&nbsp;{label}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

/* ───────── EXPORT ───────── */
const ChapterPanel = { Header, Body };
export default ChapterPanel;
