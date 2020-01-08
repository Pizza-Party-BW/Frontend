import React from "react";
import { Route, Switch } from "react-router-dom";
import { StateProvider } from "./contexts/StateContext";
import { PrivateRoute } from "./utils/PrivateRoute";

// Components
import NavBar from "./components/NavBar";
import Landing from "./components/landing/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

// Initial State
import initialState from "./reducers/initialState";

// Reducers
import { rootReducer } from "./reducers";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </StateProvider>
  );
}

export default App;
