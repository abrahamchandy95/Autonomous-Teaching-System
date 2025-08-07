export interface BaseTopic {
    id: string;
    name: string;
    difficulty: "Easy" | "Medium" | "Hard";
}

export interface TopicProgress extends BaseTopic {
    confidence: number;
    conversationCount: number;
    attempts: number;
    passes: number;
    lessonsViewed: number;
    suggestedPrerequisites: string[];
    achievements: string[];

    description?: string;
    progress: number;
    masteryLevel?: "Novice" | "Intermediate" | "Advanced";
    questionsAnswered?: number;
    questionsCorrect?: number;
    lastReviewed?: string;
    badge?: string;

    prerequisites?: { title: string; completed: boolean }[];

    resources?: {
        title: string;
        url: string;
        type?: "video" | "article" | "pdf";
    }[];

    lessons?: { id: string; title: string; duration: string }[];
}
