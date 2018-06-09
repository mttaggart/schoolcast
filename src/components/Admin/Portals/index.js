import React from "react";
import { Route } from "react-router-dom";
import { Callout } from "@blueprintjs/core";
import AdminSection from "../AdminSection";
import PortalForm from "./PortalForm";
import ListItem from "../ListItem";

const Portals = ({authenticated, token, match, getPortals, getPortalTypes, getTransitionTypes, getDisplays, getFeeds, addPortal, updatePortal, deletePortal, displays, portals, portalTypes, transitionTypes, feeds}) => {

    const callout = 
        <Callout title="About Portals">
            <p>
                Portals are connected to <b>Feeds</b>, which provide a 
                stream of <b>Items</b> to display in the Portal. Portals 
                are attached to a single <b>Display</b>, and should be 
                styled with Custom CSS.
            </p>
        </Callout>

    return (
        <AdminSection 
            path="portals"
            heading="Portals"
            callout={callout}
            authenticated={authenticated}
            assets={portals}
            getAssets={() => {getPortals(token); getPortalTypes(token); getTransitionTypes(token); getFeeds(token); getDisplays(token);}}
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
                render={props => <PortalForm 
                    {...props}
                    submitHandler={updatePortal}
                    deleteHandler={deletePortal}
                    portalTypes={portalTypes}
                    transitionTypes={transitionTypes}
                    feeds={feeds}
                    displays={displays}
                    token={token}
                    title="Edit Portal"
                    assets={portals}
                />} 
            />
            <Route 
                path={`${match.path}/new`} 
                render={props => <PortalForm 
                    {...props}
                    submitHandler={addPortal}
                    portalTypes={portalTypes}
                    transitionTypes={transitionTypes}
                    feeds={feeds}
                    displays={displays}
                    token={token}
                    title="Add Portal"
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Portals;