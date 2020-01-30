import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { withFirebase } from "../Firebase";

import "./styles/SignIn.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

@inject("appStore", "authStore")
@observer
@withRouter
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = async e => {
    console.log("click singin button");
    e.preventDefault();

    const { email, password } = this.state;
    console.log("signIn email:", email);
    try {
      const authUser = await this.props.firebase.doSignInWithEmailAndPassword(
        email,
        password
      );
      console.log("user info", authUser.user);
      console.log("user token", this.props.firebase.doToken());
      this.props.appStore.setToken(authUser.user.refreshToken);
      this.props.authStore.setAuthUser(authUser);
      this.props.authStore.setEmail(email);
      this.props.history.push("/");
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button
          disabled={isInvalid}
          type="submit"
          onClick={this.handleSubmitForm}
        >
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// export default withRouter(SignIn);

export default withFirebase(SignIn);

// const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

// export default SignInPage;
// export { SignInForm };
