import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "components/Firebase";
import PasswordUpdate from "../../components/Auth/PasswordUpdate";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

@withRouter
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async e => {
    console.log("onSubmit");
    e.preventDefault();
    const { email, passwordOne } = this.state;

    try {
      await this.props.firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      this.setState({ ...INITIAL_STATE });
      this.props.history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <div>
        <h2>Profile Page</h2>
        {/* <PasswordUpdate /> */}
      </div>
    );
  }
}

export default withFirebase(Profile);

// const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);
// export { SignUpForm, SignUpLink };
