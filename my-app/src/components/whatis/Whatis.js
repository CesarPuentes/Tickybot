import React, { Component } from 'react';
import tickyhead from './tickyhead.png'

class Whatis extends Component {
  render(){
    return(
      <section class="" id="about">
         <div class="container container--flex">

         <div class="container container--flex">
         <img src={tickyhead} alt="fireSpot"/>
         <h2 class="tickytitle">What Is TickyBot</h2>

          </div>
           <div class="row">
           <div class="">
             <p>
               <strong>TickyBot</strong> is a Slack Bot that lets you use support tickets on Slack. This way, you don't need to leave
               your beloved channel to assist your users, if you don't feel like it.</p>
           </div>
           <div class="">
             <p><strong>With
               TickyBot</strong> you can easily check if you've received new tickets, change their status, or write a reply,
               and the ticket will instantly update itself on our site.</p>
           </div>
           <div class="">
             <p> <strong>Support requests</strong> shouldn't be handled through Slack's direct messages.
               <br />
               <br />
               <em>Image about someone asking silly questions and the workplace admin asking him/her to open a support ticket so
                 other admins could look into the issue.</em>
             </p>
           </div>
           </div>
         </div>
       </section>
);
}
}

export default Whatis;
