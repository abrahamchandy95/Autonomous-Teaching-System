"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LearnFromChats from "@/app/components/learnFromChats";
import LearnAssignedTasks from "@/app/components/assignedTopics";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface Props {
    clickAction: (bookId: string) => void;
}

interface ReviewTabConfig {
    value: string;
    label: string;
    render: () => React.ReactElement;
}

const ReviewTabBar = ({
    tabs,
    height,
}: {
    tabs: ReviewTabConfig[];
    height: string;
}) => {
    return (
        <TabsList className="mb-4">
            {tabs.map(({ value, label }) => (
                <TabsTrigger key={value} value={value} className={height}>
                    {label}
                </TabsTrigger>
            ))}
        </TabsList>
    );
};

const ReviewTabPanels = ({ tabs }: { tabs: ReviewTabConfig[] }) => {
    return tabs.map(({ value, render }) => (
        <TabsContent key={value} value={value}>
            {render()}
        </TabsContent>
    ));
};

export default function ReviewTopics({ clickAction }: Props) {
    const height = "h-12";

    const tabs: ReviewTabConfig[] = [
        {
            value: "assigned",
            label: "Learn your Assigned Topics",
            render: () => <LearnAssignedTasks onReviewClick={clickAction} />,
        },
        {
            value: "chats",
            label: "Explore identified Interests",
            render: () => <LearnFromChats />,
        },
    ];
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("rtab") ?? tabs[0].value;
    const handleTabChange = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set("rtab", value);
            router.replace(`?${params.toString()}`, { scroll: false });
        },
        [router, searchParams],
    );

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">Review Topics</h1>

            <Tabs value={activeTab} onValueChange={handleTabChange}>
                <ReviewTabBar tabs={tabs} height={height} />
                <ReviewTabPanels tabs={tabs} />
            </Tabs>
        </section>
    );
}
