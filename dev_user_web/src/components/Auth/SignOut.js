import React from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";

const SignOutButton = inject(
  "appStore",
  "authStore"
)(
  observer(({ appStore, authStore, firebase, history }) => {
    const onSignOut = async () => {
      console.log("signout");
      try {
        await firebase.doSignOut();
        appStore.setToken(undefined);
        authStore.setAuthUser(null);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <button type="button" onClick={onSignOut}>
        Sign Out
      </button>
    );
  })
);

export default compose(withRouter, withFirebase)(SignOutButton);
