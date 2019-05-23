import React, { Component } from "react";

class Auth extends Component {
  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  };

  render() {
    return (
      <div>
        <form />
      </div>
    );
  }
}

export default Auth;
