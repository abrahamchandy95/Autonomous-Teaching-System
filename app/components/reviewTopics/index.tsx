"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LearnFromChats from "@/app/components/learnFromChats";
import LearnAssignedTasks from "@/app/components/assignedTopics";

interface Props {
    onClickAction: (bookId: string) => void;
}

export default function ReviewTopics({ onClickAction }: Props) {
    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">Topics Needing Review</h1>

            <Tabs defaultValue="learn">
                <TabsList className="mb-4">
                    <TabsTrigger value="learn">From Chats</TabsTrigger>
                    <TabsTrigger value="assigned">
                        Assigned Learning
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="learn">
                    <LearnFromChats />
                </TabsContent>

                <TabsContent value="assigned">
                    <LearnAssignedTasks onBookClick={onClickAction} />
                </TabsContent>
            </Tabs>
        </section>
    );
}
