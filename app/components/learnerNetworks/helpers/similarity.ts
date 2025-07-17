import { Student } from "../types";

/* Cosine similarity between two numeric vectors */
export const cosineSimilarity = (a: number[], b: number[]): number => {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
  const normB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
  return normA && normB ? dot / (normA * normB) : 0;
};

/**
 * Build an |students| × |students| matrix where each cell (i,j) is the
 * cosine similarity of the two students’ mastery vectors
 */
export const similarityMatrix = (
  students: Student[],
  topics: string[],
): number[][] => {
  return students.map((s1) => {
    const v1 = topics.map((t) => s1.metrics.mastery[t] ?? 0);
    return students.map((s2) => {
      const v2 = topics.map((t) => s2.metrics.mastery[t] ?? 0);
      return cosineSimilarity(v1, v2);
    });
  });
};
