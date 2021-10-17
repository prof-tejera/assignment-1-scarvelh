import React from "react";
import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import styled from "styled-components";
import StopWatchButtons from "../generic/StopWatchButtons";
import { getIntervalTimer } from "../../utils/helpers";

const Container = styled.div`
  //display: flex;
  //width: 250px;
  width: auto;
  height: auto;
  background-color: #add8e6;


  border-radius: 20%;
  align-items: center;
  // padding-left: 10px;
  //float: left;
  //justify-items: center;
  //padding: 30px;
  padding-bottom: 30px;

  /*---------- automation  ------------ */
  animation: shake 1s;
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
  /*/---------------------------------*/
  //position: absolute; 

`;
// align text in a grid
const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",

  // alignItems: "center",

  borderRadius: "20%"
  //width: "auto"
  //paddingLeft:"30px",
  // float: "right"
  //justifyItems: "center"
};


class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.incrementer = null;
  }


  callbackFunction = (childData) => {

    this.setState({ buttonPressed: childData });
    console.log(childData.toString());
    switch (childData.toString()) {
      case "startButton":
        this.stopWatchtimer = getIntervalTimer(this.countUp);
        break;
      case "stopButton":
        clearInterval(this.stopWatchtimer);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        clearInterval(this.stopWatchtimer);
        break;
      default:
        break;
    }

  };
  countUp = () => {
    this.setState({ seconds: this.state.seconds + 1 });
    const { hours, minutes, seconds } = this.state;
     if (seconds === 59) {
      this.setState({ minutes: this.state.minutes + 1 });
      this.setState({ seconds: 0 });

    }
    if (minutes === 59) {
      this.setState({ hours: this.state.minutes + 1 });
      this.setState({ minutes: 0 });
    }
    //when the clock have reach "00:00:00" clear the interval timer
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.stopWatchtimer);
    }

  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <Container>

        <StopWatchTimerDisplay style={ButtonPosition} hrs={hours} mins={minutes} secs={seconds} />
        <div style={ButtonPosition}>

          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default Stopwatch;
