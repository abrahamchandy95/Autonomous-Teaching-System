import { Badge } from "@/components/ui/badge";
import { Topic } from "../data/types";
import LessonConfig from "../dialogs/LessonConfig";
import AssessmentConfig from "../dialogs/AssessmentConfig";

interface Props {
  topic: Topic;
}

export default function TopicActions({ topic }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Suggested Prerequisites</h4>
        <div className="flex flex-wrap gap-2">
          {topic.suggestedPrerequisites.map((p) => (
            <Badge key={p} variant="outline" className="text-xs">
              {p}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex space-x-3 pt-4">
        <LessonConfig topic={topic} />
        <AssessmentConfig topic={topic} />
      </div>
    </div>
  );
}
