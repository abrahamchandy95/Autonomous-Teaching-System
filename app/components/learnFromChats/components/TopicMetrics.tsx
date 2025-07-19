import { Progress } from "@/components/ui/progress";
import { Topic } from "../data/types";
import Achievements from "./Achievements";

interface Props {
  topic: Topic;
}

export default function TopicMetrics({ topic }: Props) {
  return (
    <div className="space-y-4">
      {/* progress numbers */}
      <div>
        <h4 className="font-semibold mb-2">Your Progress</h4>
        <MetricRow label="Times discussed:" value={topic.conversationCount} />
        <MetricRow
          label="Assessments:"
          value={`${topic.passes} / ${topic.attempts} passes`}
        />
        <MetricRow label="Lessons viewed:" value={topic.lessonsViewed} />

        <div>
          <span className="text-sm">Confidence:</span>
          <Progress value={topic.confidence} className="mt-1" />
        </div>
      </div>

      {/* achievements */}
      {topic.achievements.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Achievements</h4>
          <Achievements ids={topic.achievements} />
        </div>
      )}
    </div>
  );
}

const MetricRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between text-sm">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
