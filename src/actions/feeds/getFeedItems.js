import actionTypes from "./actionTypes";
const apiEndPoint = "/api/feeds";

export default function getFeedItems(token,id) {
    return (dispatch) => {
        dispatch(getFeedItemsAttempted())   ;
        const feedItemsRequest = new Request(
            `${apiEndPoint}/${id}/items`,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(feedItemsRequest)
        .then( res => res.json())
        .then( json => dispatch(getFeedItemsSucceeded(json)))
        .catch( err => dispatch(getFeedItemsRejected(err)));
    }
}

function getFeedItemsAttempted() {
    return {
        type: actionTypes.GET_FEEDITEMS_ATTEMPTED
    }
}

function getFeedItemsRejected(err) {
    return {
        type: actionTypes.GET_FEEDITEMS_REJECTED,
        data: err
    }
}

function getFeedItemsSucceeded(data) {
    return {
        type: actionTypes.GET_FEEDITEMS_SUCCEEDED,
        data
    }
}