import React from "react";

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ItemForm.defaultItem;
    }

    static defaultItem = {
        name: "",
        content: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.item) {
            return nextProps.item;
        }
        return ItemForm.defaultItem;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.props.token, this.state);
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
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Item Name</label>
                    <input type="text" className="item-name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                    <label>Item Content</label>
                    <textarea className="item-content" value={this.state.content} onChange={this.changeHandler.bind(this)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default ItemForm;