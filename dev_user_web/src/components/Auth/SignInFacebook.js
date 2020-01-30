import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

@inject("appStore", "authStore")
@observer
@withRouter
class SignInFacebook extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async event => {
    console.log("signin with Facebook");
    event.preventDefault();
    try {
      const socialAuthUser = await this.props.firebase.doSignInWithFacebook();
      console.log("socialAuthUser", socialAuthUser);
      console.log(
        "socialAuthUser: token",
        socialAuthUser.credential.accessToken
      );
      // this.props.appStore.setToken(socialAuthUser.credential.accessToken);
      // this.props.authStore.setAuthUser(socialAuthUser);
      // this.props.authStore.setEmail(socialAuthUser.user.email);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Facebook</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignInFacebook;
