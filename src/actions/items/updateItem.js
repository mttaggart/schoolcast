import actionTypes from "./actionTypes";
const apiEndpoint = "/api/items/";

export default function updateItem(token, item) {
    console.log(item);
    return (dispatch) => {
        dispatch(updateItemAttempted());
        const itemsRequest = new Request(
            apiEndpoint + item.id,
            {
                method: "PUT",
                body: JSON.stringify(item),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(itemsRequest)
        .then( res => res.json())
        .then( json => dispatch(updateItemSucceeded(token, json)))
        .catch( err => dispatch(updateItemRejected(err)));
    }
}

function updateItemAttempted() {
    return {
        type: actionTypes.UPDATE_ITEM_ATTEMPTED
    }
}

function updateItemRejected(err) {
    return {
        type: actionTypes.UPDATE_ITEM_REJECTED,
        data: err
    }
}

function updateItemSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_ITEM_SUCCEEDED,
        data
    }
}