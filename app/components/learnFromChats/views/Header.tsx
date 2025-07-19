"use client";

import { User } from "lucide-react";

interface HeaderProps {
  studentName: string;
}

export default function Header({ studentName }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Learn from Chats</h1>
        <p className="text-gray-600 mt-2">
          Analyze your conversations and identify knowledge gaps
        </p>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
        <User className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium">{studentName}</span>
      </div>
    </div>
  );
}
