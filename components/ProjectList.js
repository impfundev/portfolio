import CardProject from "./Card";

export default function ProjectList() {
  return (
    <div className="px-12 py-28">
      <h2
        id="project"
        className="text-2xl text-center font-bold tracking-wider"
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <CardProject
          title="Web App"
          image="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardProject
          title="Mobile App"
          image="https://nextui.org/images/card-example-2.jpeg"
        />
        <CardProject
          title="Dekstop App"
          image="https://nextui.org/images/card-example-4.jpeg"
        />
      </div>
    </div>
  );
}
