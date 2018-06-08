import React from "react";
import moment from "moment-timezone";
import { 
    Label, 
    TextArea, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import { deriveById } from "../../../lib/functions";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";

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
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return deriveById(nextProps, prevState, ItemForm.defaultItem);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
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
                    <Label>Item Name</Label>
                    <input 
                        className="pt-input" 
                        type="text" 
                        id="item-name" 
                        value={this.state.name} 
                        onChange={this.changeHandler.bind(this)}
                    />
                    <div className="pt-select">
                        <select id="feed" value={this.state.FeedId} onChange={this.changeHandler.bind(this)}>
                            {this.props.feeds.map( (feed, idx) => {
                                return <option key={idx} value={feed.id}>{feed.name}</option>
                            })}
                        </select>
                    </div>
                    <Label>Item Content</Label>
                    <TextArea 
                        id="item-content" 
                        value={this.state.content} 
                        onChange={this.changeHandler.bind(this)} 
                    />
                    <Label>Item Start Date</Label>
                    <input className="pt-input" type="date" id="item-start" value={this.state.startDate} onChange={this.changeHandler.bind(this)} />
                    <Label>Item End Date</Label>
                    <input className="pt-input" type="date" id="item-end" value={this.state.endDate} onChange={this.changeHandler.bind(this)} />
                    <Label>Duration</Label>
                    <input className="pt-input" type="number" id="duration" min="0" max="3600000" value={this.state.duration} onChange={this.changeHandler.bind(this)}/>
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