import ProjectList from "@/components/ProjectList";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navigation from "@/components/Nav";
import { compareDesc } from "date-fns";
import { allProjects } from "contentlayer/generated";

export default function Home() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <Navigation />
      <Hero />
      <main className="flex flex-col gap-20 py-40">
        <ProjectList projects={projects} />
        <About />
      </main>
    </>
  );
}
