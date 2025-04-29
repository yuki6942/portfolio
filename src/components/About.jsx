import React from "react";
import { calculateAge } from "../utils/Age";

export default function About() {

    const projects = [
        {
        name: "Portfolio",
        description:
            "The current website you're viewing, built with React js. It uses Traefik as a reverse proxy.",
        link: "https://github.com/yuki6942/portfolio",
        },
        {
        name: "Kyuutie",
        description:
            "A Discord bot written in C# using DSharpPlus, created for MikyuuVT's Discord server. It includes features such as Twitch API integration for automatic live notifications.",
        link: "https://github.com/yuki6942/Kyuutie",
        },
        {
        name: "DSharpPlus Bot Example",
        description:
            "A DSharpPlus Discord bot template demonstrating the use of Buttons (Components) and a PostgreSQL database.",
        link: "https://github.com/yuki6942/DSharpPlus-Bot-Example",
        },
        {
        name: "Arch KDE Dotfiles",
        description: "A collection of personal dotfiles for Arch Linux with KDE.",
        link: "https://github.com/yuki6942/kde-arch",
        },
    ];

    return (
        <main>
            <section id="about-me" className="about-me">
                <div className="profile-container">
                    <div className="profile-details">
                        <p>Hello! My name is Philipp. I'm a <strong>{calculateAge("2005-06-30") }</strong>-year-old developer from Germany.</p>
                        <p>Starting in August 2025, I will begin my apprenticeship as an Application Development Specialist (Fachinformatiker Anwendungsentwicklung).</p>
                    </div>
                </div>
            </section>
                    <section id="skills">
            <h2>Skills</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>Languages</h3>
                    <div class="skill-icons">
                        <div class="skill">
                            <i class="fab fa-microsoft"></i>
                            <span>C#</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-js-square"></i>
                            <span>TypeScript/JavaScript</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-html5"></i>
                            <span>HTML</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-css3-alt"></i>
                            <span>CSS</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-golang"></i>
                            <span>Go</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div class="skill-icons">
                        <div class="skill">
                            <i class="fab fa-react"></i>
                            <span>React</span>
                        </div>
                        <div class="skill">
                            <i class="fas fa-code"></i>
                            <span>SvelteKit</span>
                        </div>
                        <div class="skill">
                            <i class="fas fa-paint-brush"></i>
                            <span>TailwindCSS</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Tools</h3>
                    <div class="skill-icons">
                        <div class="skill">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-docker"></i>
                            <span>Docker</span>
                        </div>
                        <div class="skill">
                            <i class="fas fa-server"></i>
                            <span>Nginx</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Operating System/Server</h3>
                    <div class="skill-icons">
                        <div class="skill">
                            <i class="fab fa-linux"></i>
                            <span>Linux (Administration & Configuration)</span>
                        </div>
                        <div class="skill">
                            <i class="fab fa-windows"></i>
                            <span>Basic Windows Server Administration</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section id="projects">
                <h2 className="project-heading">Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                    </div>
                ))}
        </section>
        </main>
    );
}

