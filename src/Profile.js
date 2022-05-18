import React, { Component } from 'react'

export default class Profile extends Component {
    state={
        comp:0
    }
    componentDidMount = () => {
        setInterval(() => {
          this.setState((pre) => ({
            comp: pre.comp+1,
          }));
        }, 1000);
      };
  render() {
    return (
      <div><div>
      <div className="card-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block"><img src={this.props.state.Person.imgSrc.logo} alt="user"/></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
            </ul>
        </div>
        </nav>
        <div className="container-fluid p-0">
            {/* About*/}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                <h1 className="mb-0">
                {this.props.state.Person.firstName}
                    <span className="text-primary">{this.props.state.Person.lastName}</span>
                </h1>
                <div className="subheading mb-5">
                  I'm a {this.props.state.Person.profession} based in {this.props.state.Person.adresse}
                    <a href="mailto:naima-chori@outlook.fr">{this.props.state.Person.email}</a>
                </div>
                <p className="lead mb-5">{this.props.state.Person.bio}</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/naima-chokri-57208b11b/"><i className="fab fa-linkedin-in" /></a>
                    <a className="social-icon" href="https://github.com/Naima-chokri"><i className="fab fa-github" /></a>
                    <a className="social-icon" href="https://twitter.com/Naima_Chokri"><i className="fab fa-twitter" /></a>
                    <a className="social-icon" href="https://fr-fr.facebook.com/naima.chokri.58"><i className="fab fa-facebook-f" /></a>
                </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
        <div className="buttons">
          <button className="primary">{this.state.comp}</button>
        </div>
      </div>
    </div></div>
    )
  }
}
