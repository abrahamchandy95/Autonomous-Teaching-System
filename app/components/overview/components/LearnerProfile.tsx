"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export interface Learner {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  grade: string;
  interests: string;
}

interface ProfileProps {
  learner: Learner;
  onSaveAction: (next: Learner) => void;
}

type FieldProps = {
  editing: boolean;
  learner: Learner;
  draft: Learner;
  update: <K extends keyof Learner>(k: K) => (v: Learner[K]) => void;
};

export default function LearnerProfile({
  learner,
  onSaveAction,
}: ProfileProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Learner>(learner);
  const update =
    <K extends keyof Learner>(key: K) =>
    (value: Learner[K]) =>
      setDraft((d) => ({ ...d, [key]: value }));
  return (
    <Card>
      <ProfileHeader editing={editing} onEdit={() => setEditing(true)} />

      <CardContent className="space-y-4">
        <NameField
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

        <GradeField
          editing={editing}
          learner={learner}
          draft={draft}
          update={update}
        />

        <InterestsField
          editing={editing}
          learner={learner}
          draft={draft}
          update={update}
        />
      </CardContent>

      {editing && (
        <EditFooter
          onCancel={() => {
            setDraft(learner);
            setEditing(false);
          }}
          onSave={() => {
            onSaveAction(draft);
            setEditing(false);
          }}
        />
      )}
    </Card>
  );
}

const ProfileHeader = ({
  editing,
  onEdit,
}: {
  editing: boolean;
  onEdit: () => void;
}) => (
  <CardHeader className="pb-2 flex items-center">
    <CardTitle className="text-sm font -medium">Learner Profile</CardTitle>
    {!editing && (
      <Button size="sm" className="ml-auto" onClick={onEdit}>
        Edit
      </Button>
    )}
  </CardHeader>
);

const NameField = ({ editing, learner, draft, update }: FieldProps) =>
  editing ? (
    <Input
      value={draft.name}
      onChange={(e) => update("name")(e.target.value)}
      placeholder="Name"
    />
  ) : (
    <ReadOnlyRow label="Name" value={learner.name} />
  );

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
          onValueChange={(v) => update("gender")(v as Learner["gender"])}
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
        <ReadOnlyRow label="Age" value={learner.age} />
        <ReadOnlyRow label="Gender" value={learner.gender} />
      </>
    )}
  </div>
);

const GradeField = ({ editing, learner, draft, update }: FieldProps) =>
  editing ? (
    <Input
      value={draft.grade}
      onChange={(e) => update("grade")(e.target.value)}
      placeholder="Grade"
    />
  ) : (
    <ReadOnlyRow label="Grade" value={learner.grade} />
  );

/* ---------- Interests ---------- */
const InterestsField = ({ editing, learner, draft, update }: FieldProps) =>
  editing ? (
    <Textarea
      value={draft.interests}
      onChange={(e) => update("interests")(e.target.value)}
      rows={2}
      placeholder="Learning interests"
    />
  ) : (
    <ReadOnlyRow label="Interests" value={learner.interests} />
  );

/* ---------- Footer (Save / Cancel) ---------- */
const EditFooter = ({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) => (
  <CardFooter className="justify-end space-x-2">
    <Button variant="ghost" onClick={onCancel}>
      Cancel
    </Button>
    <Button onClick={onSave}>Save</Button>
  </CardFooter>
);

/* ---------- Shared helpers ---------- */
const ReadOnlyRow = ({
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
