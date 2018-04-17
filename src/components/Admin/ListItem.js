import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({asset,children,path}) => {
    return (
        <li>
            <Link to={`${path}/edit/` + asset.id}>
                {children}
            </Link>
        </li>
    )   
}

export default ListItem;