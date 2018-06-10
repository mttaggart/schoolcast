import React from "react";
import { 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import { deriveById } from "../../../lib/functions";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";
import {
    TextInput,
    BigText,
    Select
} from "../../FormControls";

class PortalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = PortalForm.defaultPortal;
    }

    static defaultPortal = {
        name: "",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        DisplayId: undefined,
        FeedId: undefined,
        PortalTypeId: undefined,
        TransitionTypeId: undefined,
        transitionSpeed: 300,
        customCSS: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return deriveById(nextProps, prevState, PortalForm.defaultPortal);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
        this.setState(PortalForm.defaultPortal);
        this.props.history.goBack();
    }

    deleteHandler() {
        const confirm = window.confirm(`Are you sure you want to delete ${this.state.name}?`);
        if (confirm) {
            this.props.deleteHandler(this.props.token, this.state.id);
            this.setState(PortalForm.defaultPortal);
            this.props.history.goBack();
        }
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "portal-name":
                this.setState({name: val});
                break;
            case "portal-type":
                this.setState({PortalTypeId: val});
                break;
            case "feed":
                this.setState({FeedId: val});
                break;
            case "display":
                this.setState({DisplayId: val});
                break;
            case "top":
                this.setState({top: val});
                break;
            case "left":
                this.setState({left: val});
                break;
            case "height":
                this.setState({height: val});
                break;
            case "width":
                this.setState({width: val});
                break;
            case "custom-css":
                this.setState({customCSS: val});
                break;
            case "transition-type":
                this.setState({TransitionTypeId: val});
                break;
            case "transition-speed":
                this.setState({transitionSpeed: val});
                break;
            default:
                break;
        }
    }

    render() {
        console.log(this.state);
        return (
            <FormOverlay history={this.props.history}>
                <AdminForm 
                    onSubmit={this.onSubmit.bind(this)}
                    title={this.props.title}
                >
                    <TextInput
                        id="portal-name"
                        label="Portal Name"
                        value={this.state.name}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <Select 
                        id="portal-type"
                        label="Portal Type"
                        value={this.state.PortalTypeId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.portalTypes}
                    />
                    <Select 
                        id="transition-type"
                        label="Transition Type"
                        value={this.state.TransitionTypeId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.transitionTypes}
                    />
                    <Select 
                        id="display"
                        label="Display"
                        value={this.state.DisplayId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.displays}
                    />
                    <Select 
                        id="feed"
                        label="Feed"
                        value={this.state.FeedId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.feeds}
                    />
                    <TextInput
                        type="number" 
                        id="top"
                        label="Top"
                        min="0"
                        max="100"
                        value={this.state.top}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="number" 
                        id="left"
                        label="Left"
                        min="0"
                        max="100"
                        value={this.state.left}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="number" 
                        id="height"
                        label="Height"
                        min="0"
                        max="100"
                        value={this.state.height}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="number" 
                        id="width"
                        label="Width"
                        min="0"
                        max="100"
                        value={this.state.width}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="number" 
                        id="transition-speed"
                        label="Width"
                        min="0"
                        max="5000"
                        value={this.state.transitionSpeed}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <BigText 
                        id="custom-css"
                        label="Custom CSS"
                        value={this.state.customCSS}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <ButtonGroup large={true}>
                        <Button 
                            type="submit" 
                            intent={Intent.SUCCESS}
                            text="Submit"
                        />
                        { this.props.match.params.id ? 
                            <Button 
                            type="button"
                            onClick={this.deleteHandler.bind(this)} 
                            text="Delete"
                            intent={Intent.DANGER}
                            />
                            : null
                        }
                    </ButtonGroup>
                </AdminForm>
            </FormOverlay>
        )
    }

}

export default PortalForm;