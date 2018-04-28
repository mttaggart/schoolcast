import { connect } from "react-redux";
import displayActions  from "../actions/displays";
import itemActions from "../actions/items";
import portalActions from "../actions/portals";
import DisplaysView from "../components/DisplaysView";

const mapStateToProps = (state) => {
    return Object.assign(
        {},
        state.displays,
        {
            items: state.items.items,
            portals: state.portals.portals
        }
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDisplays: token => dispatch(displayActions.getDisplays(token)),
        getItems: (token, id) => dispatch(itemActions.getItems(token)),
        getPortals: (token, id) => dispatch(portalActions.getPortals(token)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplaysView);