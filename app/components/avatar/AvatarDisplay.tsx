"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------- *
 *  Props                                                          *
 * --------------------------------------------------------------- */

export interface AvatarDisplayProps {
    src?: string;
    name: string;
    className?: string;
    editable?: boolean;
    onEditAction?: () => void;
}

/* --------------------------------------------------------------- *
 *  Component                                                      *
 * --------------------------------------------------------------- */

export default function AvatarDisplay({
    src,
    name,
    className = "",
    editable = false,
    onEditAction,
}: AvatarDisplayProps) {
    const wrapperClass = cn(
        "relative inline-block flex-shrink-0 h-full w-full",
        editable &&
            "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full",
        className,
    );

    const AvatarContent = (
        <Avatar className="h-full w-full rounded-full border border-gray-200">
            <AvatarImage src={src} alt={name} />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
    );

    if (!editable) {
        return <div className={wrapperClass}>{AvatarContent}</div>;
    }

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label="Edit avatar"
            onClick={onEditAction}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onEditAction?.();
            }}
            className={wrapperClass}
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
    );
}
