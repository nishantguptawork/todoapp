import React, { Component } from 'react';
import Background from '../to_do_background.jpg';

class Section extends Component {

  constructor() {
    super();
    this.state = { 
      sectionStyle:  {
        width: "100%",
        height: "630px",
        opacity: 0.4,
        backgroundImage: "url(" + Background + ")"
      } 
    };
  };

  render() {
    return (
      <div>
      <section >
        <div id="loginDiv" className="login-container">
        </div>
      </section>
      </div>
    );
  }
}

export default Section;