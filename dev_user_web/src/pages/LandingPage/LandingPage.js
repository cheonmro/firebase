import React, { Component } from "react";
import SignUpPage from "components/Auth/SignUp";
import SignOutButton from "components/Auth/SignOut";
import { inject, observer } from "mobx-react";

const INITIAL_STATE = {};

@inject("authStore")
@observer
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    const anoynis = "You need to Sign in!";
    return (
      <div>
        <h2>Landing Page</h2>
        {this.props.authStore.authUser ? <SignOutButton /> : anoynis}
      </div>
    );
  }
}

export default LandingPage;
