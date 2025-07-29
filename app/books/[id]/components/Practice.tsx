"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Practice() {
    return (
        <aside className="space-y-4">
            <h2 className="text-xl font-semibold">Practice Center</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-medium">
                        Strengthen your understanding
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">
                        Start a mixed quiz from all chapters or focus on a
                        specific one.
                    </p>
                    <Button className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Start 10‑question Quiz
                    </Button>
                </CardContent>
            </Card>
        </aside>
    );
}
