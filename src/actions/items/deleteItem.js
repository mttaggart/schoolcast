import actionTypes from "./actionTypes";
const apiEndpoint = "/api/items/";

export default function deleteItem(token, id) {
    return (dispatch) => {
        dispatch(deleteItemAttempted());
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
        .then( json => dispatch(deleteItemSucceeded(json)))
        .catch( err => dispatch(deleteItemRejected(err)));
    }
}


function deleteItemAttempted() {
    return {
        type: actionTypes.DELETE_ITEM_ATTEMPTED
    }
}

function deleteItemRejected(err) {
    return {
        type: actionTypes.DELETE_ITEM_REJECTED,
        data: err
    }
}

function deleteItemSucceeded(token, data) {
    return {
        type: actionTypes.DELETE_ITEM_SUCCEEDED,
        data
    }
}