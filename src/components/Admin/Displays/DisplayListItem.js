import React from "react";

const DisplayListItem = ({display, deleteHandler, editHandler}) => {
    return (
        <li>
            <h4>{display.name}</h4>
            <p>{display.description}</p>
            <p>
                <button type="button" onClick={() => editHandler(display)}>Edit</button>
                <button type="button" onClick={() => deleteHandler(display.id)}>Delete</button>
            </p>
        </li>
    )   
}

export default DisplayListItem;