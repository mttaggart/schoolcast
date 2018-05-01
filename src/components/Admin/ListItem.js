import React from "react";
import { Link } from "react-router-dom";
import { Card, Elevation } from "@blueprintjs/core";

const styles = {
    width: "20%",
    textAlign: "center"
}

const ListItem = ({asset,children,path}) => {
    return (
        <Card elevation={Elevation.ONE} style={styles}>
            <Link 
                to={`${path}/edit/` + asset.id} 
            >
                {children}
            </Link>
        </Card>
    )   
}

export default ListItem;