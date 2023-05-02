import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import '../scss/About.scss';
const About = () => {
    return (
        <Container className="my-5" style={{paddingTop:'20px'}}>
      <Row>
        <Col>
          <h2>About Our Boxing Management Tool</h2>
          <p style={{paddingTop:'10px'}}>
            Our boxing management tool is a web-based application that allows boxing event organizers, managers, and promoters to manage their boxing events and fighters with ease. With our tool, you can keep track of your fighters, matches, and events in one place, allowing you to focus on the bigger picture.
          </p>
       
          <h3 style={{paddingTop:'10px'}}>Our Services</h3>
          <ul style={{paddingTop:'10px'}}>
            <li>Manage fighters' profiles, records, and contracts</li>
            <li>Create and manage boxing events and matches</li>
            <li>Track revenue and expenses for events</li>
            <li>Generate reports on fighters, events, and finances</li>
            <li>Collaborate with other event organizers and promoters</li>
          </ul>
          <p style={{paddingTop:'10px'}}>
            Whether you're an experienced boxing event organizer or just starting out, our tool is designed to streamline your operations and help you grow your business.<br></br> Sign up for a free trial today and experience the benefits for yourself!
          </p>
        </Col>
      </Row>
    </Container>
    )
}

export default About;