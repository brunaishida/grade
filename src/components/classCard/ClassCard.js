import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class ClassCard extends Component {
  render() {
    return (
      <Card style={{ width: '11rem' }}>
        <Card.Body>
          <Card.Title>Bases Matemáticas</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Júlio Guedes</Card.Subtitle>
          <Card.Text>
            Sala 207-2
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ClassCard;