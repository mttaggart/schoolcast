import React from "react";
import { Route } from "react-router-dom";
import { Callout } from "@blueprintjs/core";
import AdminSection from "../AdminSection";
import FeedForm from "./FeedForm";
import ListItem from "../ListItem";

const Feeds = ({authenticated, token, match, getFeeds, addFeed, updateFeed, deleteFeed, feeds}) => {

    const callout = 
        <Callout title="About Feeds">
            <p>
                Feeds are channels of information. Each <b>Portal </b>
                is attached to a single Feed, but you can make several
                Portals connected to the same Feed.
            </p>
        </Callout>

    return (
        <AdminSection 
            path="feeds"
            heading="Feeds"
            callout={callout}
            authenticated={authenticated}
            assets={feeds}
            getAssets={getFeeds}
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
                render={props => <FeedForm 
                    {...props}
                    submitHandler={updateFeed}
                    deleteHandler={deleteFeed}
                    token={token}
                    title="Edit Feed"
                    assets={feeds}
                />} 
            />
            <Route 
                path={`${match.path}/new`} 
                render={props => <FeedForm 
                    {...props}
                    submitHandler={addFeed}
                    token={token}
                    title="Add Feed"
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Feeds;