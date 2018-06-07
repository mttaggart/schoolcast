import React from "react";
import { 
    Label, 
    TextArea, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import { deriveById } from "../../../lib/functions";
import FormOverlay from "../FormOverlay";

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
        return deriveById(nextProps, FeedForm.defaultFeed);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
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
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <Label>Feed Name</Label>
                    <input className="pt-input" type="text" id="feed-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <Label>Description</Label>
                    <TextArea 
                        id="description" 
                        value={this.state.description} 
                        onChange={this.changeHandler.bind(this)}
                    />
                    <ButtonGroup>
                        <Button 
                            type="submit" 
                            intent={Intent.SUCCESS}
                            text="Submit"
                        />
                        { this.props.match.params.feedId ? 
                            <Button 
                            type="button"
                            onClick={this.deleteHandler.bind(this)} 
                            text="Delete"
                            intent={Intent.DANGER}
                            />
                            : null
                        }
                    </ButtonGroup>
                </form>
            </FormOverlay>
        )
    }

}

export default FeedForm;