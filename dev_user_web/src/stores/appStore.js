import { observable, action, reaction } from "mobx";

class appStore {
  @observable appLoaded = false;
  @observable token = window.localStorage.getItem("jwt");

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

  @action setToken(token) {
    console.log("token", token);
    this.token = token;
  }
}

export default appStore;
