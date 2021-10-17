import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import StopWatchButtons from "../components/generic/StopWatchButtons";
import { StopWatchTimerDisplay } from "../components/generic/TimerDisplay";
//import Button from "../components/generic/Button";
//import TimersView from "./TimersView";
import Button from "../components/generic/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  //------------------------------
  
`;

const Title = styled.div`
  font-size: 2rem;
`;
const smallComponent = styled.div`
  //font-size: 2rem;
  width: 20px;
  borderRadius: "20%";
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  //border: 5px solid blue;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="StopWatch Types Tabatab"
            component={<div style={this.smallComponent}>{<Button text={"Tabata"} />}</div>}
            propDocs={[
              {
                prop: "text",
                description: "Stop watch type 'Tabata",
                type: "Buttons",
                defaultValue: "Stop watch Tabata"
              }
            ]}
          />
          <DocumentComponent
            title="Stop Watch Buttons"
            component={<div style={this.smallComponent}><StopWatchButtons /></div>}
            propDocs={[
              {
                prop: "Button",
                description: "Display 'Start' 'Stop','Reset'",
                type: "string",
                defaultValue: "'Start' 'Stop','Reset'"
              }
            ]}
          />
          <DocumentComponent
            title="Stop Watch Display"
            component={<div style={this.smallComponent}><StopWatchTimerDisplay hrs={"00"} mins={"00"} secs={"00"}/></div>}
            propDocs={[
              {
                prop: "hrs:mins:secs",
                description: "Show the stop watch  numbers",
                type: "string",
                defaultValue: "hrs:mins:secs"
              }
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
