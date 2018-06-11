import React from "react";
import { Route } from "react-router-dom";
import { Callout } from "@blueprintjs/core";
import AdminSection from "../AdminSection";
import ItemForm from "./ItemForm";
import ListItem from "../ListItem";

const Items = ({authenticated, token, match, getItems, getFeeds, getPortalTypes, addItem, updateItem, deleteItem, items, feeds, portalTypes}) => {

    const callout = 
        <Callout title="About Items">
            <p>
                Items are single objects to display inside of <b>Portals</b>, 
                which live on parts of a <b>Display</b>. Items are connected 
                to <b>Feeds</b>, indicating what kind of content they are.
            </p>
            <p>
                For <b>Image</b> and <b>Video</b> items, the "content" field
                 should only be URLs to media. Currently, Schoolcast does not 
                 host media locally.
            </p>
        </Callout>

    return (
        <AdminSection 
            path="items"
            heading="Items"
            callout={callout}
            authenticated={authenticated}
            assets={items}
            getAssets={(token) => {
                getItems(token); 
                getFeeds(token);
                getPortalTypes(token);
            }}
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
                render={props => <ItemForm 
                    {...props}
                    submitHandler={updateItem}
                    deleteHandler={deleteItem}
                    token={token}
                    title="Edit Item"
                    assets={items}
                    feeds={feeds}
                    portalTypes={portalTypes}
                />} 
            />
            <Route 
                path={`${match.path}/new`} 
                render={props => <ItemForm 
                    {...props}
                    submitHandler={addItem}
                    token={token}
                    title="Add Item"
                    feeds={feeds}
                    portalTypes={portalTypes}
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Items;