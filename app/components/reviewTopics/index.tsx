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

            <Tabs defaultValue="assigned">
                <TabsList className="mb-4">
                    <TabsTrigger value="assigned">
                        Learn your Assigned Topics
                    </TabsTrigger>
                    <TabsTrigger value="chats">
                        Explore identified Interests
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="chats">
                    <LearnFromChats />
                </TabsContent>

                <TabsContent value="assigned">
                    <LearnAssignedTasks onBookClick={onClickAction} />
                </TabsContent>
            </Tabs>
        </section>
    );
}
