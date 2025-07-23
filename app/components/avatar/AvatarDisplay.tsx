"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AvatarDisplayProps {
  src?: string;
  name: string;
  editable?: boolean;
  onEditAction?: () => void;
}

export default function AvatarDisplay({
  src,
  name,
  editable = false,
  onEditAction,
}: AvatarDisplayProps) {
  const avatarWrapperClass = cn(
    "relative inline-block flex-shrink-0 h-full w-full",
    editable &&
      "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full",
  );

  const AvatarContent = (
    <Avatar className="h-full w-full rounded-full border border-gray-200">
      <AvatarImage src={src} alt={name} />
    </Avatar>
  );

  return editable ? (
    <div
      role="button"
      tabIndex={0}
      aria-label="Edit avatar"
      onClick={onEditAction}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onEditAction?.();
      }}
      className={avatarWrapperClass}
    >
      {AvatarContent}

      <span
        className="
          absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center
          rounded-full bg-white shadow ring-1 ring-black/10
        "
      >
        <Pencil className="h-3 w-3 text-gray-600" aria-hidden />
      </span>
    </div>
  ) : (
    <div className={avatarWrapperClass}>{AvatarContent}</div>
  );
}
