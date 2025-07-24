"use client";

import { useCallback, useEffect, useState } from "react";

/* ---------- constants ---------- */
const KEY = "ats‑avatar‑index";
const COUNT = 5;

/* ---------- helper ------------ */
export default function useAvatarIndex(): [number, (i: number) => void] {
    const [index, setIndex] = useState<number>(() => {
        if (typeof window === "undefined") return 0; // SSR fallback
        const raw = window.localStorage.getItem(KEY);
        return raw ? Number(raw) : Math.floor(Math.random() * COUNT);
    });

    const update = useCallback((i: number) => {
        setIndex(i);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(KEY, String(i));
        }
    }, []);

    /* keep tabs in sync */
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key === KEY && e.newValue) setIndex(Number(e.newValue));
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    return [index, update];
}
