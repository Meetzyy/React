import { Container, Carousel } from 'react-bootstrap'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Carousel>
          {[img1, img2, img3].map((img, i) => (
            <Carousel.Item key={i}>
              <img src={img} className="carousel-img" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
