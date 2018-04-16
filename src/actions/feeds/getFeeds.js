import actionTypes from "./actionTypes";
const apiEndPoint = "/api/feeds";

export default function getFeeds(token) {
    return (dispatch) => {
        dispatch(getFeedsAttempted())   ;
        const feedsRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(feedsRequest)
        .then( res => res.json())
        .then( json => dispatch(getFeedsSucceeded(json)))
        .catch( err => dispatch(getFeedsRejected(err)));
    }
}

function getFeedsAttempted() {
    return {
        type: actionTypes.GET_FEEDS_ATTEMPTED
    }
}

function getFeedsRejected(err) {
    return {
        type: actionTypes.GET_FEEDS_REJECTED,
        data: err
    }
}

function getFeedsSucceeded(data) {
    return {
        type: actionTypes.GET_FEEDS_SUCCEEDED,
        data
    }
}