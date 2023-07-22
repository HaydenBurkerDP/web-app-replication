import { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="logo-wrapper">LOGO</div>
        <div className="buttons-wrapper">
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
        </div>
        <div className="logo-wrapper">LOGO</div>
      </div>
    );
  }
}
