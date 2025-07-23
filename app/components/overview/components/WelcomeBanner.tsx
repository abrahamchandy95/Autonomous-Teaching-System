"use client";

import { motion } from "framer-motion";

export default function WelcomeBanner({
  studentName,
}: {
  studentName: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      /* full‑bleed inside a centered container */
      className="
        relative mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]
        rounded-none sm:rounded-2xl          /* square on mobile, curved on desktop */
        bg-gradient-to-r from-indigo-100 via-purple-100 to-rose-100
        py-6 px-8
        ring-1 ring-white/40
      "
    >
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
        Welcome {studentName}, to your own{" "}
        <span className="italic text-indigo-700">
          Autonomous Teaching System
        </span>
      </h1>
      <p className="text-sm md:text-base mt-1 text-gray-700">
        Learn and challenge your friends on a personalized, AI‑powered journey
        🚀
      </p>
    </motion.div>
  );
}
