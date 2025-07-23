"use client";
import { MessageSquare, Brain, Share2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AvatarSelector from "./avatar/AvatarSelector";

/* ------------------------------------------------------------- *
 *  Types & Nav Metadata                                         *
 * ------------------------------------------------------------- */

export type View =
  | "overview"
  | "learn-from-chats"
  | "reinforced-tutor"
  | "learner-networks";

interface SidebarProps {
  active: View;
  setActiveAction: (view: View) => void;
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
    desc: "AI‑powered tutoring",
  },
  {
    id: "learner-networks",
    label: "Learner Networks",
    icon: Share2,
    desc: "Knowledge‑graph clusters",
  },
];

/* ------------------------------------------------------------- *
 *  Component                                                    *
 * ------------------------------------------------------------- */

export default function Sidebar({ active, setActiveAction }: SidebarProps) {
  const sidebarWidth = "clamp(14rem, 18vw, 20rem)";

  return (
    <aside
      className="
        flex flex-col flex-none overflow-y-auto border-r border-gray-200 bg-white 
        h-dvh
      "
      style={{ width: sidebarWidth }}
    >
      {/* Avatar header grows with width, not with viewport height */}
      <header className="p-6 border-b border-gray-200">
        <div className="w-full aspect-square flex items-center justify-center">
          {/* AvatarSelector could also accept a size prop if you expose one */}
          <AvatarSelector name="Student Name" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {MENU.map(({ id, label, icon: Icon, desc }) => (
          <Button
            key={id}
            onClick={() => setActiveAction(id)}
            variant={active === id ? "default" : "ghost"}
            className={cn(
              "w-full justify-start h-auto p-3 text-left",
              active === id && "border-blue-200 bg-blue-50 text-blue-700",
            )}
          >
            <Icon className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden />
            <span className="flex flex-col items-start">
              <span className="font-medium leading-none">{label}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
