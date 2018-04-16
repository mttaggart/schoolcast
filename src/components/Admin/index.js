import React from "react";
import {Route, Link, Redirect} from "react-router-dom";
import DisplaysContainer from "../../containers/DisplaysContainer";
import FeedsContainer from "../../containers/FeedsContainer";
import ItemsContainer from "../../containers/ItemsContainer";
import PortalsContainer from "../../containers/PortalsContainer";
import UsersContainer from "../../containers/UsersContainer";

const Admin = ({authenticated, token}) => {

    if(!authenticated) {
        return (
            <Redirect to="/login" from="/admin/users" />
        );
    }

    return (
        <div>
            <h2>Admin</h2>
            <nav>
                <ul>
                    <li><Link to="/admin/displays">Displays</Link></li>
                    <li><Link to="/admin/feeds">Feeds</Link></li>
                    <li><Link to="/admin/items">Items</Link></li>
                    <li><Link to="/admin/portals">Portals</Link></li>
                    <li><Link to="/admin/users">Users</Link></li>
                </ul>
            </nav>
            <Route 
                path="/admin/displays" 
                render={({...props}) => 
                    <DisplaysContainer 
                        {...props} 
                        authenticated={authenticated} 
                        token={token} 
                    />
                } 
            /> 
            <Route 
                path="/admin/feeds" 
                render={({...props}) => 
                    <FeedsContainer 
                        {...props} 
                        authenticated={authenticated} 
                        token={token} 
                    />
                } 
            /> 
            <Route 
                path="/admin/items" 
                render={({...props}) => 
                    <ItemsContainer 
                        {...props} 
                        authenticated={authenticated} 
                        token={token} 
                    />
                } 
            /> 
            <Route 
                path="/admin/portals" 
                render={({...props}) => 
                    <PortalsContainer
                        {...props}
                        authenticated={authenticated}
                        token={token}
                    />
                } 
            /> 
            <Route 
                path="/admin/users" 
                render={({...props}) => 
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