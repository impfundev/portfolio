import Logo from "./components/logo";

export default function Home() {
  return (
    <main className="Main">
      <section className="Hero">
        <div className="HeroText">
          <h1 className="HeroPersonName">Hii, I&sbquo;m Ilham Maulana Pratama,</h1>
          <h2 className="HeroPersonJob">Fullstack Web Developer and UI/UX Designer</h2>
          <p className="HeroCta">Scroll down to see the project</p>
        </div>
        <Logo />
      </section>

    </main>
  )
}