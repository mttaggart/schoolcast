import React from "react";
import DisplayPreview from "./DisplayPreview";
import {
    Label, 
    TextArea, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";
import { deriveById } from "../../../lib/functions";

class DisplayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = DisplayForm.defaultDisplay;
    }

    static defaultDisplay = {
        name: "",
        description: "",
        customCSS: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return deriveById(nextProps, DisplayForm.defaultDisplay);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
    }

    deleteHandler() {
        const confirm = window.confirm(`Are you sure you want to delete ${this.state.name}?`);
        if (confirm) {
            this.props.deleteHandler(this.props.token, this.state.id);
            this.setState(DisplayForm.defaultDisplay);
            this.props.history.goBack();
        }
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "display-name":
                this.setState({name: val});
                break;
            case "display-description":
                this.setState({description: val});
                break;
            case "display-custom-css":
                this.setState({customCSS: val});
                break;
            default:
                break;
        }
    }

    render() {
        console.log(this.props.history);
        return (
            <FormOverlay history={this.props.history}>
                <AdminForm 
                    onSubmit={this.onSubmit.bind(this)}
                    title={this.props.title}
                >
                    <Label>Display Name</Label>
                    <input className="pt-input" type="text" id="display-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <Label>Display Description</Label>
                    <input className="pt-input" type="text" id="display-description" value={this.state.description} onChange={this.changeHandler.bind(this)}/>
                    <Label>Custom CSS</Label>
                    <TextArea 
                        className="pt-fill"
                        id="display-custom-css" 
                        value={this.state.customCSS} 
                        onChange={this.changeHandler.bind(this)}
                    />
                    <ButtonGroup>
                        <Button 
                            type="submit" 
                            intent={Intent.SUCCESS}
                            text="Submit"
                        />
                        { this.props.match.params.displayId ? 
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
                <h4>Preview</h4>
                <DisplayPreview 
                    token={this.props.token} 
                    display={this.state} 
                />
            </FormOverlay>
        )
    }

}

export default DisplayForm;