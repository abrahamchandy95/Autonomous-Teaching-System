export interface Topic {
  id: string;
  name: string;
  confidence: number;
  conversationCount: number;
  difficulty: "Easy" | "Medium" | "Hard";
  attempts: number;
  passes: number;
  lessonsViewed: number;
  suggestedPrerequisites: string[];
  achievements: string[];
}
