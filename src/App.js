import React, { Component } from "react";
import logo from "./profile.png";
import Profile from "./Components/Profile";

export default class App extends Component {
  state = {
    Info: {
      firstName: "Naima ",
      lastName: " Chokri",
      bio: "I’m a software engineer specializing in building (and occasionally designing) Currently, I’m focused on building web and Mobile Applications.",
      imgSrc: { logo },
      profession: "Web Developer",
      adresse: 'Happy city-Gafsa Tunis (+216) 94-902-044 ',
      email :' naima-chokri@outlook.fr',
    },
    show: false,
    timer:0
  };
  handleShowInfo = () => {
    this.setState({
      ...this.state.Info,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer+1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.show && <Profile state={this.state}/>}
        <button
          className="primary scd"
          onClick={this.handleShowInfo}
          style={{ backgroundColor: "#231E39" }}
        >
         {this.state.show?"Hide-Profile":"Show-Profile"}
        </button>
      </div>
    );
  }
}
