import React from "react";
import { Link } from "react-router-dom";

const UserListItem = ({asset}) => {
    return (
        <li>
            <Link to={`/admin/users/edit/` + asset.id}>
                {asset.lastName}, {asset.firstName} ({asset.email})
            </Link>
        </li>
    )
}

export default UserListItem;