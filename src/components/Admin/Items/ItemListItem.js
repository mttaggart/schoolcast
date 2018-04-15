import React from "react";
import { Link } from "react-router-dom";

const PortalListItem = ({asset}) => {
    return (
        <li>
            <Link to={`/admin/items/edit/` + asset.id}>
                {asset.name}
            </Link>
        </li>
    )
}

export default PortalListItem;