import React from "react";

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
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Display Name</label>
                    <input type="text" id="display-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <label>Display Description</label>
                    <input type="text" id="display-description" value={this.state.description} onChange={this.changeHandler.bind(this)}/>
                    <label>Custom CSS</label>
                    <textarea id="display-custom-css" value={this.state.customCSS} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                    { this.props.match.params.displayId ? 
                        <button 
                            type="button"
                            onClick={this.deleteHandler.bind(this)} 
                        >
                            Delete
                        </button>
                        : null
                    }
                </form>
            </div>
        )
    }

}

export default DisplayForm;