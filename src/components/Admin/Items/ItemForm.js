import React from "react";
import moment from "moment-timezone";
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
    Select,
} from "../../FormControls";

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ItemForm.defaultItem;
    }

    static defaultItem = {
        name: "",
        content: "",
        startDate: moment(Date.now()).tz("America/Los_Angeles").format("YYYY-MM-DD"),
        endDate: moment(Date.now()).tz("America/Los_Angeles").format("YYYY-MM-DD"),
        duration: 5000,
        FeedId: undefined,
        PortalTypeId: undefined
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return deriveById(nextProps, prevState, ItemForm.defaultItem);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
        this.setState(ItemForm.defaultItem);
        this.props.history.goBack();
    }

    deleteHandler() {
        const confirm = window.confirm(`Are you sure you want to delete ${this.state.name}?`);
        if (confirm) {
            this.props.deleteHandler(this.props.token, this.state.id);
            this.setState(ItemForm.defaultItem);
            this.props.history.goBack();
        }
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "item-name":
                this.setState({name: val});
                break;
            case "item-start":
                this.setState({startDate: val});
                break;
            case "item-end":
                this.setState({endDate: val});
                break;
            case "item-content":
                this.setState({content: val});
                break;
            case "feed":
                this.setState({FeedId: val});
                break;
            case "item-type":
                this.setState({PortalTypeId: val});
                break;
            case "duration":
                this.setState({duration: val});
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
                        id="item-name"
                        label="Item Name"
                        value={this.state.name}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <Select 
                        id="feed"
                        label="Feed"
                        value={this.state.FeedId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.feeds}
                    />
                    <Select 
                        id="item-type"
                        label="Item Type"
                        value={this.state.PortalTypeId}
                        changeHandler={this.changeHandler.bind(this)}
                        options={this.props.portalTypes}
                    />
                    <BigText 
                        id="item-content"
                        label="Item Content"
                        value={this.state.content}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="date"
                        id="item-start"
                        label="Item Start Date"
                        value={this.state.startDate}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="date"
                        id="item-end"
                        label="Item End Date"
                        value={this.state.endDate}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="number"
                        id="duration"
                        label="Duration (ms)"
                        min="0"
                        max="3600000"
                        value={this.state.duration}
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

export default ItemForm;