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
        <img
          src="/GitHub.svg"
          alt="GitHub"
          className="w-7 h-7 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-200 transform group-hover:-translate-y-1 group-hover:scale-110"
        />
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
