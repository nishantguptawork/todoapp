import React, { Component } from 'react';
//import Nav from './Nav';
import splash from '../background-image.jpg';
import { browserHistory } from 'react-router';

import 'whatwg-fetch';

class LandingPage extends Component {

  handleFacebookLogin(event){
    console.log("handleFacebookLogin login called");
    
      fetch('http://localhost:1337/auth/facebook')
      .then(function(response) {
        console.log("response",response);
        window.location.href = response.url;
        return response.text()
      })
  }

  render() {
    return (
      <div>
        {/*<Nav />*/}
        <ul className="nav navbar-nav navbar-right login-button">
          <li><button onClick={this.handleGoogleLogin} className="btn btn-block btn-social btn-google"><span className="fa fa-google"></span> Connect with Google </button></li>
          <li><button onClick={this.handleFacebookLogin} className="btn btn-block btn-social btn-facebook"><span className="fa fa-facebook"></span> Connect with Facebook </button></li>
        </ul>
        <h3 className="text-center">Welcome to TO DO </h3>
        <hr/>
        {/*<div className="splash-image">*/}
            <img src={splash} className="splash-image" alt="logo" />
        {/*</div>*/}
      </div>
    );
  }
}

export default LandingPage;