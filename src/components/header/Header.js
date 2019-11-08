import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" className="navbar">
        <Navbar.Brand href="#home">
          <Button variant="dark" className="button-add-class">
            Add class
          </Button>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;