import React from "react";
import { Link } from "react-router-dom";

const FeedListItem = ({asset}) => {
    return (
        <li>
            <Link to={`/admin/feeds/edit/` + asset.id}>
                {asset.name}
            </Link>
        </li>
    )
}

export default FeedListItem;