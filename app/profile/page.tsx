"use client";

import { useState } from "react";
import LearnerProfile, {
    type Learner,
} from "@/app/components/overview/components/LearnerProfile";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
    /* ----------------------------------------------------------------
     *  Local learner state (replace with real data or global store)
     * ---------------------------------------------------------------- */
    const [profile, setProfile] = useState<Learner>({
        name: "Student #1247",
        age: 15,
        gender: "female",
        grade: "10th",
        interests: "Physics • Coding • Music",
    });

    /* ----------------------------------------------------------------
     *  Layout
     * ---------------------------------------------------------------- */
    return (
        <main className="px-6 py-10 mx-auto max-w-5xl space-y-10">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Edit Profile
                </h1>
                <Button asChild variant="outline">
                    <Link href="/">Back</Link>
                </Button>
            </header>

            <LearnerProfile
                learner={profile}
                onSaveAction={setProfile}
                editable
            />
        </main>
    );
}
