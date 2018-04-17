import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import PortalForm from "./PortalForm";
import PortalListItem from "./PortalListItem";

const Portals = ({authenticated, token, match, getPortals, getPortalTypes, getTransitionTypes, getDisplays, getFeeds, addPortal, updatePortal, deletePortal, displays, portals, portalTypes, transitionTypes, feeds}) => {

    return (
        <AdminSection 
            path="portals"
            heading="Portals"
            authenticated={authenticated}
            assets={portals}
            getAssets={() => {getPortals(token); getPortalTypes(token); getTransitionTypes(token); getFeeds(token); getDisplays(token);}}
            token={token}
            match={match}
            listItem = {(key, asset) => <PortalListItem key={key} asset={asset} />}
        >
            
            <Route 
                path={`${match.path}/edit/:portalId`}
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