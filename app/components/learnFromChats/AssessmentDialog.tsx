import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Topic } from "./data/types";

export default function AssessmentDialog({ topic }: { topic: Topic }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FileText className="h-4 w-4 mr-2" />
          Generate Assessment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Assessment: {topic.name}</DialogTitle>
          <DialogDescription>
            Create a targeted assessment to evaluate understanding.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Assessment Type</label>
            <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
              <option>Multiple Choice Quiz</option>
              <option>Short Answer Questions</option>
              <option>Fill in the Blank</option>
              <option>Mixed Format</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Number of Questions</label>
            <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
              <option>5 questions</option>
              <option>10 questions</option>
              <option>15 questions</option>
              <option>20 questions</option>
            </select>
          </div>
          <Button className="w-full">Generate Assessment</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
