import React, { Component } from "react";
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
 import { Provider } from "react-redux";
import store from "./components/store";
import Navigation from "./components/menu/Menu";
import Posts from "./components/Posts";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Submit from "../src/components/Submit";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// import { Link } from "@material-ui/core";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (

      <div>
    <Navigation 
    // user={this.state.user} 
    // loginUser={this.state.loginUser}
     />  


      {/* <Provider store={store}>
        <div className="App">
          <Router>
  
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/submit" component={Submit} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </Provider>  */}
    </div>);
  }
}
export default
  //  connect
  //  (withRouter
  //   (
  App
  // )
  // )
  ;