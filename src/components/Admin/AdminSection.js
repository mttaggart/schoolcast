import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import ListItem from "./ListItem";
import AddCard from "./AddCard";

const styles = {
    classContainer: {
        display: "flex",
        justifyContent: "flex-start"
    }
}

class AdminSection extends React.Component {

    componentDidMount() {
        this.props.getAssets(this.props.token);
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from={`/admin/${this.props.path}`} />
            );
        }


        return (
            <div>
                <h3>{this.props.heading}</h3>
                <div style={styles.classContainer}>
                {
                    this.props.assets ? 
                    this.props.assets.map( (asset, idx) => {
                        return this.props.listItem(idx, asset);
                    })
                    : null
                }
                </div>    
                <AddCard path={this.props.path} />
                
                {this.props.children}
           </div>
        );
    }
}

    
    

export default AdminSection;