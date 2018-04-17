import { connect } from "react-redux";
import displayActions  from "../actions/displays";
import feedActions from "../actions/feeds";
import Displays from "../components/Displays";

const mapStateToProps = (state) => {
    return Object.assign(
        {},
        state.displays,
        {feedItems: state.feeds.feedItems}
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDisplays: token => dispatch(displayActions.getDisplays(token)),
        getDisplayPortals: (token, id) => dispatch(displayActions.getDisplayPortals(token, id)),
        getFeedItems: (token, id) => dispatch(feedActions.getFeedItems(token, id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Displays);