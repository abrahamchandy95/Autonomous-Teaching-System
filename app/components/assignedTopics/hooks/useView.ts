"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { View } from "@/app/components/shared/Sidebar";

export default function useView(defaultView: View = "overview") {
    const router = useRouter();

    const [view, setView] = useState<View>(defaultView);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const v = params.get("view") as View | null;
        if (v && v !== view) setView(v);
    }, [view]);

    const changeView = useCallback(
        (v: View) => {
            setView(v);

            const params = new URLSearchParams(window.location.search);
            params.set("view", v);

            router.replace(`?${params.toString()}`, { scroll: false });
        },
        [router],
    );

    return [view, changeView] as const;
}
