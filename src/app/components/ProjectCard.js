export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={link}
        className="underline text-blue-600 dark:text-blue-400 mt-2 inline-block"
      >
        View
      </a>
    </div>
  );
}
