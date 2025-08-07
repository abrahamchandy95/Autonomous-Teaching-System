import { TopicProgress } from "./topicTypes";

export const mockTopics: TopicProgress[] = [
    {
        id: "1",
        name: "Quadratic Equations",
        difficulty: "Medium",

        // progress metrics
        confidence: 70,
        conversationCount: 23,
        attempts: 3,
        passes: 2,
        lessonsViewed: 1,

        suggestedPrerequisites: ["Linear Equations", "Factoring Polynomials"],
        achievements: ["first_pass"],

        description:
            "Solve quadratic equations, graph parabolas and understand the quadratic formula.",
        progress: 75,
        masteryLevel: "Intermediate",
        questionsAnswered: 30,
        questionsCorrect: 24,
        lastReviewed: "2025-07-28",
        badge: "Algebra Ace",

        prerequisites: [
            { title: "Linear Equations", completed: true },
            { title: "Factoring Polynomials", completed: false },
        ],

        /**
         * Only PDF books or chapters – future‑proof for MongoDB RAG storage.
         */
        resources: [
            {
                title: "CK‑12 Algebra I – Chapter 6: Quadratic Functions",
                url: "https://resources.ck12.org/pdf/Algebra_I-CK-12_Chapter_6.pdf",
                type: "pdf",
            },
            {
                title: "OpenStax Precalculus – Section 2.6 Quadratic Equations",
                url: "https://openstax.org/books/precalculus/pages/2-6-quadratic-equations.pdf",
                type: "pdf",
            },
        ],

        lessons: [
            { id: "q1", title: "Graphing Parabolas", duration: "10 min" },
            { id: "q2", title: "Completing the Square", duration: "12 min" },
        ],
    },
    {
        id: "2",
        name: "Photosynthesis Process",
        difficulty: "Hard",

        confidence: 45,
        conversationCount: 18,
        attempts: 1,
        passes: 1,
        lessonsViewed: 2,

        suggestedPrerequisites: ["Cell Structure", "Chemical Reactions"],
        achievements: ["first_pass"],

        description:
            "Understand light‑dependent and light‑independent reactions in plants.",
        progress: 40,
        masteryLevel: "Novice",
        questionsAnswered: 12,
        questionsCorrect: 5,
        lastReviewed: "2025-07-26",

        prerequisites: [
            { title: "Cell Structure", completed: true },
            { title: "Chemical Reactions", completed: false },
        ],

        resources: [
            {
                title: "Campbell Biology – Chapter 10 Photosynthesis (PDF excerpt)",
                url: "https://example.org/campbell_biology_ch10_photosynthesis.pdf",
                type: "pdf",
            },
            {
                title: "OpenStax Biology – Chapter 8 Photosynthesis",
                url: "https://openstax.org/books/biology/pages/8-photosynthesis.pdf",
                type: "pdf",
            },
        ],

        lessons: [
            { id: "p1", title: "Chloroplast Anatomy", duration: "8 min" },
        ],
    },
    {
        id: "3",
        name: "French Verb Conjugation",
        difficulty: "Easy",

        confidence: 82,
        conversationCount: 31,
        attempts: 0,
        passes: 0,
        lessonsViewed: 0,

        suggestedPrerequisites: ["Basic French Vocabulary", "Present Tense"],
        achievements: [],

        description:
            "Master regular and irregular French verb endings across common tenses.",
        progress: 20,
        masteryLevel: "Novice",
        questionsAnswered: 5,
        questionsCorrect: 3,
        lastReviewed: "2025-07-20",

        prerequisites: [
            { title: "Basic French Vocabulary", completed: true },
            { title: "Present Tense", completed: false },
        ],

        resources: [
            {
                title: "Bescherelle: La Conjugaison Pour Tous (PDF)",
                url: "https://example.org/bescherelle_conjugaison_pour_tous.pdf",
                type: "pdf",
            },
            {
                title: "Tex's French Grammar – Verb Guide (PDF)",
                url: "https://www.laits.utexas.edu/tex/pdf/verbs_guide.pdf",
                type: "pdf",
            },
        ],

        lessons: [
            { id: "f1", title: "-ER Verb Patterns", duration: "7 min" },
            { id: "f2", title: "Être & Avoir", duration: "5 min" },
        ],
    },
];
