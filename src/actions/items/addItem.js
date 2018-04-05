import actionTypes from "./actionTypes";
const apiEndpoint = "/api/items";

export default function addItem(token, item) {
    return (dispatch) => {
        dispatch(addItemAttempted());
        const itemsRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(itemsRequest)
        .then( res => res.json())
        .then( json => dispatch(addItemSucceeded(token, json)))
        .catch( err => dispatch(addItemRejected(err)));
    }
}

function addItemAttempted() {
    return {
        type: actionTypes.ADD_ITEM_ATTEMPTED
    }
}

function addItemRejected(err) {
    return {
        type: actionTypes.ADD_ITEM_REJECTED,
        data: err
    }
}

function addItemSucceeded(token, data) {
    return {
        type: actionTypes.ADD_ITEM_SUCCEEDED,
        data
    }
}