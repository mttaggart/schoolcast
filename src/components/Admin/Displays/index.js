import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import DisplayForm from "./DisplayForm";
import ListItem from "../ListItem";

const Displays = ({
    authenticated,
    token, 
    match, 
    getDisplays, 
    getDisplayPortals, 
    addDisplay, 
    updateDisplay, 
    deleteDisplay, 
    displays, 
    portals, 
    displayPortals
}) => {

    return (
        <AdminSection 
            path="displays"
            heading="Displays"
            authenticated={authenticated}
            assets={displays}
            getAssets={getDisplays}
            token={token}
            match={match}
            listItem = {(key, asset) => 
                <ListItem key={key} path={match.path} asset={asset}>
                    {asset.name}
                </ListItem>
            }
        >
            
            <Route 
                path={`${match.path}/edit/:displayId`}
                render={props => <DisplayForm 
                    {...props}
                    submitHandler={updateDisplay}
                    deleteHandler={deleteDisplay}
                    getDisplayPortals={getDisplayPortals}
                    displayPortals={displayPortals}
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