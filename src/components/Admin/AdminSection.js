import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";

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
                {
                    this.props.assets ? 
                    this.props.assets.map( (asset, idx) => {
                        return this.props.listItem(idx, asset);
                    })
                    : null
                }
                <Link to={`${this.props.match.path}/new`}>
                    <Button 
                        intent={Intent.PRIMARY} 
                        text="Add"
                        icon="add"
                    />
                </Link>
                {this.props.children}
           </div>
        );
    }
}

    
    

export default AdminSection;