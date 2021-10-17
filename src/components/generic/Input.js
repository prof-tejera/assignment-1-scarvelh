import { Component } from "react";
import "./Input.css";

class Input extends Component {

  render() {

    return <input type={this.props.type} className="label-login-input" placeholder={this.props.placeholder}
                  name={this.props.name}
                  onChange={v => console.log(`(HTML Input) hello from ${this.props.name} field - Input Value is: ${v.target.value}`)}
                  value={this.props.value} style={this.props.style} />;
  }
}

export default Input;
