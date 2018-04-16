import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import DisplayForm from "./DisplayForm";
import DisplayListItem from "./DisplayListItem";

const Displays = ({authenticated, token, match, getDisplays, addDisplay, updateDisplay, deleteDisplay, displays}) => {

    return (
        <AdminSection 
            path="displays"
            heading="Displays"
            authenticated={authenticated}
            assets={displays}
            getAssets={getDisplays}
            token={token}
            match={match}
            listItem = {(key, asset) => <DisplayListItem key={key} asset={asset} />}
        >
            
            <Route 
                path={`${match.path}/edit/:displayId`}
                render={props => <DisplayForm 
                    {...props}
                    submitHandler={updateDisplay}
                    deleteHandler={deleteDisplay}
                    token={token}
                    title="Edit Display"
                    assets={displays}
                />} 
            />
            <Route 
                path={`${match.path}/new`} 
                render={props => <DisplayForm 
                    {...props}
                    submitHandler={addDisplay}
                    token={token}
                    title="Add Display"
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Displays;