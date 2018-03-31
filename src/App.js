import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: {
        authenticated: false,
        user: null,
        token: null
      }
    }
  }

  authHandler(auth) {
    this.setState({
      auth
    });
    window.sessionStorage.setItem("token",auth.token);
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
              <li><Link to="/login">Login</Link></li>
              {this.state.auth.user && this.state.auth.user.isAdmin ? <li><Link to="/admin">Admin</Link></li> : null }
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={(props) => <Login  {...props} authHandler={this.authHandler.bind(this)} auth={this.state.auth}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
