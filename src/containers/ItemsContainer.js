import { connect } from "react-redux";
import itemActions  from "../actions/items";
import feedActions from "../actions/feeds";
import portalTypeActions from "../actions/portalTypes";
import Items from "../components/Admin/Items";

const mapStateToProps = (state) => {
    return Object.assign(
        {},
        state.items,
        {
            feeds: state.feeds.feeds,
            portalTypes: state.portalTypes.portalTypes
        }
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: token => dispatch(itemActions.getItems(token)),
        getFeeds: token => dispatch(feedActions.getFeeds(token)),
        getPortalTypes: token => dispatch(portalTypeActions.getPortalTypes(token)),
        addItem: (token, item) => dispatch(itemActions.addItem(token, item)),
        deleteItem: (token, id) => dispatch(itemActions.deleteItem(token, id)),
        updateItem: (token, item) => dispatch(itemActions.updateItem(token, item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);