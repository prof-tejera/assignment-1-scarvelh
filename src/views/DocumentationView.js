import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import StopWatchButtons from "../components/generic/StopWatchButtons";
import { StopWatchTimerDisplay } from "../components/generic/TimerDisplay";
//import Button from "../components/generic/Button";
import TimersView from "./TimersView";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;
const smallComponent = styled.div`
  //font-size: 2rem;
  width: 20px;
  border: 5px solid blue;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Different Types Timer"
            component={<div style={this.smallComponent}><TimersView /></div>}
            propDocs={[
              {
                prop: "Button",
                description: "Display Default screen",
                type: "Buttons",
                defaultValue: "Display Default screen"
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
