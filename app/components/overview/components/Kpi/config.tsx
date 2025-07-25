import { MessageCircle, GraduationCap, Share2 } from "lucide-react";
import { mockTopics as lfTopics } from "@/app/components/learnFromChats/data/mockTopics";
import { mockTopics as rtTopics } from "@/app/components/reinforcedTutor/data/mockTopics";

const questionsCompleted = rtTopics.reduce(
    (sum, t) => sum + t.questionsCompleted,
    0,
);

export const KPI_CONFIG = [
    {
        id: "learn-from-chats",
        title: "Topics Needing Review",
        count: lfTopics.filter((t) => t.confidence < 70).length,
        color: "text-blue-600",
        icon: MessageCircle,
        desc: "Conversation insights",
    },
    {
        id: "reinforced-tutor",
        title: "Questions Completed",
        count: questionsCompleted,
        color: "text-green-600",
        icon: GraduationCap,
        desc: "Across all topics",
    },
    {
        id: "learner-networks",
        title: "Peers in Your Network",
        count: 12,
        color: "text-purple-600",
        icon: Share2,
        desc: "Same learning graph",
    },
] as const;
