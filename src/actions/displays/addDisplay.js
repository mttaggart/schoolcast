import actionTypes from "./actionTypes";
const apiEndpoint = "/api/displays";

export default function addDisplay(token, display) {
    return (dispatch) => {
        dispatch(addDisplayAttempted());
        const displaysRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(display),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(displaysRequest)
        .then( res => res.json())
        .then( json => dispatch(addDisplaySucceeded(token, json)))
        .catch( err => dispatch(addDisplayRejected(err)));
    }
}

function addDisplayAttempted() {
    return {
        type: actionTypes.ADD_DISPLAY_ATTEMPTED
    }
}

function addDisplayRejected(err) {
    return {
        type: actionTypes.ADD_DISPLAY_REJECTED,
        data: err
    }
}

function addDisplaySucceeded(token, data) {
    return {
        type: actionTypes.ADD_DISPLAY_SUCCEEDED,
        data
    }
}