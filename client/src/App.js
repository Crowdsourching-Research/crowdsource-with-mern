import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Menu from "./components/menu/Menu";


import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Posts from "./components/Posts"
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Submit from "./components/Submit"
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
    // const { path } = this.props.match;
    return (
      <Provider store={store}>
    
      <div className="App">
        {/* <Navbar /> */}
        {/* <Menu /> */}
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/submit" component={Submit} />  */}
        {/* <Route exact path="/posts" component={Posts} /> */}
        <Router>
          <div>
          <Link to="/register"  className="link"> Register </Link>
          <Link to="/login" className="link"> Login </Link>
          <Link to="/submit" className="link"> Submit</Link>
        </div>
        
          
            {/* <Switch> */}
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              <Route  exact path="/" component={Posts} />
              <Route  exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/submit" component={Submit} />
             {/* </Switch> */}
          </Router> 
        
        
      </div>
      // 
       </Provider>
    );
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