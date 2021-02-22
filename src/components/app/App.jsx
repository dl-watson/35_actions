import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Comments } from "../comments/Comments";
import { Posts } from "../posts/Posts";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/:index" component={Comments} />
      </Switch>
    </Router>
  );
};

export default App;
