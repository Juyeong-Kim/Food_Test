import React from "react";
import styled from "styled-components";
import { Line } from "rc-progress";

export default class ProgressBar extends React.Component {
  render() {
    const index = this.props.questionIndex;
    const length = this.props.questionLength;
    const percent = (index / length) * 100;
    return (
      <Progressbar>
        <Line
          style={{ flex: 1 }}
          percent={percent}
          strokeWidth="2"
          strokeColor="#ffdd33"
          trailWidth="2"
          trailColor="#ffffff"
        />
      </Progressbar>
    );
  }
}

// Styled

const Progressbar = styled.div`
  width: 480px;
  height: 150px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ab9fc;
`;
