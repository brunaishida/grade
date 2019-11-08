import React, { Component } from 'react';
import './InitialPage.css'
import Header from '../../components/header/Header';
import Schedule from '../../components/schedule/Schedule';

class InitialPage extends Component {
  render() {

    return (
      <div className="page">
        <div className="header">
          <Header/>
        </div>
        <div className="body">
          <div className="content">
            <Schedule/>
          </div>
        </div>
      </div>
    );
  }
}

export default InitialPage;