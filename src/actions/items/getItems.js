import actionTypes from "./actionTypes";
const apiEndPoint = "/api/items";

export default function getItems(token) {
    return (dispatch) => {
        dispatch(getItemsAttempted())   ;
        const itemsRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(itemsRequest)
        .then( res => res.json())
        .then( json => dispatch(getItemsSucceeded(json)))
        .catch( err => dispatch(getItemsRejected(err)));
    }
}

function getItemsAttempted() {
    return {
        type: actionTypes.GET_ITEMS_ATTEMPTED
    }
}

function getItemsRejected(err) {
    return {
        type: actionTypes.GET_ITEMS_REJECTED,
        data: err
    }
}

function getItemsSucceeded(data) {
    return {
        type: actionTypes.GET_ITEMS_SUCCEEDED,
        data
    }
}