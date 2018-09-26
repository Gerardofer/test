import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Projects = () => <h2>Projects</h2>;
const ProjectsNew = () => <h2>New Project</h2>;
const UserProfile = () => <h2>Profile</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/new" component={ProjectsNew} />
          <Route path="/user_profile" component={UserProfile} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
