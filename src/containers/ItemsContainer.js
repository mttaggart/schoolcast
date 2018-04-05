import { connect } from "react-redux";
import itemActions  from "../actions/items";
import Items from "../components/Admin/Items";

const mapStateToProps = (state) => {
    return Object.assign({},state.items);
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: token => dispatch(itemActions.getItems(token)),
        addItem: (token, item) => dispatch(itemActions.addItem(token, item)),
        deleteItem: (token, id) => dispatch(itemActions.deleteItem(token, id)),
        updateItem: (token, item) => dispatch(itemActions.updateItem(token, item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);