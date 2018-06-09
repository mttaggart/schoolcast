import React from "react";
import { Route } from "react-router-dom";
import { Callout } from "@blueprintjs/core";
import AdminSection from "../AdminSection";
import UserForm from "./UserForm";
import ListItem from "../ListItem";

const Users = ({authenticated, token, match, getUsers, addUser, updateUser, deleteUser, users}) => {

    const callout = 
        <Callout title="About Users">
            <p>
                There are two types of users in SchoolCast: admins and 
                non-admins. Non-admins can view displays, while admins can 
                make changes to them.
            </p>
        </Callout>

    return (
        <AdminSection 
            path="users"
            heading="Users"
            callout={callout}
            authenticated={authenticated}
            assets={users}
            getAssets={getUsers}
            token={token}
            match={match}
            listItem = {(key, asset) => 
                <ListItem key={key} path={match.path} asset={asset}>
                    {asset.lastName}, {asset.firstName} ({asset.email})
                </ListItem>
            }
        >
            
            <Route 
                path={`${match.path}/edit/:id`}
                render={props => <UserForm 
                    {...props}
                    submitHandler={updateUser}
                    deleteHandler={deleteUser}
                    token={token}
                    title="Edit User"
                    assets={users}
                />} 
            />
            <Route 
                path={`${match.path}/new`} 
                render={props => <UserForm 
                    {...props}
                    submitHandler={addUser}
                    token={token}
                    title="Add User"
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Users;