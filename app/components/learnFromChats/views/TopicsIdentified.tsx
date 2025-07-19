import TopicProgress from "../components/TopicProgress";
import { mockTopics } from "../data/mockTopics";
import useExpanded from "../hooks/useExpanded";

export default function TopicsIdentified() {
  const { isOpen, toggle } = useExpanded<string>();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Topics To Learn</h2>
      {mockTopics.map((topic) => (
        <TopicProgress
          key={topic.id}
          topic={topic}
          open={isOpen(topic.id)}
          onToggle={() => toggle(topic.id)}
        />
      ))}
    </div>
  );
}
