
import Login from "../auth/Login";
import Register from "../auth/Register";
import { Provider } from "react-redux";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import store from "../store";
import Submit from "../Submit";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Dashboard from '../dashboard/Dashboard';
import "../../App.css";
import { loginUser } from "../../actions/authActions";



class Navigation extends Component {

  render() {
    const loginUser = this.props.loginUser;
    const user = this.props.user

    return (
      <div>
        {loginUser ? (
          <Navbar>
            <Nav>
              <Provider store={store}>
                <Router>
                  <Link to="/register" className="link"> Register </Link>
                  <Link to="/login" className="link"> Login </Link>
                  <Link to="/" className="link"> Posts</Link>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Router>
              </Provider>
            </Nav>
          </Navbar>
        )
          : (
            <Navbar>
              <Nav>
                <Provider store={store}>
                  <Router>
                    <Link to="/" className="link" username={user}> Posts</Link>
                    <Link to="/submit" className="link" username={user}> Submit</Link>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/submit" component={Submit} />
                  </Router>
                </Provider>
              </Nav>
            </Navbar>
          )}


      </div>
    )
  }
}

export default Navigation;


