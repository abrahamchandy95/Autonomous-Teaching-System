"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ChapterPanel from "./ChapterPanel";
import type { ResourceChapter } from "@/app/components/assignedTopics/data/mockAssignedTasks";

interface Props {
    bookId: string; // so links know which book
    chapters: ResourceChapter[];
}

export default function ChapterOutline({ bookId, chapters }: Props) {
    return (
        <section className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Chapters</h2>

            <Accordion type="multiple" className="space-y-3">
                {chapters.map((ch) => (
                    <AccordionItem
                        key={ch.id}
                        value={ch.id}
                        className="border border-gray-200 rounded-lg"
                    >
                        <AccordionTrigger className="px-4 py-3">
                            <ChapterPanel.Header chapter={ch} />
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-4">
                            <ChapterPanel.Body bookId={bookId} chapter={ch} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
