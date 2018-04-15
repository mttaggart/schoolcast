import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import UserForm from "./UserForm";
import UserListItem from "./UserListItem";

const Users = ({authenticated, token, match, getUsers, addUser, updateUser, deleteUser, users}) => {

    return (
        <AdminSection 
            path="users"
            heading="Users"
            authenticated={authenticated}
            assets={users}
            getAssets={getUsers}
            token={token}
            match={match}
            listItem = {(key, asset) => <UserListItem key={key} asset={asset} />}
        >
            
            <Route 
                path={`${match.path}/edit/:userId`}
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