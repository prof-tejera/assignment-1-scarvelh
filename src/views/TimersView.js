import { Component } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Timer from "../components/generic/Timer";
import TimerTitle from "../components/generic/TimerTitle";
import styled from "styled-components";

const Container = styled.div`
  background-color: #C0C0C0;
  display: inline-flex;
  //padding: 30px;
  // border: 5px solid blue;
  border-radius: 20%;
  // border-radius: 10px;
  align-items: center;
  margin-left: 60px;
  //float: right;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`;
// align text in a grid
const AlignGrid = {
  margin: "30px"
};

class TimersView extends Component {

  state = {
    // keep the value ot type os stop watch
    timerTypeValues: "Stopwatch"
  };


  handleTimerClick = (timerType) => {

    console.log("I am click" + timerType);
    //this.setState({ timerTypeValues: this.state.timerTypeValues = timerType });
    this.setState({ timerTypeValues: timerType });
  };


  // function;

  // App() {

  timers = [
    { title: "Stopwatch", C: <Stopwatch />, customStyling: { backgroundColor: "#add8e6", alignItems: "center" } },
    { title: "Countdown", C: <Countdown />, customStyling: { backgroundColor: "#ffffe0", alignItems: "center" } },
    { title: "XY", C: <XY />, customStyling: { backgroundColor: "#20b2aa", alignItems: "center" } },
    { title: "Tabata", C: <Tabata />, customStyling: { backgroundColor: "#FF7F7F", alignItems: "center" } }
  ];

  render() {
    let selectedTimerType;
    if (this.state.timerTypeValues === "Stopwatch") {

      // selectedTimerType = <Stopwatch />;
    }

    switch (this.state.timerTypeValues) {
      case "Stopwatch":
        selectedTimerType = <Stopwatch />;
        break;
      case "Countdown":
        selectedTimerType = <Countdown />;
        break;
      case "XY":
        selectedTimerType = <XY />;
        break;
      case "Tabata":
        selectedTimerType = <Tabata />;
        break;

      default:

        selectedTimerType = <Stopwatch />;
    }


    return (
      <Container>
        <div style={AlignGrid}>
          {this.timers.map((timer) => (
            <Timer title={timer.title} onClick={this.handleTimerClick} value={timer.title} style={timer.customStyling}
                   key={timer.title}>
              <TimerTitle>{timer.title}</TimerTitle>
              {timer.C}
            </Timer>
          ))}
        </div>
        {selectedTimerType}

      </Container>
    );

  }
}

//console.log("stop");
export default TimersView;
