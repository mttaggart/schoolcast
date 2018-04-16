import actionTypes from "./actionTypes";
const apiEndPoint = "/api/transitionTypes";

export default function getTransitionTypes(token) {
    return (dispatch) => {
        dispatch(getTransitionTypesAttempted())   ;
        const transitionTypesRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(transitionTypesRequest)
        .then( res => res.json())
        .then( json => dispatch(getTransitionTypesSucceeded(json)))
        .catch( err => dispatch(getTransitionTypesRejected(err)));
    }
}

function getTransitionTypesAttempted() {
    return {
        type: actionTypes.GET_TRANSITIONTYPES_ATTEMPTED
    }
}

function getTransitionTypesRejected(err) {
    return {
        type: actionTypes.GET_TRANSITIONTYPES_REJECTED,
        data: err
    }
}

function getTransitionTypesSucceeded(data) {
    return {
        type: actionTypes.GET_TRANSITIONTYPES_SUCCEEDED,
        data
    }
}