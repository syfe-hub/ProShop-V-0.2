import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const footer = () => {
    const curentYear = new Date().getFullYear();    
  return (
  <footer className="footer">
    <Container>
      <Row>
        <Col className='text-center py-3'>
          <p>Copyright &copy; {curentYear}</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}



export default footer