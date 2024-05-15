import React, { Component } from 'react';
// import './App.css';
import "firebase/compat/auth";
import "firebase/compat/database";
import * as firebase from "firebase/compat/app";
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';


class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
            <Route path="/edit/:id" element={<UserForm />} /> 
            <Route path="/add" element={<UserForm />} />
              <Route exact path="/" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      // <
      //  User
      // />
    );
  }
}
export default App;

class NotFound extends Component {
  render(){
  return <div>Not Found</div>
  }
 }