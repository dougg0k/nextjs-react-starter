import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Button = styled.button`
  background-color: red;
  color: white;
  border-color: blue;
`;

class Main extends React.PureComponent {
  render() {
    return (
      <div>
        <Button>Button</Button>
      </div>
    );
  }
}

export default connect()(Main);
