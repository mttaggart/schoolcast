import React from 'react';
import styles from "./App.css";
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Admin from "./Admin";
import DisplaysViewContainer from "../containers/DisplaysViewContainer";

class App extends React.Component {

  componentDidMount() {
    const token = window.sessionStorage.getItem("token")
    if(token) {
      this.props.authorize(token);
    } 
  }

  render() {
    const history = createBrowserHistory()
    return (
      <Router>
        <div style={styles}>
          <Nav 
            user={this.props.user} 
            login={this.props.login}
            authenticated={this.props.authenticated}
          />
          <Route exact path="/" component={Home} />
          <Route 
            path="/login" 
            render={ props => 
              <Login 
                {...props} 
                login={this.props.login} 
                error={this.props.error} 
                authenticated={this.props.authenticated}
              />
            } 
          />
          <Route 
            path="/displays" 
            render={ props => 
              <DisplaysViewContainer 
                {...props} 
                authenticated={this.props.authenticated} 
                token={this.props.token} 
              />
            } 
          />
          <Route 
            path="/admin" 
            render={ props => 
              <Admin 
                {...props} 
                authenticated={this.props.authenticated} 
                token={this.props.token}
              />
            } 
          />
        </div>
      </Router>
    );
  }

}

export default App;
