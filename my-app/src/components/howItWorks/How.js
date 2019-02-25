import React, { Component } from 'react';
import bubble from './bubble.svg'
import tasks from './tasks.svg'
import workplace from './workplace.svg'
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
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';


class How extends Component {

  render(){
    return(
      <section className="page features" id="features">
        <div className="container-fluid">
          <h3 className="pagetitle">How It Works</h3>
          <div class="row">
          <div className="col-md-4 box">
          <ScrollAnimation animateIn="w3-animate-zoom">
          <div class="inner">
            <img className="btn-cta btn-cta--light" src={workplace} alt="fireSpot"/>
            <div className="breadcrumb">
              <p>You can add
                TickyBot to your Slack workplace by scrolling down or
                <a href="#cta"> clicking here</a></p>
              </div>
              </div>
              </ScrollAnimation>
            </div>


          <div className="col-md-4">
          <ScrollAnimation animateIn="w3-animate-zoom">
          <div class="inner">
          <img className="btn-cta btn-cta--light" src={bubble} alt="fireSpot" />
            <div className="breadcrumb ">
              <p>Your users can open a ticket by typing
                <strong> /ticket</strong> and their message into the chat field</p>
            </div>
            </div>
            </ScrollAnimation>
          </div>


          <div className="col-md-4 box">
          <ScrollAnimation animateIn="w3-animate-zoom">
          <div class="inner">
            <img className="btn-cta btn-cta--light" src={tasks} alt="fireSpot" />
            <div className="breadcrumb">
              <p>Once you or another admin solved their problems you can type
                <strong> /ticket close #id</strong> to close the ticket</p>
            </div>
            </div>
            </ScrollAnimation>
          </div>
          </div>

          </div>

        </section>

);
}
}

export default How;
