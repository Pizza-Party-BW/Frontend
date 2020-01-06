import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

// Components
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
  const user = {};

  return (
    <UserProvider value={user}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
