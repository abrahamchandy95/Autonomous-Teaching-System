import { MessageSquare, Brain, Share2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type View =
  | "overview"
  | "learn-from-chats"
  | "reinforced-tutor"
  | "learner-networks";

interface sidebarProps {
  active: View;
  setActive: (v: View) => void;
}

const MENU: {
  id: View;
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  desc: string;
}[] = [
  { id: "overview", label: "Overview", icon: Home, desc: "Dashboard overview" },
  {
    id: "learn-from-chats",
    label: "Learn from Chats",
    icon: MessageSquare,
    desc: "Conversation analysis",
  },
  {
    id: "reinforced-tutor",
    label: "Reinforced Tutor",
    icon: Brain,
    desc: "AI-powered tutoring",
  },
  {
    id: "learner-networks",
    label: "Learner Networks",
    icon: Share2,
    desc: "Knowledge-graph clusters",
  },
];
export function Sidebar({ active, setActive }: sidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <header className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">ATS Dashboard</h2>
        <p className="text-sm text-gray-600">Autonomous Teaching System</p>
      </header>
      <nav className="flex-1 p-4 space-y-2">
        {MENU.map(({ id, label, icon: Icon, desc }) => (
          <Button
            key={id}
            onClick={() => setActive(id)}
            variant={active === id ? "default" : "ghost"}
            className={cn(
              "w-full justify-start h-auto p-3",
              active === id && "border-blue-200 bg-blue-50 text-blue-700",
            )}
          >
            <Icon className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden />
            <span className="flex flex-col items-start">
              <span className="font-medium">{label}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
