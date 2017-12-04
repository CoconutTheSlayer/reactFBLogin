import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

export default class Base extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad
          callback={responseFacebook}
          icon="fa-facebook"
        />
      </div>
    );
  }
}

