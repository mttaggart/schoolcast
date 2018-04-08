import React from "react";

class PortalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = PortalForm.defaultPortal;
    }

    static defaultPortal = {
        name: "",
        top: 0,
        left: 0,
        with: 0,
        height: 0,
        portalTypeId: null,
        transitionTypeId: null,
        transiionSpeed: 300,
        feedId: null,
        customCSS: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.portal) {
            return nextProps.portal;
        }
        return PortalForm.defaultPortal;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
            case "first-name":
                this.setState({firstName: val});
                break;
            case "last-name":
                this.setState({lastName: val});
                break;
            case "email":
                this.setState({email: val});
                break;
            case "password":
                this.setState({password: val});
                break;
            case "password-confirm":
                this.setState({passwordConfirm: val});
                break;
            case "is-admin":
                this.setState({isAdmin: e.target.checked});
                break;

        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Portal Name</label>
                    <input type="text" id="portal-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <label>Top</label>
                    <input type="number" id="top" value={this.state.top} onChange={this.changeHandler.bind(this)}/>
                    <label>Left</label>
                    <input type="number" id="left" value={this.state.left} onChange={this.changeHandler.bind(this)}/>
                    <label>Height</label>
                    <input type="range" id="height" min="0" max="100" value={this.state.height} onChange={this.changeHandler.bind(this)}/>
                    <label>Width</label>
                    <input type="range" id="width" min="0" max="100" value={this.state.width} onChange={this.changeHandler.bind(this)}/>
                    <label>Transition Speed</label>
                    <input type="number" id="width" min="0" max="5000" value={this.state.transiionSpeed} onChange={this.changeHandler.bind(this)}/>
                    <label>Custom CSS</label>
                    <textarea value={this.state.customCSS} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default PortalForm;