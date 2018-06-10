import React from "react";
import DisplayPreview from "./DisplayPreview";
import {
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";
import { deriveById } from "../../../lib/functions";
import {
    TextInput,
    BigText,
} from "../../FormControls";

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
        return deriveById(nextProps, prevState, DisplayForm.defaultDisplay);
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
        return (
            <FormOverlay history={this.props.history}>
                <AdminForm 
                    onSubmit={this.onSubmit.bind(this)}
                    title={this.props.title}
                >
                    <TextInput
                        id="display-name"
                        label="Display Name"
                        value={this.state.name}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        id="display-description"
                        label="Display Description"
                        value={this.state.description}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <BigText 
                        id="display-custom-css"
                        label="Custom CSS (as JSON)"
                        placeholder={`{"color": "blue"}`}
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
                <h4 style={{color: "white"}}>Preview</h4>
                <DisplayPreview 
                    token={this.props.token} 
                    display={this.state} 
                />
            </FormOverlay>
        )
    }

}

export default DisplayForm;