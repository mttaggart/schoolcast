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
        width: 0,
        height: 0,
        PortalTypeId: undefined,
        TransitionTypeId: undefined,
        transitionSpeed: 300,
        FeedId: undefined,
        customCSS: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.portalId) {
            const  id = parseInt(nextProps.match.params.portalId,10);
            const portal =  nextProps.assets.find(asset => {
                return asset.id === id;
            });
            return portal ? portal : PortalForm.defaultPortal;
        }
        return PortalForm.defaultPortal;
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
            case "transition-speed":
                this.setState({transitionSpeed: val});
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
                    <label>Portal Type</label>
                    <select id="portal-type" value={this.state.PortalTypeId} onChange={this.changeHandler.bind(this)}>
                        {this.props.portalTypes.map( (portalType, idx) => {
                            return <option key={idx} value={portalType.id}>{portalType.name}</option>
                        })}
                    </select>
                    <label>Top</label>
                    <input type="number" id="top" value={this.state.top} onChange={this.changeHandler.bind(this)}/>
                    <label>Left</label>
                    <input type="number" id="left" value={this.state.left} onChange={this.changeHandler.bind(this)}/>
                    <label>Height</label>
                    <input type="range" id="height" min="0" max="100" value={this.state.height} onChange={this.changeHandler.bind(this)}/>
                    <label>Width</label>
                    <input type="range" id="width" min="0" max="100" value={this.state.width} onChange={this.changeHandler.bind(this)}/>
                    <label>Transition Speed</label>
                    <input type="number" id="transition-speed" min="0" max="5000" value={this.state.transitionSpeed} onChange={this.changeHandler.bind(this)}/>
                    <label>Custom CSS</label>
                    <textarea id="custom-css" value={this.state.customCSS} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                    { this.props.match.params.portalId ? 
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

export default PortalForm;