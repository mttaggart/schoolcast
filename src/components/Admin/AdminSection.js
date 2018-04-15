import React from "react";
import { Redirect, Route, Link } from "react-router-dom";

class AdminSection extends React.Component {

    constructor(props) {
        super(props);
    }

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
                <ul>
                    {
                        this.props.assets ? 
                        this.props.assets.map( (asset, idx) => {
                            return this.props.listItem(idx, asset);
                        })
                        : null
                    }
                    <Link to={`${this.props.match.path}/new`}>Add</Link>
                </ul> 
                {this.props.children}
           </div>
        );
    }
}

    
    

export default AdminSection;