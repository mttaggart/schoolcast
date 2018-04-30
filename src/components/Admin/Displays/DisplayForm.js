import React from "react";
import DisplayPreview from "./DisplayPreview";
import { 
    Label, 
    TextArea, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";

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
        if (nextProps.match.params.displayId) {
            const  id = parseInt(nextProps.match.params.displayId,10);
            const display =  nextProps.assets.find(asset => {
                return asset.id === id;
            });
            return display ? display : DisplayForm.defaultDisplay;
        }
        return DisplayForm.defaultDisplay;
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
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
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
                </form>
                <h4>Preview</h4>
                <DisplayPreview 
                    token={this.props.token} 
                    display={this.state} 
                />
            </div>
        )
    }

}

export default DisplayForm;