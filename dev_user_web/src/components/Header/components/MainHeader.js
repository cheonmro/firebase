import React, { Component } from "react";
import { inject, observer } from "mobx-react";

const INITIAL_STATE = {};

@inject("authStore")
@observer
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    return (
      <div>
        <h2>
          Hello,
          {this.props.authStore.authUser && this.props.authStore.values.email}
        </h2>
      </div>
    );
  }
}

export default MainHeader;
