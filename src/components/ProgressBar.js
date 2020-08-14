import React from "react";
import { Line } from "rc-progress";

export default class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progressbar">
        <Line
          percent="10"
          strokeWidth="2"
          strokeColor="#ffdd33"
          trailWidth="2"
          trailColor="#ffffff"
        />
      </div>
    );
  }
}
