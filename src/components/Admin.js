import React from "react";
import {Route, Link} from "react-router-dom";
import Displays from "./Displays";
import Portals from "./Portals";
import Feeds from "./Feeds";
import Items from "./Items";
import UsersContainer from "../containers/UsersContainer";

const Admin = ({authenticated, token}) => {
    return (
        <div>
            <h2>Admin</h2>
            <nav>
                <ul>
                    <li><Link to="/admin/displays">Displays</Link></li>
                    <li><Link to="/admin/portals">Portals</Link></li>
                    <li><Link to="/admin/feeds">Feeds</Link></li>
                    <li><Link to="/admin/items">Items</Link></li>
                    <li><Link to="/admin/users">Users</Link></li>
                </ul>
            </nav>
            <Route path="/admin/displays" component={Displays} />
            <Route path="/admin/portals" component={Portals} /> 
            <Route path="/admin/feeds" component={Feeds} /> 
            <Route path="/admin/items" component={Items} /> 
            <Route 
                path="/admin/users" 
                render={({props}) => 
                    <UsersContainer 
                        {...props} 
                        authenticated={authenticated} 
                        token={token} 
                    />
                } 
            />                 
        </div>
    );
}

export default Admin;