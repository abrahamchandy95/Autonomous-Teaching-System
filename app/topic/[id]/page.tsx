"use client";

import { useParams } from "next/navigation";
import { mockTopics } from "@/app/components/learnFromChats/data/mockTopics";
import TopicMetrics from "@/app/components/learnFromChats/components/TopicMetrics";
import TopicActions from "@/app/components/learnFromChats/components/TopicActions";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopicDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;
    const topic = mockTopics.find((t) => t.id === id);

    if (!topic) return <div className="p-6">Topic not found</div>;

    const handleBack = () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-8 space-y-8">
            <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-4"
            >
                <ArrowLeft className="h-5 w-5" />
                Back
            </button>
            <h1 className="text-2xl font-bold">{topic.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicMetrics topic={topic} />
                <TopicActions topic={topic} />
            </div>
        </div>
    );
}
