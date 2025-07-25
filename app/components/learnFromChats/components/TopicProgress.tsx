import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Topic } from "../data/types";
import DifficultyBadge from "../components/DifficultyBadge";

interface TopicProps {
    topic: Topic;
}

interface ConfidenceProps {
    confidence: number;
}

export default function TopicProgress({ topic }: TopicProps) {
    return (
        <Card className="overflow-hidden hover:bg-gray-50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                <div>
                    <CardTitle className="text-lg">{topic.name}</CardTitle>
                    <CardDescription>
                        Mentioned in {topic.conversationCount} conversations
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-3">
                    <DifficultyBadge difficulty={topic.difficulty} />
                    <ConfidenceBadge confidence={topic.confidence} />
                </div>
            </CardHeader>
        </Card>
    );
}

/* ───────────────────────────── confidence badge ───────────────────────────── */
const ConfidenceBadge = ({ confidence }: ConfidenceProps) => {
    const color =
        confidence >= 70
            ? "text-green-600"
            : confidence >= 50
              ? "text-yellow-600"
              : "text-red-600";

    return (
        <div className="text-right">
            <div className={`text-lg font-semibold ${color}`}>
                {confidence}%
            </div>
            <div className="text-xs text-gray-500">confidence</div>
        </div>
    );
};
