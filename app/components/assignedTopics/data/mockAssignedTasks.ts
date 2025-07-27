/* ─── chapter slice ─────────────────────────────────────────────── */
export interface ResourceChapter {
    id: string; // e.g. "asg-ch7"
    title: string; // "Factoring Quadratics"
    pages?: string;
    summary: string;
    practice?: string[];
}

/* ─── learning resource (book/video/etc.) ───────────────────────── */
export interface LearningResource {
    /** UNIQUE bookId used in the route: /books/[bookId] */
    id: string; // e.g. "book-algebra-survival"
    type: "book" | "article" | "video" | "module";
    title: string;
    author?: string;
    publisherOrSource?: string;
    coverImageUrl?: string;
    link?: string;
    isbn?: string;
    description?: string;
    chapters: ResourceChapter[];
}

/* ─── teacher assignment wrapper ────────────────────────────────── */
export interface AssignedTask {
    id: string; // assignment id
    title: string;
    assignedBy: string;
    subject: string;
    dueDate: string;
    progress: number; // %
    lastActivity?: string;
    chatConfidence?: number;
    resources: LearningResource[]; // 1‒N resources
}

/* ─── MOCK DATA ─────────────────────────────────────────────────── */
export const mockAssignedTasks: AssignedTask[] = [
    /* Algebra example */
    {
        id: "math-quadratic-set1",
        title: "15 Quadratic‑Equation Problems",
        assignedBy: "Ms. Patel",
        subject: "Algebra II",
        dueDate: "2025-09-01",
        progress: 40,
        resources: [
            {
                id: "book-algebra-survival", // ← bookId
                type: "book",
                title: "Algebra Survival Guide",
                author: "Josh Rappaport",
                coverImageUrl: "/covers/algebra-survival.jpg",
                description:
                    "Friendly walkthrough of factoring, roots, and the quadratic formula.",
                chapters: [
                    {
                        id: "asg-ch7",
                        title: "Factoring Quadratics",
                        pages: "pp. 112‑128",
                        summary: "Learn to factor ax²+bx+c into (mx+p)(nx+q).",
                        practice: ["Factor x²+5x+6", "Factor 2x²‑3x‑2"],
                    },
                    {
                        id: "asg-ch8",
                        title: "Quadratic Formula",
                        pages: "pp. 129‑140",
                        summary:
                            "Derivation and step‑by‑step use of (‑b ± √b²‑4ac)/(2a).",
                        practice: [
                            "Solve 3x²+2x‑1 = 0",
                            "Solve 5t²‑6t+2 = 0 (to 2 dp)",
                        ],
                    },
                ],
            },
        ],
    },

    /* History example */
    {
        id: "hist-essay-hitler",
        title: "Essay: Hitler’s Rise to Power",
        assignedBy: "Mr. O’Donnell",
        subject: "World History",
        dueDate: "2025-10-15",
        progress: 0,
        resources: [
            {
                id: "book-third-reich", // ← bookId
                type: "book",
                title: "The Third Reich: A History of Nazi Germany",
                author: "Thomas Childers",
                coverImageUrl: "/covers/third-reich.jpg",
                chapters: [
                    {
                        id: "tr-ch2",
                        title: "Post‑WWI Turmoil",
                        pages: "Ch 2",
                        summary:
                            "Political & economic chaos in the Weimar Republic sets the stage.",
                    },
                    {
                        id: "tr-ch3",
                        title: "Hitler Joins the NSDAP",
                        pages: "Ch 3",
                        summary:
                            "Early speeches, party expansion, Beer Hall Putsch.",
                        practice: [
                            "Short‑answer: What factors helped Hitler gain popularity?",
                        ],
                    },
                ],
            },
        ],
    },

    /* Biology example */
    {
        id: "bio-photosynthesis-set1",
        title: "Lab prep: Photosynthesis",
        assignedBy: "Mrs. Smith",
        subject: "Biology",
        dueDate: "2025-08-20",
        progress: 55,
        resources: [
            {
                id: "book-a-leaf-in-time", // ← bookId
                type: "book",
                title: "A Leaf in Time – Introduction to Photosynthesis",
                author: "David Walker",
                coverImageUrl: "/covers/a-leaf-in-time.jpg",
                link: "https://www.saps.org.uk/teaching-resources/resources/129/",
                chapters: [
                    {
                        id: "leaf-ch1",
                        title: "Why Plants Need Light",
                        pages: "pp. 1‑12",
                        summary:
                            "Overview of light absorption and energy conversion.",
                    },
                    {
                        id: "leaf-ch2",
                        title: "The Light Reactions",
                        pages: "pp. 13‑25",
                        summary:
                            "Photolysis, electron transport, ATP formation.",
                        practice: [
                            "Label the Z‑scheme diagram.",
                            "Explain photophosphorylation in one paragraph.",
                        ],
                    },
                ],
            },
        ],
    },
];
