import HomeImg from '../assets/Home.jpg'

export default function Home() {
  return (
    <section id="home" className="hero">
      <img src={HomeImg} alt="Home" className="hero-img" />
      <div className="hero-overlay">
        <h1>
          A Full Stack<br />Web Developer
        </h1>
        <p>Developer with an artist’s eye.</p>
      </div>
    </section>
  )
}
