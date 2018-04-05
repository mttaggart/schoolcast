import { connect } from "react-redux";
import feedActions  from "../actions/feeds";
import Feeds from "../components/Admin/Feeds";

const mapStateToProps = (state) => {
    return Object.assign({},state.feeds);
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFeeds: token => dispatch(feedActions.getFeeds(token)),
        addFeed: (token, feed) => dispatch(feedActions.addFeed(token, feed)),
        deleteFeed: (token, id) => dispatch(feedActions.deleteFeed(token, id)),
        updateFeed: (token, feed) => dispatch(feedActions.updateFeed(token, feed))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feeds);