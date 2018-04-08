import React from "react";
import { Redirect } from "react-router-dom";
import ItemForm from "./ItemForm";
import ItemListItem from "./ItemListItem";

class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editItem: null
        }
    }

    componentDidMount() {
        this.props.getItems(this.props.token);
    }

    deleteHandler(id) {
        const deleteConfirm = window.confirm("Are you sure you want to delete this item?");
        if(deleteConfirm) {
            this.props.deleteItem(this.props.token, id);
        }
    }

    editHandler(item) {
        this.setState({editItem: item});
    }

    updateHandler(token, item) {
        this.props.updateItem(this.props.token, item);
        this.setState({editItem: null});
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from="/admin/items" />
            );
        }

        return (
            <div>
                <h3>Items</h3>    
                <ul>
                    {
                        this.props.items.map( (item, idx) => {
                            return (
                                <ItemListItem 
                                    key={idx}
                                    item={item}
                                    editHandler={this.editHandler.bind(this)}
                                    deleteHandler={this.deleteHandler.bind(this)}
                                />
                            );
                        })
                    }
                </ul> 
                <ItemForm
                    title="Add Item" 
                    submitHandler={this.props.addItem} 
                    token={this.props.token} 
                />
                <ItemForm 
                    title="Edit Item"
                    submitHandler={this.updateHandler.bind(this)}
                    token={this.props.token}
                    item={this.state.editItem}
                />
            </div>
        );
    }
}

    
    

export default Items;