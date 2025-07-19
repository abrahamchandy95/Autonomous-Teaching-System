import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
  IconButton,
} from "@mui/material";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Topic } from "../data/types";

interface GeneratorProps {
  topic: Topic;
}

const LessonTypes = () => (
  <div>
    <label className="text-sm font-medium">Lesson Type</label>
    <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
      <option>Interactive Tutorial</option>
      <option>Video Explanation</option>
      <option>Practice Problems</option>
      <option>Conceptual Overview</option>
    </select>
  </div>
);

const LessonDuration = () => (
  <div>
    <label className="text-sm font-medium">Duration</label>
    <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
      <option>15 minutes</option>
      <option>30 minutes</option>
      <option>45 minutes</option>
      <option>60 minutes</option>
    </select>
  </div>
);
