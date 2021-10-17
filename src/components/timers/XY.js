import React from "react";
import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import styled from "styled-components";
import { customStyleInput } from "./Countdown";

const Container = styled.div`
  //width: 200px;
  width: auto;
  //height: 300px;
  height: auto;
  background-color: #20b2aa;
  display: inline-block;
  //padding: 20px;
  //border: 1px solid black;
  border-radius: 20%;
  align-items: center;
  //margin: 50px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 20px;
  //margin-left: 20px;
  animation: shake 0.8s;
  @keyframes shake {
    0% {
      transform: translateX(0)
    }
    25% {
      transform: translateX(25px);
    }

    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0px);
    }
  };
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`;
const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  alignItems: "center",
  //border: ".1rem red solid",
  borderRadius: "20%",
  //float: "top"
  paddingTop: "20px"
};

class XY extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      buttonPressed: ""
    };

  }

  callbackFunction = (childData) => {

    this.setState({ buttonPressed: childData });
    console.log(childData.toString());
    switch (childData.toString()) {
      case "startButton":
        this.xyTimer = setInterval(this.countDown, 1000);
        break;
      case "stopButton":
        clearInterval(this.xyTime);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        clearInterval(this.xyTime);
        break;
      default:
        break;
    }

  };
  inputHandler = (e) => {
    //this.setState({ [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "hours":
        this.setState({ hours: e.target.value });
        break;
      case "minutes":
        this.setState({ minutes: e.target.value });
        break;
      case "seconds":
        this.setState({ seconds: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <Container>
        <StopWatchTimerDisplay hrs={hours} mins={minutes} secs={seconds} />

        <p>(Hours)</p>
        <input ref={this.hoursInput} type="number" placeholder={0} name="hours" onChange={this.inputHandler} min="0"
               style={customStyleInput} />
        <p>(Minutes)</p>
        <input ref={this.minutesInput} type="number" placeholder={0} name="minutes" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <p>(Seconds)</p>
        <input ref={this.secondsInput} type="number" placeholder={0} name="seconds" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <p>Repeat number of Times</p>
        <input ref={this.secondsInput} type="number" placeholder={0} name="numTimes" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <div style={ButtonPosition}>
          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default XY;
