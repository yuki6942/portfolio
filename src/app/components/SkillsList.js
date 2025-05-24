export default function SkillsList() {
  return (
    <section
      className="w-full max-w-xl mb-8"
      style={{ animationDelay: "0.45s" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 tracking-tight">
        <span>Skills</span>
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 text-gray-800 dark:text-gray-200 text-sm">
        <li className="relative group flex flex-col items-center">
          <img
            src="/JavaScript.svg"
            alt="JavaScript"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            JavaScript
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/TypeScript.svg"
            alt="TypeScript"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            TypeScript
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/React.svg"
            alt="React"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            React
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110"
            aria-label="Next.js"
          >
            <path
              fill="currentColor"
              d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
            />
          </svg>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            Next.js
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/Tailwind.svg"
            alt="Tailwind CSS"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            Tailwind CSS
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/HTML.svg"
            alt="HTML"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            HTML
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/CSS.svg"
            alt="CSS"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            CSS
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/Git.svg"
            alt="Git"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            Git
          </span>
        </li>
        <li className="relative group flex flex-col items-center">
          <img
            src="/Docker.svg"
            alt="Docker"
            className="w-8 h-8 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
            Docker
          </span>
        </li>
      </ul>
    </section>
  );
}
