import { Container, ProgressBar } from 'react-bootstrap'

const skills = [
  { name: 'HTML', value: 99 },
  { name: 'CSS', value: 99 },
  { name: 'Bootstrap', value: 99 },
  { name: 'C', value: 98 },
  { name: 'C++', value: 98 },
  { name: 'JavaScript', value: 90 },
  { name: 'React', value: 30 }
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <h2 className="section-title">Skills</h2>
        {skills.map((skill, i) => (
          <div key={i} className="mb-4">
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.value} variant="dark" />
          </div>
        ))}
      </Container>
    </section>
  )
}
