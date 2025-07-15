import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Topic } from "./data/types";
import DifficultyBadge from "./DifficultyBadge";
import TopicDetails from "./TopicDetails";

interface Props {
  topic: Topic;
  open: boolean;
  onToggle: () => void;
}

export default function TopicCard({ topic, open, onToggle }: Props) {
  const confidenceColor =
    topic.confidence >= 70
      ? "text-green-600"
      : topic.confidence >= 50
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <Card className="overflow-hidden">
      <CardHeader
        onClick={onToggle}
        className="cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {open ? (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            )}
            <div>
              <CardTitle className="text-lg">{topic.name}</CardTitle>
              <CardDescription>
                Mentioned in {topic.conversationCount} conversations
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <DifficultyBadge difficulty={topic.difficulty} />
            <div className="text-right">
              <div className={`text-lg font-semibold ${confidenceColor}`}>
                {topic.confidence}%
              </div>
              <div className="text-xs text-gray-500">confidence</div>
            </div>
          </div>
        </div>
      </CardHeader>

      {open && <TopicDetails topic={topic} />}
    </Card>
  );
}
