import React, { Component } from 'react';
import Image from 'react-render-image';
import slack from './slack.svg'


class Start extends Component {
  render(){
    return(
      <section className="page cta" id="cta">
        <div className="container container--flex">
        <div>
         <h3>Start Using
            TickyBot Today</h3>
            </div>

          <div class="row">
          <div>
            <p><strong>Ticky</strong>Bot allows Slack teams to manage their support tickets 100% inside Slack, without having to switch
              between different apps.</p>
            <a className="btn-cta btn-cta--dark btn-cta--extra-margin" href="https://slack.com/oauth/authorize?client_id=39189849459.249480535796&amp;scope=commands,bot,users%2Eprofile%3Aread,im%3Aread,chat%3Awrite%3Abot,team%3Aread">
              <img src={slack} alt="fireSpot"/>
              <span>Add to
                <strong>Slack</strong>
              </span>
            </a>
          </div>
          </div>
          </div>


      </section>


      );
      }
      }

export default Start;
