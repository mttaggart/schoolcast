import React from "react";
import { Route } from "react-router-dom";
import { Callout } from "@blueprintjs/core";
import AdminSection from "../AdminSection";
import DisplayForm from "./DisplayForm";
import ListItem from "../ListItem";

const Displays = ({
    authenticated,
    token, 
    match, 
    getDisplays, 
    addDisplay, 
    updateDisplay, 
    deleteDisplay, 
    displays, 
    portals, 
}) => {

    const callout = 
        <Callout title="About Displays">
            <p>
                Displays are the composed products in SchoolCast. On them, you'll see <b>Items</b> appear inside <b>Portals</b>, pulling
                data from their assigned <b>Feeds</b>.
            </p>
        </Callout>

    return (
        <AdminSection 
            path="displays"
            heading="Displays"
            callout={callout}
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
                path={`${match.path}/edit/:id`}
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