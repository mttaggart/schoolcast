import React from "react";

const UserListItem = ({user, deleteHandler, editHandler}) => {
    return (
        <li>
            <p>{user.lastName}, {user.firstName} ({user.email})</p>
            <p>
                <button type="button" onClick={() => editHandler(user)}>Edit</button>
                <button type="button" onClick={() => deleteHandler(user.id)}>Delete</button>
            </p>
        </li>
    )
}

export default UserListItem;