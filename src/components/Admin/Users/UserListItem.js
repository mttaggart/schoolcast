import React from "react";
import { Link } from "react-router-dom";

const UserListItem = ({user, match}) => {
    return (
        <li>
            <Link to={`/admin/users/edit/` + user.id}>
                {user.lastName}, {user.firstName} ({user.email})
            </Link>
        </li>
    )
}

export default UserListItem;