import React from "react";
import { Redirect, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";
import UserListItem from "./UserListItem";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.token);
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from="/admin/users" />
            );
        }

        return (
            <div>
                <h3>Users</h3>    
                <ul>
                    {
                        this.props.users.map( (user, idx) => {
                            return (
                                <UserListItem 
                                    key={idx}
                                    user={user}
                                />
                            );
                        })
                    }
                    <Link to="/admin/users/new">Add User</Link>
                </ul> 
                <Route 
                    path={`${this.props.match.path}/edit/:userId`}
                    render={props => <UserForm 
                        {...props}
                        submitHandler={this.props.updateUser}
                        token={this.props.token}
                        title="Edit User"
                        users={this.props.users}
                    />} 
                />
                <Route 
                    path={`${this.props.match.path}/new`} 
                    render={props => <UserForm 
                        {...props}
                        submitHandler={this.props.addUser}
                        token={this.props.token}
                        title="Add User"
                    />} 
                />
           </div>
        );
    }
}

    
    

export default Users;