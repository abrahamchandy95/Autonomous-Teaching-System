"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import AvatarSelector from "../../avatar/AvatarSelector";

/* ------------------------------------------------------------------ *
 *  Types                                                              *
 * ------------------------------------------------------------------ */

export interface Learner {
    name: string;
    age: number;
    gender: "male" | "female" | "other";
    grade: string;
    interests: string;
}

interface LearnerProfileProps {
    learner: Learner;
    onSaveAction: (next: Learner) => void;
    editable?: boolean; // default true
}

/* ------------------------------------------------------------------ *
 *  Component                                                          *
 * ------------------------------------------------------------------ */

export default function LearnerProfile({
    learner,
    onSaveAction,
    editable = true,
}: LearnerProfileProps) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState<Learner>(learner);

    const update =
        <K extends keyof Learner>(key: K) =>
        (value: Learner[K]) =>
            setDraft((d) => ({ ...d, [key]: value }));

    return (
        <div className="p-8 border border-gray-200 rounded-xl w-full max-w-6xl mx-auto space-y-10 shadow-sm">
            <header className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Learner Profile</h2>
                {editable && !editing && (
                    <Button size="sm" onClick={() => setEditing(true)}>
                        Edit
                    </Button>
                )}
            </header>

            {/* ---------------- Body ---------------- */}
            <section className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
                {/* Demographic fields */}
                <div className="space-y-4">
                    <NameRow
                        editing={editing}
                        learner={learner}
                        draft={draft}
                        update={update}
                    />
                    <AgeGenderRow
                        editing={editing}
                        learner={learner}
                        draft={draft}
                        update={update}
                    />
                    <GradeRow
                        editing={editing}
                        learner={learner}
                        draft={draft}
                        update={update}
                    />
                    <InterestsRow
                        editing={editing}
                        learner={learner}
                        draft={draft}
                        update={update}
                    />
                </div>

                {/* Big avatar (global hook handles index) */}
                <AvatarSelector
                    name={learner.name}
                    editable={editing && editable}
                    className="h-64 w-64"
                />
            </section>

            {/* ---------------- Footer ---------------- */}
            {editing && editable && (
                <footer className="flex justify-end space-x-2">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setDraft(learner); // revert changes
                            setEditing(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            onSaveAction(draft);
                            setEditing(false);
                        }}
                    >
                        Save
                    </Button>
                </footer>
            )}
        </div>
    );
}

/* ================================================================== *
 *  Field helpers                                                     *
 * ================================================================== */

type FieldProps = {
    editing: boolean;
    learner: Learner;
    draft: Learner;
    update: <K extends keyof Learner>(k: K) => (v: Learner[K]) => void;
};

/* ---- Name ---- */
const NameRow = ({ editing, learner, draft, update }: FieldProps) =>
    editing ? (
        <Input
            value={draft.name}
            onChange={(e) => update("name")(e.target.value)}
            placeholder="Name"
        />
    ) : (
        <ReadOnly label="Name" value={learner.name} />
    );

/* ---- Age + Gender ---- */
const AgeGenderRow = ({ editing, learner, draft, update }: FieldProps) => (
    <div className="grid grid-cols-2 gap-4">
        {editing ? (
            <>
                <Input
                    type="number"
                    value={draft.age}
                    onChange={(e) => update("age")(Number(e.target.value))}
                    placeholder="Age"
                />
                <Select
                    value={draft.gender}
                    onValueChange={(v) =>
                        update("gender")(v as Learner["gender"])
                    }
                >
                    <SelectTrigger />
                    <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </>
        ) : (
            <>
                <ReadOnly label="Age" value={learner.age} />
                <ReadOnly label="Gender" value={learner.gender} />
            </>
        )}
    </div>
);

/* ---- Grade ---- */
const GradeRow = ({ editing, learner, draft, update }: FieldProps) =>
    editing ? (
        <Input
            value={draft.grade}
            onChange={(e) => update("grade")(e.target.value)}
            placeholder="Grade"
        />
    ) : (
        <ReadOnly label="Grade" value={learner.grade} />
    );

/* ---- Interests ---- */
const InterestsRow = ({ editing, learner, draft, update }: FieldProps) =>
    editing ? (
        <Textarea
            value={draft.interests}
            onChange={(e) => update("interests")(e.target.value)}
            rows={3}
            placeholder="Learning interests"
        />
    ) : (
        <ReadOnly label="Interests" value={learner.interests} />
    );

/* ---- Shared read‑only row ---- */
const ReadOnly = ({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) => (
    <div className="text-sm">
        <span className="font-medium text-gray-600">{label}: </span>
        <span className="text-gray-900">{value}</span>
    </div>
);
