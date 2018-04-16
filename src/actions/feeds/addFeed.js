import actionTypes from "./actionTypes";
const apiEndpoint = "/api/feeds";

export default function addFeed(token, feed) {
    return (dispatch) => {
        dispatch(addFeedAttempted());
        const feedsRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(feed),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(feedsRequest)
        .then( res => res.json())
        .then( json => dispatch(addFeedSucceeded(token, json)))
        .catch( err => dispatch(addFeedRejected(err)));
    }
}

function addFeedAttempted() {
    return {
        type: actionTypes.ADD_FEED_ATTEMPTED
    }
}

function addFeedRejected(err) {
    return {
        type: actionTypes.ADD_FEED_REJECTED,
        data: err
    }
}

function addFeedSucceeded(token, data) {
    return {
        type: actionTypes.ADD_FEED_SUCCEEDED,
        data
    }
}