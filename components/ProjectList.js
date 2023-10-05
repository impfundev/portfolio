import Card from "./Card";

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
        <Card title="Web App" />
        <Card title="Mobile App" />
        <Card title="Dekstop App" />
      </div>
    </div>
  );
}
