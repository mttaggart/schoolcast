import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Menu, MenuItem } from "@blueprintjs/core";

const AdminMenu = ({history}) => {
    return (
        
        <Menu>
            <MenuItem 
                icon="desktop"
                text="Displays"
                onClick={() => history.push("/admin/displays")}
            />
            <MenuItem 
                icon="feed"
                text="Feeds"
                onClick={() => history.push("/admin/feeds")}
            />
            <MenuItem 
                icon="document"
                text="Items"
                onClick={() => history.push("/admin/items")}
            />
            <MenuItem 
                icon="layout-circle"
                text="Portals"
                onClick={() => history.push("/admin/portals")}
            />
            <MenuItem 
                icon="desktop"
                text="Displays"
                onClick={() => history.push("/admin/displays")}
            />
            <MenuItem 
                icon="people"
                text="Users"
                onClick={() => history.push("/admin/users")}
            />
        </Menu>
    )
}

export default withRouter(AdminMenu);