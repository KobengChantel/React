import React from 'react';

export default function Welcome () {
  return( 
    <div className=" welcome">
      <h1>Todo-List</h1>
      <div className="login-container">
        <input type="text"/>
        <input type="text"/>
        <button>Sign In</button>
        <a href="">Create an account.</a>
      </div>
    </div>
  )
}