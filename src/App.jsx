import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// pages components
import Home from "./views/Home"
import Dashboard from "./views/Dashboard";
import GraphDetail from "./views/GraphDetail"

// styles
import "./assets/fonts/fonts.css"
import "./app.css"

import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";


function App() {

  const { isLoading } = useAuth();
  const [currentUser, setCurrentUser] = useState({});
  const UserContextValue = {
    currentUser,
    setCurrentUser
  };

  return (
    
      <UserContext.Provider value={UserContextValue}>
      {isLoading ? (
        null
      ) : (
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/:id" component={GraphDetail}/>
          </Switch>
      </React.Fragment>
  )}
  </UserContext.Provider>
  )
}

export default App;
