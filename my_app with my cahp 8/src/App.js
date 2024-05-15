import React, { Component } from 'react';
import GitHub from './GitHub';
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHubUser from './GitHubUser';


class App extends Component {
  render() {
    return (
      <div>
        {/* <GitHub /> */}
        <Header />
      </div>
    );
  }
}
export default App;


class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
       
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link> 
                <Nav.Link href="/contact">Contact</Nav.Link> 
                <Nav.Link href="/<path_name>">Path Text</Nav.Link> 
              </Nav>
          

          <Routes>
          <Route path="/github/user/:login/:id" element={<GitHubUser/>} /> 
            <Route path="/github" element={<GitHub/>} />
            <Route exact path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}