import React, { Component } from 'react';
import top from './top.svg'



class GoTop extends Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   event.preventDefault();
 }

  render(){
    return(

      <div className="container container--flex">
      <form onSubmit={this.handleSubmit}>
      <button className="back-to-top" value={this.state.value} onChange={this.handleChange}>
      <img src={top} alt="fireSpot"/>
      <span className="screen-reader-text">Back to top</span>
      </button>
      </form>
      </div>

);
}
}

export default GoTop;
