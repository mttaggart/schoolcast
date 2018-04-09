import React from "react";

const FeedListItem = ({feed, deleteHandler, editHandler}) => {
    return (
        <li>
            <h4>{feed.name}</h4>
            <p>{feed.description}</p>
            <p>
                <button type="button" onClick={() => editHandler(feed)}>Edit</button>
                <button type="button" onClick={() => deleteHandler(feed.id)}>Delete</button>
            </p>
        </li>
    )
}

export default FeedListItem;