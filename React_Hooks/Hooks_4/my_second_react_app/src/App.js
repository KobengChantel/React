// import React from 'react';
import React, { Component } from 'react';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Rating from './Rating';



class App extends Component {

  render() {
    return (
      <div>
        <Products />
      
      </div>
    );
  }
}
export default App;