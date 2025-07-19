import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Topic } from "../data/types";
import DifficultyBadge from "../components/DifficultyBadge";
import TopicMetrics from "../components/TopicMetrics";
import TopicActions from "../components/TopicActions";

interface TopicProps {
  topic: Topic;
  open: boolean;
  onToggle: () => void;
}

interface EngagementProps {
  topic: Topic;
  open: boolean;
}

interface ConfidenceProps {
  confidence: number;
}

export default function TopicProgress({ topic, open, onToggle }: TopicProps) {
  return (
    <Card className="overflow-hidden">
      <ExpandableHeader topic={topic} open={open} onToggle={onToggle} />
      {open && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t bg-gray-50 p-6">
          <TopicMetrics topic={topic} />
          <TopicActions topic={topic} />
        </div>
      )}
    </Card>
  );
}

/* ───────────────────────────────────────── header block ───────────────────────────────────────── */
const ExpandableHeader = ({ topic, open, onToggle }: TopicProps) => (
  <CardHeader
    onClick={onToggle}
    className="cursor-pointer hover:bg-gray-50 transition-colors"
  >
    <div className="flex items-center justify-between">
      <TopicEngagement topic={topic} open={open} />
      <div className="flex items-center space-x-3">
        <DifficultyBadge difficulty={topic.difficulty} />
        <ConfidenceBadge confidence={topic.confidence} />
      </div>
    </div>
  </CardHeader>
);

/* ───────────────────────────────────────── engagement (title + mention count) ───────────────────────────────────────── */
const TopicEngagement = ({ topic, open }: EngagementProps) => (
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
);

/* ───────────────────────────────────────── confidence badge ───────────────────────────────────────── */
const ConfidenceBadge = ({ confidence }: ConfidenceProps) => {
  const color =
    confidence >= 70
      ? "text-green-600"
      : confidence >= 50
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="text-right">
      <div className={`text-lg font-semibold ${color}`}>{confidence}%</div>
      <div className="text-xs text-gray-500">confidence</div>
    </div>
  );
};
