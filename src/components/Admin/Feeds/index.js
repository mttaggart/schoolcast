import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import FeedForm from "./FeedForm";
import ListItem from "../ListItem";

const Feeds = ({authenticated, token, match, getFeeds, addFeed, updateFeed, deleteFeed, feeds}) => {
    console.log(feeds);
    return (
        <AdminSection 
            path="feeds"
            heading="Feeds"
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
                path={`${match.path}/edit/:feedId`}
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