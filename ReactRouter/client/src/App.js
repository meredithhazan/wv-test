import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import JobMain from "./pages/JobMain";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={JobMain} />
        <Route exact path="/books" component={Books} />

{/*        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />*/}
      </Switch>
    </div>
  </Router>;

export default App;
