import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LessonForm.css';

class LessonForm extends Component {
  render() {
    return (
      <div className="lesson-form">
        <h3 className="form-title">
          Add a new Lesson
        </h3>
        <Form>
          <Form.Group className="title">
            <Form.Label>Lesson Title</Form.Label>
            <Form.Control type="name" placeholder="Enter lesson title" />
          </Form.Group>
          <Form.Group className="teacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control type="name" placeholder="Enter teacher's name" />
          </Form.Group>
          <Form.Group className="classroom">
            <Form.Label>Classroom</Form.Label>
            <Form.Control type="name" placeholder="Enter classroom" />
          </Form.Group>
          <div key={`default-checkbox`} className="mb-3">
            <div className="hour monday">
              <h6>Monday</h6>
              <Form.Check
                type={'checkbox'}
                label={`8h-10h`}
                id={`monday-8h`}
              />
              <Form.Check
                type={'checkbox'}
                label={`10h-12h`}
                id={`monday-10h`}
              />
            </div>
            <div className="hour tuesday">
              <h6>Tuesday</h6>
              <Form.Check
                type={'checkbox'}
                label={`8h-10h`}
                id={`tuesday-8h`}
              />
              <Form.Check
                type={'checkbox'}
                label={`10h-12h`}
                id={`tuesday-10h`}
              />
            </div>
            <div className="hour wednesday">
              <h6>Wednesday</h6>
              <Form.Check
                type={'checkbox'}
                label={`8h-10h`}
                id={`wednesday-8h`}
              />
              <Form.Check
                type={'checkbox'}
                label={`10h-12h`}
                id={`wednesday-10h`}
              />
            </div>
            <div className="hour thursday">
              <h6>Thursday</h6>
              <Form.Check
                type={'checkbox'}
                label={`8h-10h`}
                id={`thursday-8h`}
              />
              <Form.Check
                type={'checkbox'}
                label={`10h-12h`}
                id={`thursday-10h`}
              />
            </div>
            <div className="hour friday">
              <h6>Friday</h6>
              <Form.Check
                type={'checkbox'}
                label={`8h-10h`}
                id={`friday-8h`}
              />
              <Form.Check
                type={'checkbox'}
                label={`10h-12h`}
                id={`friday-10h`}
              />
            </div>
            <br className="hour-end" />
          </div>
          <Button className="submit" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LessonForm;