import actionTypes from "./actionTypes";
const apiEndpoint = "/api/displays/";

export default function updateDisplay(token, display) {
    return (dispatch) => {
        dispatch(updateDisplayAttempted());
        const displaysRequest = new Request(
            apiEndpoint + display.id,
            {
                method: "PUT",
                body: JSON.stringify(display),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(displaysRequest)
        .then( res => res.json())
        .then( json => dispatch(updateDisplaySucceeded(token, json)))
        .catch( err => dispatch(updateDisplayRejected(err)));
    }
}

function updateDisplayAttempted() {
    return {
        type: actionTypes.UPDATE_DISPLAY_ATTEMPTED
    }
}

function updateDisplayRejected(err) {
    return {
        type: actionTypes.UPDATE_DISPLAY_REJECTED,
        data: err
    }
}

function updateDisplaySucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_DISPLAY_SUCCEEDED,
        data
    }
}