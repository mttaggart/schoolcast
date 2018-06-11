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
} from "../../FormControls";

class FeedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = FeedForm.defaultFeed;
    }

    static defaultFeed = {
        name: "",
        description: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return deriveById(nextProps, prevState, FeedForm.defaultFeed);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
        this.setState(FeedForm.defaultFeed);
        this.props.history.goBack();
    }

    deleteHandler() {
        const confirm = window.confirm(`Are you sure you want to delete ${this.state.name}?`);
        if (confirm) {
            this.props.deleteHandler(this.props.token, this.state.id);
            this.setState(FeedForm.defaultFeed);
            this.props.history.goBack();
        }
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "feed-name":
                this.setState({name: val});
                break;
            case "description":
                this.setState({description: val});
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
                        id="feed-name" 
                        label="Feed Name"
                        value={this.state.name}
                        changeHandler={this.changeHandler.bind(this)}

                    />
                    <BigText 
                        id="description"
                        label="Description"
                        value={this.state.description}
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

export default FeedForm;