import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Topic } from "./data/types";

export default function LessonDialog({ topic }: { topic: Topic }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex-1">
          <BookOpen className="h-4 w-4 mr-2" />
          Generate Lesson
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Lesson: {topic.name}</DialogTitle>
          <DialogDescription>
            Create a personalized lesson plan based on the conversation
            analysis.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Lesson Type</label>
            <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
              <option>Interactive Tutorial</option>
              <option>Video Explanation</option>
              <option>Practice Problems</option>
              <option>Conceptual Overview</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Duration</label>
            <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
            </select>
          </div>
          <Button className="w-full">Generate Lesson Plan</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
