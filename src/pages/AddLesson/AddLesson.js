import React, { Component } from 'react';
import './AddLesson.css';
import Header from '../../components/header/Header';
import LessonForm from '../../components/lessonForm/LessonForm';

class AddLesson extends Component {
  render() {
    return (
      <div className="page">
        <div className="header">
          <Header/>
        </div>
        <div className="body">
          <div className="content">
            <LessonForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLesson;