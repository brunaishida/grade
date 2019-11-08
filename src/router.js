import React, { Component } from 'react';
import InitialPage from './pages/InitialPage/InitialPage';
import AddLesson from './pages/AddLesson/AddLesson'

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'initial'
    };
  }

  redirectToPage(path) {
    this.setState({ path })
  }
  render() {
    switch (this.state.path) {
      case 'initial':
        return (
          <InitialPage onAddLessonPress={() => this.redirectToPage('add-lesson')}/>
        );
      case 'add-lesson':
        return (
          <AddLesson 
            initialPage={() => this.redirectToPage('initial')}
            onAddLessonPress={() => this.redirectToPage('add-lesson')}
          />
        );
      default:
        return (
          <InitialPage />
        );
    }
  }
}

export default Router;