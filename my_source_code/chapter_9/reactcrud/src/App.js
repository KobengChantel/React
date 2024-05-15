import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import "firebase/compat/auth";
import "firebase/compat/database";
import * as firebase from "firebase/compat/app";
import User from './User';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <
       User
      />
    );
  }
}
export default App;
