import { Component } from "react";

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="top-content">
          <div className="main-content">MAIN CONTENT</div>
        </div>
        <div className="middle-content">
          <div className="main-content">MAIN CONTENT</div>
          <div className="image-wrapper">IMAGE</div>
          <div className="image-wrapper">IMAGE</div>
          <div className="main-content">MAIN CONTENT</div>
        </div>
        <div className="bottom-content">
          <div className="main-content">MAIN CONTENT</div>
          <button>BUTTON</button>
        </div>
      </div>
    );
  }
}
