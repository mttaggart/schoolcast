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
import AdminForm from "../AdminForm";

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
                    <Label>Portal Name</Label>
                    <input className="pt-input" type="text" id="portal-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <Label>Portal Type</Label>
                    <div className="pt-select">
                        <select id="portal-type" value={this.state.PortalTypeId} onChange={this.changeHandler.bind(this)}>
                            {this.props.portalTypes.map( (portalType, idx) => {
                                return <option key={idx} value={portalType.id}>{portalType.name}</option>
                            })}
                        </select>
                    </div>
                    <Label>Transition Type</Label>
                    <div className="pt-select">
                        <select id="transition-type" value={this.state.TransitionTypeId} onChange={this.changeHandler.bind(this)}>
                            {this.props.transitionTypes.map( (transitionType, idx) => {
                                return <option key={idx} value={transitionType.id}>{transitionType.name}</option>
                            })}
                        </select>
                    </div>
                    <Label>Display</Label>
                    <div className="pt-select">
                        <select id="display" value={this.state.DisplayId} onChange={this.changeHandler.bind(this)}>
                            {this.props.displays.map( (display, idx) => {
                                return <option key={idx} value={display.id}>{display.name}</option>
                            })}
                        </select>
                    </div>
                    <Label>Feed</Label>
                    <div className="pt-select">
                        <select id="feed" value={this.state.FeedId} onChange={this.changeHandler.bind(this)}>
                            {this.props.feeds.map( (feed, idx) => {
                                return <option key={idx} value={feed.id}>{feed.name}</option>
                            })}
                        </select>
                    </div>
                    <Label>Top</Label>
                    <input className="pt-input" type="number" id="top" min="0" max="100" value={this.state.top} onChange={this.changeHandler.bind(this)}/>
                    <Label>Left</Label>
                    <input className="pt-input" type="number" id="left" min="0" max="100" value={this.state.left} onChange={this.changeHandler.bind(this)}/>
                    <Label>Height</Label>
                    <input className="pt-input" type="number" id="height" min="0" max="100" value={this.state.height} onChange={this.changeHandler.bind(this)}/>
                    <Label>Width</Label>
                    <input className="pt-input" type="number" id="width" min="0" max="100" value={this.state.width} onChange={this.changeHandler.bind(this)}/>
                    <Label>Transition Speed</Label>
                    <input className="pt-input" type="number" id="transition-speed" min="0" max="5000" value={this.state.transitionSpeed} onChange={this.changeHandler.bind(this)}/>
                    <Label>Custom CSS</Label>
                    <TextArea 
                        id="custom-css" 
                        value={this.state.customCSS} 
                        onChange={this.changeHandler.bind(this)}
                        className="pt-fill"
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