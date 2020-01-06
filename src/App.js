import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <UserProvider value={user}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
