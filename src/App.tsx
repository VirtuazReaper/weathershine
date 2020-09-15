import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  routes
} from './routes'

console.log(routes)

function App() {

  return (
      <Router>
        <Switch>
            { routes.map((route) => {
                return (
                    <Route path={ route.path } exact={ route.exact}>
                        <route.child/>
                    </Route>
                )
            }
            ) }
        </Switch>
      </Router>
  );
}

export default App;
