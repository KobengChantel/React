import React, { Component } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    firebase
    .database()
    .ref('/')
      .on('value', snapshot => {
        console.log(snapshot.val())
      });
  }
  render() {
    return (
      <div>
        <h1>HELLO</h1>
      </div>
    );
  }
}
export default User;