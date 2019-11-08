import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Schedule.css';
import ClassCard from '../classCard/ClassCard';

class Schedule extends Component {
  render() {
    return (
      <Container>
        <Row className="week-days">
          <Col xs lg="1"/>
          <Col>Monday</Col>
          <Col>Tuesday</Col>
          <Col>Wednesday</Col>
          <Col>Thursday</Col>
          <Col>Friday</Col>
        </Row>
        <Row className="first-class">
          <Col xs lg="1">8h-10h</Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
        </Row>
        <Row className="second-class">
          <Col xs lg="1">10h-12h</Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
          <Col><ClassCard/></Col>
        </Row>
      </Container>
    );
  }
}

export default Schedule;