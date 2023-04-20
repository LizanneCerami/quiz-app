// import { GitHub } from 'react-bootstrap-icons'
import { Col, Container, Row } from "react-bootstrap";

export default function Footer () {

  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/lizannecerami/quiz-app";

  return( 
    <footer>
      <Container>
        <Row>
          <Col>
            <p><small>&copy;</small> {currentYear}
            <br />
          
            <a href={githubLink} target="_blank"
             rel="noreferrer">Code in GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}