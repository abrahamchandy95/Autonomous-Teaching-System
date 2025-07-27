import { MessageCircle, GraduationCap, Share2 } from "lucide-react";

import { mockTopics as lfTopics } from "@/app/components/learnFromChats/data/mockTopics";
import { mockAssignedTasks } from "@/app/components/assignedTopics/data/mockAssignedTasks";
import { mockTopics as rtTopics } from "@/app/components/reinforcedTutor/data/mockTopics";

/* ────────────── helper counts ────────────── */

/** Chats review: confidence below threshold */
const lfReview = lfTopics.filter((t) => t.confidence < 70).length;

/** Assigned‑learning review:  chatConfidence below threshold OR not 100 % done */
const alReview = mockAssignedTasks.filter(
    (t) => (t.chatConfidence ?? 0) < 70 || t.progress < 100,
).length;

/** Reinforced‑tutor questions completed */
const questionsCompleted = rtTopics.reduce(
    (sum, t) => sum + t.questionsCompleted,
    0,
);

/* ────────────── KPI config ────────────── */

export const KPI_CONFIG = [
    {
        /* ← NEW unified review card */
        id: "review-topics",
        title: "Topics Needing Review",
        count: lfReview + alReview,
        color: "text-blue-600",
        icon: MessageCircle,
        desc: `${lfReview} from chats • ${alReview} assigned`,
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
