import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './App.css';

import Header from './components/header/Header.js';
import Landing from './components/landing/Landing.js';
import Whatis from './components/whatis/Whatis.js';
import How from './components/howItWorks/How.js';
import Start from './components/start/Start.js';
import Footer from './components/header/Footer.js';
import GoTop from './components/topbutton/GoTop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>

      <div name="Landing">
      <Landing/>
      </div>

      <div name="whatis">
      <Whatis/>
      </div>

      <div name="howItWorks">
      <How/>
      </div>

      <div name="start">
      <Start/>
      </div>

      <div name="footer">
      <Footer/>
      <div name="topbutton">
      <GoTop/>
      </div>
      </div>

      </div>
    );
  }
}

export default App;
