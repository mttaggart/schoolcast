import React from "react";
import { Route } from "react-router-dom";
import AdminSection from "../AdminSection";
import ItemForm from "./ItemForm";
import ItemListItem from "./ItemListItem";

const Items = ({authenticated, token, match, getItems, getFeeds, addItem, updateItem, deleteItem, items, feeds}) => {

    return (
        <AdminSection 
            path="items"
            heading="Items"
            authenticated={authenticated}
            assets={items}
            getAssets={(token) => {getItems(token); getFeeds(token);}}
            token={token}
            match={match}
            listItem = {(key, asset) => <ItemListItem key={key} asset={asset} />}
        >
            
            <Route 
                path={`${match.path}/edit/:itemId`}
                render={props => <ItemForm 
                    {...props}
                    submitHandler={updateItem}
                    deleteHandler={deleteItem}
                    token={token}
                    title="Edit Item"
                    assets={items}
                    feeds={feeds}
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
                />} 
            />
        </AdminSection>
            
    );
    
} 
    
export default Items;