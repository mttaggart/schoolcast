import actionTypes from "./actionTypes";
const apiEndpoint = "/api/feeds/";

export default function updateFeed(token, feed) {
    return (dispatch) => {
        dispatch(updateFeedAttempted());
        const feedsRequest = new Request(
            apiEndpoint + feed.id,
            {
                method: "PUT",
                body: JSON.stringify(feed),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(feedsRequest)
        .then( res => res.json())
        .then( json => dispatch(updateFeedSucceeded(token, json)))
        .catch( err => dispatch(updateFeedRejected(err)));
    }
}

function updateFeedAttempted() {
    return {
        type: actionTypes.UPDATE_FEED_ATTEMPTED
    }
}

function updateFeedRejected(err) {
    return {
        type: actionTypes.UPDATE_FEED_REJECTED,
        data: err
    }
}

function updateFeedSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_FEED_SUCCEEDED,
        data
    }
}