import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-4 grid gap-6 max-w-xl w-full fly-in-up"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
        <ProjectCard
          title="Portfolio Website"
          description="The site you're looking at right now."
          link="https://github.com/yuki6942/portfolio"
        />
      </div>
      <div className="transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
        <ProjectCard
          title="Twig Bot"
          description="A Discord bot that provides a variety of features."
          link="https://github.com/yuki6942/twig-bot"
        />
      </div>
      <div className="transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
        <ProjectCard
          title="Midnight Peony"
          description="A VsCode theme."
          link="https://github.com/yuki6942/Midnight-Peony"
        />
      </div>
    </section>
  );
}
