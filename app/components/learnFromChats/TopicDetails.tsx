import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Topic } from "./data/types";
import LessonDialog from "./LessonDialog";
import AssessmentDialog from "./AssessmentDialog";
import AchievementBadge from "./AchievementBadge";

export default function TopicDetails({ topic }: { topic: Topic }) {
  return (
    <CardContent className="border-t bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ─── Progress column ─── */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Your Progress</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Times discussed:</span>
                <span className="font-medium">{topic.conversationCount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Assessments:</span>
                <span className="font-medium">
                  {topic.passes} / {topic.attempts} passes
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Lessons viewed:</span>
                <span className="font-medium">{topic.lessonsViewed}</span>
              </div>

              <div>
                <span className="text-sm">Confidence:</span>
                <Progress value={topic.confidence} className="mt-1" />
              </div>
            </div>
          </div>

          {topic.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {topic.achievements.map((id) => (
                  <AchievementBadge key={id} id={id} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ─── Prereqs + actions ─── */}
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
            <LessonDialog topic={topic} />
            <AssessmentDialog topic={topic} />
          </div>
        </div>
      </div>
    </CardContent>
  );
}
