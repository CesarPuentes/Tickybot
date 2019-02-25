import React, { Component } from 'react';
import Image from 'react-render-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



class Footer extends Component {
  render(){
    return(
<div className="container-fluid">
      <Navbar color="dark" >
      <Nav className="container container--flex" navbar>
      <div className ="justify-content-center">
      <p style={{color: 'gold'}}>Cloned by me. Originally was made with <strong style={{color: 'red'}}>love</strong> by the Chingu Bears 19 team.</p>
      <p style={{color: 'gold'}}>Original Source code is available on this
        <a href="https://github.com/chingu-coders/Voyage2-Bears-19" target="_blank" rel="noopener noreferrer"> GitHub page</a>
      </p>
      <p style={{color: 'gold'}}>My mod is available
        <a href="https://github.com/chingu-coders/Voyage2-Bears-19" target="_blank" rel="noopener noreferrer"> here</a>
      </p>
      </div>
      </Nav>
      </Navbar>
      </div>

      );
      }
      }

export default Footer;
