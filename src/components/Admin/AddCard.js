import React from "react";
import { Link } from "react-router-dom";
import { Card, Elevation, Icon, Colors } from "@blueprintjs/core";

const styles = {
    width: "100%",
    textAlign: "center",
    background: Colors.BLUE1,
}

const AddCard = ({path}) => {

    return (
        <Card 
            elevation={Elevation.ONE} 
            style={styles}
            interactive={true}
        >
            <Link 
                to={`/admin/${path}/new`}
                style={{color:Colors.WHITE}} 
            >
                <Icon icon="add" />
                <span> New</span>
            </Link>
        </Card>
    )   
}

export default AddCard;