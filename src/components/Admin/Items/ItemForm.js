import React from "react";

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ItemForm.defaultItem;
    }

    static defaultItem = {
        name: "",
        content: "",
        duration: 5000,
        FeedId: undefined,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.itemId) {
            const  id = parseInt(nextProps.match.params.itemId,10);
            const item =  nextProps.assets.find(asset => {
                return asset.id === id;
            });
            return item ? item : ItemForm.defaultItem;
        }
        return ItemForm.defaultItem;
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
        const className = e.target.className;
        const val = e.target.value;

        switch(className) {
            case "item-name":
                this.setState({name: val});
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
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Item Name</label>
                    <input type="text" className="item-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <select id="feed" value={this.state.FeedId} onChange={this.changeHandler.bind(this)}>
                        {this.props.feeds.map( (feed, idx) => {
                            return <option key={idx} value={feed.id}>{feed.name}</option>
                        })}
                    </select>
                    <label>Item Content</label>
                    <textarea className="item-content" value={this.state.content} onChange={this.changeHandler.bind(this)}></textarea>
                    <label>Duration</label>
                    <input type="number" id="duration" min="0" max="3600000" value={this.state.transitionSpeed} onChange={this.changeHandler.bind(this)}/>
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

export default ItemForm;