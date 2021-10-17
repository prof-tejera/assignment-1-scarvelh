import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  //padding: 10px;
  //border: 1px solid black;
  border-radius: 20%;
  width: 120px;
  height: 75px;
  margin-left: 30px;
  align-items: center;
  padding-bottom: 10px;
  //float: right;
  padding-left: 40px;
  //padding-left: 50%;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`;

class Timer extends Component {

  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)} style={this.props.style}>
        {this.props.value}
      </Container>
    );
  }
}
Timer.propTypes = {

  style: PropTypes.object,
  onClick: PropTypes.func

};
export default Timer;
