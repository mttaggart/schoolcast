import actionTypes from "./actionTypes";
const apiEndpoint = "/api/transitionTypes";

export default function addTransitionType(token, transitionType) {
    return (dispatch) => {
        dispatch(addTransitionTypeAttempted());
        const transitionTypesRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(transitionType),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(transitionTypesRequest)
        .then( res => res.json())
        .then( json => dispatch(addTransitionTypeSucceeded(token, json)))
        .catch( err => dispatch(addTransitionTypeRejected(err)));
    }
}

function addTransitionTypeAttempted() {
    return {
        type: actionTypes.ADD_TRANSITIONTYPE_ATTEMPTED
    }
}

function addTransitionTypeRejected(err) {
    return {
        type: actionTypes.ADD_TRANSITIONTYPE_REJECTED,
        data: err
    }
}

function addTransitionTypeSucceeded(token, data) {
    return {
        type: actionTypes.ADD_TRANSITIONTYPE_SUCCEEDED,
        data
    }
}