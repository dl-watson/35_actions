import React from "react";
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
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


interface MatchParams {
  index?: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

export default App;
