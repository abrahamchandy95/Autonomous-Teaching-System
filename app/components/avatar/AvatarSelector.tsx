"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import AvatarDisplay from "./AvatarDisplay";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------  *
 *  CONSTANTS                                                        *
 * ----------------------------------------------------------------  */

const AVATAR_COUNT = 5;
const AVATAR_BASE_PATH = "/avatars/avataaars-";
const AVATAR_EXT = ".png";

const DEFAULT_AVATARS = Array.from(
  { length: AVATAR_COUNT },
  (_, i) => `${AVATAR_BASE_PATH}${i}${AVATAR_EXT}`,
);

const OPTION_PX = 256;

/* ----------------------------------------------------------------  *
 *  COMPONENTS                                                       *
 * ----------------------------------------------------------------  */

interface AvatarSelectorProps {
  name: string;
}

export default function AvatarSelector({ name }: AvatarSelectorProps) {
  const initialIndex = useMemo(
    () => Math.floor(Math.random() * AVATAR_COUNT),
    [],
  );
  const [index, setIndex] = useState(initialIndex);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <AvatarDisplay src={DEFAULT_AVATARS[index]} name={name} editable />
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-64 max-h-[80vh] overflow-y-auto"
      >
        <div className="p-2 space-y-4">
          {DEFAULT_AVATARS.map((url, i) => (
            <button
              key={url}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "rounded-full focus:outline-none transition",
                i === index
                  ? "ring-4 ring-blue-500"
                  : "hover:ring-2 hover:ring-gray-300",
              )}
            >
              <Image
                src={url}
                alt="Avatar choice"
                width={OPTION_PX}
                height={OPTION_PX}
                className="rounded-full"
                sizes={`${OPTION_PX}px`}
                priority={false}
              />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
