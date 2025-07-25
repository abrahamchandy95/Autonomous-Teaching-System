import Link from "next/link";
import TopicProgress from "../components/TopicProgress";
import { mockTopics } from "../data/mockTopics";

export default function TopicsIdentified() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Topics To Learn</h2>
            {mockTopics.map((topic) => (
                <Link
                    href={`/topic/${topic.id}`}
                    key={topic.id}
                    className="block"
                    style={{ textDecoration: "none" }}
                >
                    <TopicProgress topic={topic} />
                </Link>
            ))}
        </div>
    );
}
