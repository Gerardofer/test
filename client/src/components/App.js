import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

const Landing = () => <h2>Landing</h2>;
const Projects = () => <h2>Projects</h2>;
const ProjectsNew = () => <h2>New Project</h2>;
const UserProfile = () => <h2>Profile</h2>;

const App = () => {
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
};

export default App;
