import React from "react";
import { Redirect } from "react-router-dom";
import DisplayForm from "./DisplayForm";
import DisplayListDisplay from "./DisplayListItem";

class Displays extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editDisplay: null
        }
    }

    componentDidMount() {
        this.props.getDisplays(this.props.token);
    }

    deleteHandler(id) {
        const deleteConfirm = window.confirm("Are you sure you want to delete this display?");
        if(deleteConfirm) {
            this.props.deleteDisplay(this.props.token, id);
        }
    }

    editHandler(display) {
        this.setState({editDisplay: display});
    }

    updateHandler(token, display) {
        this.props.updateDisplay(this.props.token, display);
        this.setState({editDisplay: null});
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from="/admin/displays" />
            );
        }

        return (
            <div>
                <h3>Displays</h3>    
                <ul>
                    {
                        this.props.displays.map( (display, idx) => {
                            return (
                                <DisplayListDisplay 
                                    key={idx}
                                    display={display}
                                    editHandler={this.editHandler.bind(this)}
                                    deleteHandler={this.deleteHandler.bind(this)}
                                />
                            );
                        })
                    }
                </ul> 
                <DisplayForm
                    title="Add Display" 
                    submitHandler={this.props.addDisplay} 
                    token={this.props.token} 
                />
                <DisplayForm 
                    title="Edit Display"
                    submitHandler={this.updateHandler.bind(this)}
                    token={this.props.token}
                    display={this.state.editDisplay}
                />
            </div>
        );
    }
}

    
    

export default Displays;