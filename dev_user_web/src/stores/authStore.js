import { observable, action, reaction } from "mobx";

class authStore {
  @observable authUser = null;

  @observable values = {
    email: "",
    password: ""
  };

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setEmail(email) {
    console.log("authstore email", email);
    this.values.email = email;
  }

  // @action setPassword(password) {
  //   this.values.password = password;
  // }

  @action setAuthUser(authUser) {
    console.log("authUser store", authUser);
    this.authUser = authUser;
  }
}

export default authStore;
