import "bootstrap/dist/css/bootstrap.css";

import React, { PureComponent } from "react";
import { Provider } from "mobx-react";
import { configure } from "mobx";

import { Alert } from "reactstrap";
import styled from "react-emotion";

import mobxStores from "../stores";

const Button = styled("button")`
  background-color: orange;
  color: white;
  border-color: blue;
`;

configure({ enforceActions: "observed" });

class Main extends PureComponent {
  render() {
    return (
      <Provider {...mobxStores}>
        <div>
          <Alert color="primary">Bootstrap Test Alert</Alert>
          <Button>Emotion Testing Button</Button>
        </div>
      </Provider>
    );
  }
}

export default Main;
