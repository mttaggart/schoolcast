import React from "react";

const PortalListItem = ({item, deleteHandler, editHandler}) => {
    return (
        <li>
            <h4>{item.name}</h4>
            <p><b>Feed: </b>{item.Feed.name}</p>
            <p>{item.content}</p>
            <p>
                <button type="button" onClick={() => editHandler(item)}>Edit</button>
                <button type="button" onClick={() => deleteHandler(item.id)}>Delete</button>
            </p>
        </li>
    )
}

export default PortalListItem;