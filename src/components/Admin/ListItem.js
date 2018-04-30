import React from "react";
import { Link } from "react-router-dom";
import { Card, Elevation } from "@blueprintjs/core"

const ListItem = ({asset,children,path}) => {
    return (
        <Card>
            <Link 
                to={`${path}/edit/` + asset.id} 
                elevation={Elevation.TWO}
            >
                {children}
            </Link>
        </Card>
    )   
}

export default ListItem;