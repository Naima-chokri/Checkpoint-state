import React, { Component } from "react";
import logo from "./profile.png";
//import "./App.css";
import Profile from "./Profile";
import Header from "./Header";
export default class App extends Component {
  state = {
    Person: {
      firstName: "Naima",
      lastName: "Chokri",
      bio: "I’m a software engineer specializing in building (and occasionally designing) Currently, I’m focused on building web and Mobile Applications.",
      imgSrc: { logo },
      profession: "Web Developer",
      adresse: 'Happy city-Gafsa Tunis (+216) 94-902-044 ',
      email :'naima-chokri@outlook.fr',
    },
    show: false,
    comp:0
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prev) => ({
        comp: prev.comp+1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.show && <Profile state={this.state}/>}
        <button
          className="primary ghost"
          onClick={this.handleShowPerson}
          style={{ backgroundColor: "#231E39" }}
        >
          Click me
        </button>
      </div>
    );
  }
}
