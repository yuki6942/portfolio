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
          className="w-6 h-6 text-gray-500 hover:text-black dark:hover:text-white transition transform group-hover:-translate-y-1 group-hover:scale-125 duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
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
