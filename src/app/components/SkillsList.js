export default function SkillsList() {
  return (
    <section
      className="w-full max-w-xl mb-8" // fly-in-up
      style={{ animationDelay: "0.45s" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 tracking-tight">
        <span>Skills</span>
      </h2>
      <ul className="flex flex-wrap justify-center gap-3 text-gray-800 dark:text-gray-200 text-sm">
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          JavaScript/TypeScript
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          React
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          Next.js
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          Tailwind CSS
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          HTML/CSS
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          Node.js
        </li>
        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">Git</li>

        <li className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">
          Docker
        </li>
      </ul>
    </section>
  );
}
