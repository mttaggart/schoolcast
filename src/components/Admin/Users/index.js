import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import UserForm from "./UserForm";
import ListItem from "../ListItem";

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
            listItem = {(key, asset) => 
                <ListItem key={key} path={match.path} asset={asset}>
                    {asset.lastName}, {asset.firstName} ({asset.email})
                </ListItem>
            }
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