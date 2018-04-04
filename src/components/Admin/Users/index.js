import React from "react";
import { Redirect } from "react-router-dom";
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
                                    user={user}
                                    editHandler={()=>{console.log("EDIT")}}
                                    deleteHander={this.props.deleteUser}
                                />
                            );
                        })
                    }
                </ul> 
                <UserForm 
                    getUsers={this.props.getUsers} 
                    addUser={this.props.addUser} 
                    token={this.props.token} 
                />
            </div>
        );
    }
}

    
    

export default Users;