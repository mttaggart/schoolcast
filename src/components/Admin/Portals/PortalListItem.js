import React from "react";

const PortalListItem = ({portal, deleteHandler, editHandler}) => {
    return (
        <li>
            <h4>{portal.name}</h4>
            <p>{portal.description}</p>
            <p><b>Display: </b>{portal.Display.name}</p>
            <p><b>Portal Type: </b>{portal.PortalType.name}</p>
            <p><b>Transition Type: </b>{portal.TransitionType.name}</p>
            <p>
                <button type="button" onClick={() => editHandler(portal)}>Edit</button>
                <button type="button" onClick={() => deleteHandler(portal.id)}>Delete</button>
            </p>
        </li>
    )
}

export default PortalListItem;