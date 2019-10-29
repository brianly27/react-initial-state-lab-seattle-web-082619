import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    const renderText =
      this.state.secondsLeft !== 0
        ? `${this.state.secondsLeft} seconds left before I go boom!`
        : "Boom!";

    // const timerText = `${this.state.secondsLeft} seconds left before I go boom!`;
    // const boomText = "Boom!";

    // const renderText = () => {
    //   if (this.state.props !== 0) {
    //     return timerText;
    //   } else {
    //     return boomText;
    //   }
    // };

    return <div>{renderText}</div>;
  }
}
