import { User } from "lucide-react";

export default function StudentBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
      <User className="h-4 w-4 text-gray-500" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
