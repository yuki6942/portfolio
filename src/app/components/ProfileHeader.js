"use client";
import { useEffect, useState } from "react";

export default function ProfileHeader() {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const birthDate = new Date(2005, 5, 30);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 5 && today.getDate() < 30)) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/56565042?v=4"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4 shadow-lg fly-in-up"
        style={{ animationDelay: "0.1s" }}
      />
      <h1
        className="text-3xl font-semibold mb-2 fly-in-up text-gray-900 dark:text-gray-100"
        style={{ animationDelay: "0.2s" }}
      >
        Hi, I'm Philipp
      </h1>
      <p
        className="text-lg mb-2 fly-in-up text-gray-700 dark:text-gray-300"
        style={{ animationDelay: "0.3s" }}
      >
        <time dateTime="2005-06-30" suppressHydrationWarning>
          {age !== null ? `${age} • he/him.` : "• he/him."}
        </time>
      </p>
    </>
  );
}
