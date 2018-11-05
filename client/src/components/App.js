import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Profile from "./Profile";
import Type from "./Type";
import Projects from "./Project";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      //will think about creating a container for the <div>
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/type" component={Type} />
            {/* <Route path="/projects/new" component={ProjectsNew} /> */}
            <Route path="/user_profile" component={Profile} />
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
