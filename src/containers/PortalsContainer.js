import { connect } from "react-redux";
import portalActions  from "../actions/portals";
import portalTypeActions  from "../actions/portalTypes";
import feedActions from "../actions/feeds";
import displayActions from "../actions/displays";
import transitionTypeActions from "../actions/transitionTypes";
import Portals from "../components/Admin/Portals";

const mapStateToProps = (state) => {
    return Object.assign(
        {},
        state.portals,
        {
            portalTypes: state.portalTypes.portalTypes,
            feeds: state.feeds.feeds,
            displays: state.displays.displays,
            transitionTypes: state.transitionTypes.transitionTypes
        }
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPortals: token => dispatch(portalActions.getPortals(token)),
        getPortalTypes: token => dispatch(portalTypeActions.getPortalTypes(token)),
        getTransitionTypes: token => dispatch(transitionTypeActions.getTransitionTypes(token)),
        getFeeds: token => dispatch(feedActions.getFeeds(token)),
        getDisplays: token => dispatch(displayActions.getDisplays(token)),
        addPortal: (token, portal) => dispatch(portalActions.addPortal(token, portal)),
        deletePortal: (token, id) => dispatch(portalActions.deletePortal(token, id)),
        updatePortal: (token, portal) => dispatch(portalActions.updatePortal(token, portal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Portals);