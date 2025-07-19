import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Topic } from "../data/types";
import DifficultyBadge from "./DifficultyBadge";
import TopicDetails from "./TopicDetails";
import { X509Certificate } from "crypto";

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

export default function TopicProcess({ topic, open, onToggle }: TopicProps) {
  return (
    <Card className="overflow-hidden">
      <ExpandableHeader topic={topic} open={open} onToggle={onToggle} />
      {open && <TopicDetails topic={topic} />}
    </Card>
  );
}

const ExpandableHeader = ({ topic, open, onToggle }: TopicProps) => {
  return (
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
};

const TopicEngagement = ({ topic, open }: EngagementProps) => {
  return (
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
};

const ConfidenceBadge = ({ confidence }: ConfidenceProps) => {
  let color = "";

  switch (true) {
    case confidence >= 70:
      color = "text-green-600";
      break;
    case confidence >= 50:
      color = "text-yellow-600";
      break;
    default:
      color = "text-red-600";
      break;
  }
  return (
    <div className="text-right">
      <div className={`text-lg font-semibold ${color}`}>{confidence}%</div>
      <div className="text-xs text-gray-500">confidence</div>
    </div>
  );
};
