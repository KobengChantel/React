import React from 'react';
import { useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import React, { Component } from 'react';

function GitHubUser () { 

const {id} = useParams ();
const{login} = useParams();

return (
  <div>
    <h1>User Login: {id}</h1>
    <h2>User Id: {login}</h2>
  </div>
);
}
export default GitHubUser;
// class GitHubUser extends Component {

//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     this.props.history.push("/github");
//   }

//   render() {
//     return (

//       <div>
//         <h1>User Login: {this.props.match.params.login}</h1>
//         <h2>User Id: {this.props.match.params.id}</h2>`
//         <Button variant="primary" onClick={this.handleClick}>
//           Go to GitHub Users
//         </Button>
//       </div>

//     );
//   }
// }
// export default GitHubUser;