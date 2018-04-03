import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login from "../components/Login";
import Home from "./Home";
import Admin from "./Admin";

const App = ({login,logout,authenticated,requested,error,user,token}) => {
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
              authenticated ? 
                <li><button type="button" onClick={logout}>Logout</button></li> : <li><Link to="/login">Login</Link></li>
            }
            
            {user && user.isAdmin ? <li><Link to="/admin">Admin</Link></li> : null }
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={ props => <Login {...props} login={login} error={error} authenticated={authenticated}/>} />
        <Route path="/admin" render={ props => <Admin {...props} authenticated={authenticated} token={token}/>} />
      </div>
    </Router>
  );
}

export default App;
