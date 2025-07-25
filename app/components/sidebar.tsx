"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, MessageSquare, Brain, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Learner } from "./shared/LearnerProfile";

/* ---------------------------------------------------------------- *
 *  Route IDs                                                       *
 * ---------------------------------------------------------------- */

export type View =
    | "overview"
    | "learn-from-chats"
    | "reinforced-tutor"
    | "learner-networks";

/* ---------------------------------------------------------------- *
 *  Sidebar props                                                   *
 * ---------------------------------------------------------------- */

interface SidebarProps {
    currentView: View;
    changeViewAction: (view: View) => void;
    profile: Learner;
    saveProfileAction: (next: Learner) => void;
}

/* ---------------------------------------------------------------- *
 *  Navigation menu metadata                                        *
 * ---------------------------------------------------------------- */

const MENU = [
    {
        id: "overview",
        label: "Overview",
        icon: Home,
        desc: "Dashboard overview",
    },
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
] as const;

/* ---------------------------------------------------------------- *
 *  Main component                                                  *
 * ---------------------------------------------------------------- */

export default function Sidebar({
    currentView,
    changeViewAction,
    profile,
}: SidebarProps) {
    const sidebarWidth = "clamp(14rem, 18vw, 20rem)";

    return (
        <aside
            className="flex flex-col flex-none h-dvh bg-white border-r border-gray-200 overflow-y-auto"
            style={{ width: sidebarWidth }}
        >
            <LogoHeader />

            <Navigation currentView={currentView} onChange={changeViewAction} />

            <FooterLink username={profile.name} />
        </aside>
    );
}

/* ================================================================= *
 *  Helpers                                                          *
 * =================================================================*/

/* ---------- 1. Top logo banner ----------------------------------- */
function LogoHeader() {
    return (
        <header className="p-6 border-b border-gray-200">
            <div className="relative w-full aspect-[4/1]">
                <Image
                    src="/airs.png"
                    alt="AIRS logo"
                    fill
                    priority
                    className="object-contain"
                    sizes="100vw"
                />
            </div>
        </header>
    );
}
/* ---------- 2. Navigation list ----------------------------------- */
function Navigation({
    currentView,
    onChange,
}: {
    currentView: View;
    onChange: (v: View) => void;
}) {
    return (
        <nav className="flex-1 p-4 space-y-2">
            {MENU.map(({ id, label, icon: Icon, desc }) => (
                <Button
                    key={id}
                    onClick={() => onChange(id)}
                    variant={currentView === id ? "default" : "ghost"}
                    className={cn(
                        "w-full justify-start h-auto p-3 text-left",
                        currentView === id &&
                            "border-blue-200 bg-blue-50 text-blue-700",
                    )}
                >
                    <Icon className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden />
                    <span className="flex flex-col items-start">
                        <span className="font-medium leading-none">
                            {label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {desc}
                        </span>
                    </span>
                </Button>
            ))}
        </nav>
    );
}

/* ---------- 3. Footer link to /profile --------------------------- */
function FooterLink({ username }: { username: string }) {
    return (
        <Button
            asChild
            variant="ghost"
            className="w-full justify-start p-4 border-t border-gray-200"
        >
            <Link href="/profile">
                <User className="h-4 w-4 mr-2" aria-hidden />
                {username}
            </Link>
        </Button>
    );
}
