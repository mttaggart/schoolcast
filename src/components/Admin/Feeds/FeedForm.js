import React from "react";

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
        if (nextProps.match.params.feedId) {
            const  id = parseInt(nextProps.match.params.feedId,10);
            const feed =  nextProps.assets.find(asset => {
                return asset.id === id;
            });
            return feed ? feed : FeedForm.defaultFeed;
        }
        return FeedForm.defaultFeed;
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
        }   
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Feed Name</label>
                    <input type="text" id="feed-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <label>Description</label>
                    <textarea id="description" value={this.state.description} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                    { this.props.match.params.itemId ? 
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

export default FeedForm;