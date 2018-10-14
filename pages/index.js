import React, { PureComponent } from "react";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import styled from "styled-components";

import mobxStores from "../stores";

const Button = styled.button`
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
          <Button>Button</Button>
        </div>
      </Provider>
    );
  }
}

export default Main;
