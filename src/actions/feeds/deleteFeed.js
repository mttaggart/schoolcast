import actionTypes from "./actionTypes";
const apiEndpoint = "/api/feeds/";

export default function deleteFeed(token, id) {
    return (dispatch) => {
        dispatch(deleteFeedAttempted());
        const deleteRequest = new Request(
            apiEndpoint + id,
            {
                method: "DELETE",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(deleteRequest)
        .then( res => res.json())
        .then( json => dispatch(deleteFeedSucceeded(json)))
        .catch( err => dispatch(deleteFeedRejected(err)));
    }
}


function deleteFeedAttempted() {
    return {
        type: actionTypes.DELETE_FEED_ATTEMPTED
    }
}

function deleteFeedRejected(err) {
    return {
        type: actionTypes.DELETE_FEED_REJECTED,
        data: err
    }
}

function deleteFeedSucceeded(data) {
    return {
        type: actionTypes.DELETE_FEED_SUCCEEDED,
        data
    }
}