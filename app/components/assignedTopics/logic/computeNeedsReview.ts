import type { AssignedTask } from "../data/mockAssignedTasks";

function daysSince(dateStr: string): number {
    const diff = Date.now() - new Date(dateStr).getTime();
    return diff / (1000 * 60 * 60 * 24);
}

export function computeNeedsReview(topic: AssignedTask): boolean {
    const { progress, chatConfidence, lastActivity } = topic;
    if (progress < 70) return true;
    if (chatConfidence !== undefined && chatConfidence < 70) return true;
    if (lastActivity && daysSince(lastActivity) > 14) return true;
    return false;
}
