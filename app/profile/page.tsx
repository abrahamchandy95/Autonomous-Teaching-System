"use client";

import LearnerProfile, {
    type Learner,
} from "../components/shared/LearnerProfile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProfilePage() {
    const [profile, setProfile] = useState<Learner>({
        name: "Student #1247",
        age: 15,
        gender: "female",
        grade: "10th",
        interests: "Physics • Coding • Music",
    });

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
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
