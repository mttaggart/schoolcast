import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";

class App extends React.Component {

  componentDidMount() {
    const token = window.sessionStorage.getItem("token")
    if(token) {
      this.props.authorize(token);
    } 
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>SchoolCast</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {
                this.props.authenticated ? 
                  <li>{this.props.user.email} <button type="button" onClick={this.props.logout}>Logout</button></li> : <li><Link to="/login">Login</Link></li>
              }
              
              {this.props.user && this.props.user.isAdmin ? <li><Link to="/admin">Admin</Link></li> : null }
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={ props => <Login {...props} login={this.props.login} error={this.props.error} authenticated={this.props.authenticated}/>} />
          <Route path="/admin" render={ props => <Admin {...props} authenticated={this.props.authenticated} token={this.props.token}/>} />
        </div>
      </Router>
    );
  }

}

export default App;
