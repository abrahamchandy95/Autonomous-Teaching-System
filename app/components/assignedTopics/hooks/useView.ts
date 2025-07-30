"use client";
import { useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { View } from "@/app/components/shared/Sidebar";

export default function useView(defaultView: View = "overview") {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState<View>(() => {
        const v = searchParams.get("view") as View | null;
        return v ?? defaultView;
    });
    const changeView = useCallback(
        (v: View) => {
            setView(v);
            const newParams = new URLSearchParams(searchParams);
            newParams.set("view", v);
            router.replace(`?${newParams.toString()}`, { scroll: false });
        },
        [router, searchParams],
    );
    return [view, changeView] as const;
}
