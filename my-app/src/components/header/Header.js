import React, { Component } from 'react';
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


class Header extends Component {
  render(){
    return(

      <Navbar color="dark" light expand="md">
      <Nav className="ml-auto" navbar>
      <NavItem>
      <NavLink style={{color: 'gold'}} href="#home">Home</NavLink>
      </NavItem>
      <NavItem>
      <NavLink style={{color: 'gold'}} href="#about">About</NavLink>
      </NavItem>
      <NavItem>
      <NavLink style={{color: 'gold'}} href="#features">Features</NavLink>
      </NavItem>
      <NavItem>
      <NavLink style={{color: 'gold'}} href="#">Add to Slack</NavLink>
      </NavItem>
      </Nav>
      </Navbar>

);
}
}

export default Header;
