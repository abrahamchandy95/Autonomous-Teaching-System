import { useCallback, useState } from "react";

export default function useExpanded<T = string>() {
  const [expanded, setExpanded] = useState<Set<T>>(new Set());

  const toggle = useCallback((id: T) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const isOpen = useCallback((id: T) => expanded.has(id), [expanded]);

  return { expanded, toggle, isOpen } as const;
}
