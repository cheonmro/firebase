import appStore from "./appStore";
import authStore from "./authStore";

class RootStore {
  constructor() {
    this.appStore = new appStore(this);
    this.authStore = new authStore(this);
  }
}
const rootStore = new RootStore();
export default rootStore;
