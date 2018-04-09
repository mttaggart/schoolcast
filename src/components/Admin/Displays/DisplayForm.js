import React from "react";

class DisplayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = DisplayForm.defaultDisplay;
    }

    static defaultDisplay = {
        name: "",
        content: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.display) {
            return nextProps.display;
        }
        return DisplayForm.defaultDisplay;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "display-name":
                this.setState({name: val});
                break;
            case "display-content":
                this.setState({content: val});
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
                    <label>Display Content</label>
                    <textarea id="display-content" value={this.state.content} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default DisplayForm;