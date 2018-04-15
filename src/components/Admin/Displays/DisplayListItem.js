import React from "react";
import { Link } from "react-router-dom";

const DisplayListItem = ({asset}) => {
    return (
        <li>
            <Link to={`/admin/displays/edit/` + asset.id}>
                {asset.name}
            </Link>
        </li>
    )   
}

export default DisplayListItem;