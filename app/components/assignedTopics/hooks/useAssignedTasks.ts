import { mockAssignedTasks, AssignedTask } from "../data/mockAssignedTasks";
import { computeNeedsReview } from "../logic/computeNeedsReview";

export function useAssignedTasks() {
    const topics: (AssignedTask & { needsReview: boolean })[] =
        mockAssignedTasks.map((t) => ({
            ...t,
            needsReview: computeNeedsReview(t),
        }));

    const summary = {
        total: topics.length,
        needsReview: topics.filter((t) => t.needsReview).length,
        completed: topics.filter((t) => t.progress === 100).length,
    };

    return { topics, summary };
}
