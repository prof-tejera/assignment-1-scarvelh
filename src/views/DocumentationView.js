import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import StopWatchButtons from "../components/generic/StopWatchButtons";
import { StopWatchTimerDisplay } from "../components/generic/TimerDisplay";
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
const DisableComponent = styled.div`
  //font-size: 2rem;
  width: auto;
  border-radius: 20%;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);

  // turn off point to disable
  pointer-events: none;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="StopWatch Types Tabatab"
            component={<DisableComponent>{<Button text={"Tabata"} />}</DisableComponent>}
            propDocs={[
              {
                prop: "text",
                description: "Stop watch type 'Tabata",
                type: "Buttons",
                defaultValue: "Stop watch type Tabata"
              }
            ]}
          />
          <DocumentComponent
            title="Stop Watch Buttons"
            component={<DisableComponent><StopWatchButtons /></DisableComponent>}
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
            component={<DisableComponent><StopWatchTimerDisplay hrs={"00"} mins={"00"}
                                                                secs={"00"} /></DisableComponent>}
            propDocs={[
              {
                prop: "hrs:mins:secs",
                description: "Show the stop watch  numbers",
                type: "string",
                defaultValue: "hrs:mins:secs"
              }
            ]}
          />
          <DocumentComponent
            title="Input field 'hours' minutes' 'seconds'"
            component={<DisableComponent><input type="number" min="0" placeholder={0} /></DisableComponent>}
            propDocs={[
              {
                prop: "type,min,placeholder",
                description: "Data entry field",
                type: "number",
                defaultValue: "0"
              }
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
