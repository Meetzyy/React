import { Container, Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Form className="contact-form">
          <Form.Control placeholder="First Name" />
          <Form.Control placeholder="Last Name" />
          <Form.Control type="email" placeholder="Email Address" />
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          <div className="text-center">
            <Button variant="dark" size="lg">Submit</Button>
          </div>
        </Form>
      </Container>
    </section>
  )
}
