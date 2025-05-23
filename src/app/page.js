import Head from "next/head";
import ProfileHeader from "./components/ProfileHeader";
import SocialIcons from "./components/SocialIcons";
import SkillsList from "./components/SkillsList";
import ProjectsSection from "./components/ProjectsSection";
import VisitorCounter from "./components/VisitorCounter";

export default function Home() {
  return (
    <>
      <Head>
        <title>yuki6942.de</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors">
        <ProfileHeader />
        <SocialIcons />
        <SkillsList />
        <ProjectsSection />
        <VisitorCounter />
        <footer className="w-full text-center py-4 mt-8 text-xs text-gray-400 ">
          &copy; {new Date().getFullYear()} yuki6942 All rights reserved.
        </footer>
      </main>
    </>
  );
}
