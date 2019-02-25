import React, { Component } from 'react';
import Image from 'react-render-image';
import tickybot from './tickybot.svg'
import slack from './slack.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Button,
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


class Landing extends Component {
  render(){
    return(
      <section className="page hero" id="home">
   <div className="container container--flex">
     <div className="hero__description">
       <h1>
         <strong>Ticky</strong>Bot</h1>
       <p className="slogan">Let your team manage their support tickets 100%&nbsp;inside&nbsp;Slack</p>
       <a className="btn-cta btn-cta--light" href="#">
       <img src={slack} alt="fireSpot"/>
         <span>Add to
           <strong>Slack</strong>
         </span>
       </a>
       </div>
       <img src={tickybot} alt="fireSpot"/>



   </div>
 </section>

);
}
}

export default Landing;
