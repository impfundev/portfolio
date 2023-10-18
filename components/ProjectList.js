import CardProject from "./Card";

export default function ProjectList({ projects }) {
  return (
    <div className="px-12">
      <h2
        id="project"
        className="text-2xl text-center font-bold tracking-wider"
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {projects.map((project, idx) => (
          <CardProject
            key={idx}
            title={project.title}
            excerpt={project.excerpt}
            image={project.image}
            content={project.body.html}
          />
        ))}
      </div>
    </div>
  );
}
