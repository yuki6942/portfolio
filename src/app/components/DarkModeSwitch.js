"use client";
import { useEffect, useState } from "react";
import useDarkMode from "./useDarkMode";

export default function DarkModeSwitch() {
  const [dark, setDark] = useDarkMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-700 shadow"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 12a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm7.07-7.07a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM4.93 17.66a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zm12.73 1.41a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM6.34 6.34a1 1 0 0 1 0 1.41L5.28 8.81A1 1 0 1 1 3.87 7.4l1.06-1.06a1 1 0 0 1 1.41 0zM21 12a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1zm-16 0a1 1 0 0 1-1 1H2.5a1 1 0 1 1 0-2H4a1 1 0 0 1 1 1zm8-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        </svg>
      )}
    </button>
  );
}
