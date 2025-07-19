"use client";

import StudentBadge from "./StudentBadge";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  studentName?: string;
}

export default function PageHeader({
  title,
  subtitle,
  studentName,
}: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>

      {studentName && <StudentBadge name={studentName} />}
    </header>
  );
}
