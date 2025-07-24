"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AvatarDisplay from "./AvatarDisplay";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import useAvatarIndex from "../hooks/useAvatarIndex";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- *
 *  Constants                                                       *
 * ---------------------------------------------------------------- */

const AVATAR_COUNT = 5;
const AVATAR_BASE_PATH = "/avatars/avataaars-";
const AVATAR_EXT = ".png";

const AVATARS = Array.from(
    { length: AVATAR_COUNT },
    (_, i) => `${AVATAR_BASE_PATH}${i}${AVATAR_EXT}`,
);

const OPTION_PX = 256;

/* ---------------------------------------------------------------- *
 *  Props                                                           *
 * ---------------------------------------------------------------- */

interface AvatarSelectorProps {
    /** Display name used for alt text / a11y */
    name: string;
    /**
     * Optional controlled avatar index (0‑4).
     * If omitted, the component uses the shared index from useAvatarIndex.
     */
    index?: number;
    /** Callback when the user picks a different avatar */
    onChange?: (idx: number) => void;
    /** Tailwind classes for external sizing / layout */
    className?: string;
    /** Disable popover and editing when false */
    editable?: boolean;
}

/* ---------------------------------------------------------------- *
 *  Component                                                       *
 * ---------------------------------------------------------------- */

export default function AvatarSelector({
    name,
    index,
    onChange,
    className = "",
    editable = true,
}: AvatarSelectorProps) {
    /* 1. Shared (global) avatar index from localStorage */
    const [globalIdx, setGlobalIdx] = useAvatarIndex();

    /* 2. Which value drives the UI? */
    const controlled = index !== undefined;
    const sourceIdx = controlled ? (index as number) : globalIdx;

    /* 3. Local state for optimistic popover feedback */
    const [current, setCurrent] = useState(sourceIdx);

    /* Keep local state in sync when the source changes */
    useEffect(() => setCurrent(sourceIdx), [sourceIdx]);

    /* Select handler */
    const choose = (idx: number) => {
        setCurrent(idx); // instant UI update
        if (onChange) {
            onChange(idx); // parent manages persistence
        } else {
            setGlobalIdx(idx); // update shared store + localStorage
        }
    };

    /* ---------- Read‑only mode ---------- */
    if (!editable) {
        return (
            <AvatarDisplay
                src={AVATARS[current]}
                name={name}
                editable={false}
                className={className}
            />
        );
    }

    /* ---------- Editable with popover ---------- */
    return (
        <Popover>
            <PopoverTrigger asChild>
                <AvatarDisplay
                    src={AVATARS[current]}
                    name={name}
                    editable
                    className={className}
                />
            </PopoverTrigger>

            <PopoverContent
                align="start"
                className="w-64 max-h-[80vh] overflow-y-auto"
            >
                <div className="p-2 space-y-4">
                    {AVATARS.map((url, i) => (
                        <button
                            key={url}
                            type="button"
                            onClick={() => choose(i)}
                            className={cn(
                                "rounded-full transition focus:outline-none",
                                i === current
                                    ? "ring-4 ring-blue-500"
                                    : "hover:ring-2 hover:ring-gray-300",
                            )}
                        >
                            <Image
                                src={url}
                                alt={`Avatar ${i + 1}`}
                                width={OPTION_PX}
                                height={OPTION_PX}
                                className="rounded-full"
                            />
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
