import React from "react";
import { Redirect } from "react-router-dom";
import PortalForm from "./PortalForm";
import PortalListItem from "./PortalListItem";

class Portals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editPortal: null
        }
    }

    componentDidMount() {
        this.props.getPortals(this.props.token);
    }

    deleteHandler(id) {
        const deleteConfirm = window.confirm("Are you sure you want to delete this portal?");
        if(deleteConfirm) {
            this.props.deletePortal(this.props.token, id);
        }
    }

    editHandler(portal) {
        this.setState({editPortal: portal});
    }

    updateHandler(token, portal) {
        this.props.updatePortal(this.props.token, portal);
        this.setState({editPortal: null});
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from="/admin/portals" />
            );
        }

        return (
            <div>
                <h3>Portals</h3>    
                <ul>
                    {
                        this.props.portals.map( (portal, idx) => {
                            return (
                                <PortalListItem 
                                    key={idx}
                                    portal={portal}
                                    editHandler={this.editHandler.bind(this)}
                                    deleteHandler={this.deleteHandler.bind(this)}
                                />
                            );
                        })
                    }
                </ul> 
                <PortalForm
                    title="Add Portal" 
                    submitHandler={this.props.addPortal} 
                    token={this.props.token} 
                />
                <PortalForm 
                    title="Edit Portal"
                    submitHandler={this.updateHandler.bind(this)}
                    token={this.props.token}
                    portal={this.state.editPortal}
                />
            </div>
        );
    }
}

    
    

export default Portals;