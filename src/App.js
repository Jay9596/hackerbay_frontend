import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

// import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { defaultFunction } from "./actions";
import store from './store';

import SignupForm from "./components/sign-up-form";
import LoginForm from "./components/login-form";
import SimpleComponent from "./components/simple-component";

class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    return (
      <Provider store={store}>
      <Router className="App">
        <div>
          <h1 className='App-title'>Title Template</h1>
          <div className="navbar">
            <ul>
            <li>
                <Link to="/" className="active">HOME</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign-up</Link>
              </li>
            </ul>
            <hr />
          </div>
          <Switch>
          <Route exact path="/" component={SimpleComponent} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(
  mapStateToProps,
  { defaultFunction }
)(App);
