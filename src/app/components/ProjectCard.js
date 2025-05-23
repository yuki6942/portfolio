export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border p-4 rounded-xl hover:shadow-lg transition bg-white dark:bg-gray-900">
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
