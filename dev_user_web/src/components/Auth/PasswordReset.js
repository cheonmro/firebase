import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { withFirebase } from "../Firebase";
import SignIn from "./SignIn";

const INITIAL_STATE = {
  email: "",
  error: null
};

@inject("authStore")
@observer
@withRouter
class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    console.log("send to email");
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    if (this.props.authStore.authUser) {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <button disabled={isInvalid} type="submit">
            Reset My Password
          </button>

          {error && <p>{error.message}</p>}
        </form>
      );
    }

    return <SignIn />;
  }
}

export default withFirebase(PasswordReset);
