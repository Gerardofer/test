import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import { connect } from "react-redux";
import * as actions from "../actions";

const Landing = () => <h2>Landing</h2>;
const Projects = () => <h2>Projects</h2>;
const ProjectsNew = () => <h2>New Project</h2>;
const UserProfile = () => <h2>Profile</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/new" component={ProjectsNew} />
            <Route path="/user_profile" component={UserProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
