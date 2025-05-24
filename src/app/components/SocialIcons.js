export default function SocialIcons() {
  return (
    <div className="flex gap-4 mb-6" style={{ animationDelay: "0.38s" }}>
      <a
        href="https://discord.com/users/594627968668794896"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className="relative group"
      >
        <img
          src="/Discord.svg"
          alt="Discord"
          className="w-7 h-7 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:-translate-y-1 group-hover:scale-110"
        />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
          yuki6942
        </span>
      </a>
      <a
        href="https://github.com/yuki6942"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="relative group"
      >
        <svg
          width="98"
          height="96"
          viewBox="0 0 98 96"
          className="w-7 h-7 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-all duration-200 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transform group-hover:-translate-y-1 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          />
        </svg>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
          yuki6942
        </span>
      </a>
      <a
        href="https://bsky.app/profile/yuki6942.de"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bluesky"
        className="relative group"
      >
        <img
          src="/Bluesky.svg"
          alt="Bluesky"
          className="w-7 h-7 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:-translate-y-1 group-hover:scale-110"
        />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
          yuki6942.de
        </span>
      </a>
      <a
        href="mailto:contact@yuki6942.de"
        aria-label="Email"
        className="relative group"
      >
        <svg
          className="w-7 h-7 text-gray-400 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-200 transform group-hover:-translate-y-1 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
        </svg>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
          contact@yuki6942.de
        </span>
      </a>
    </div>
  );
}
