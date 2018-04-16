import actionTypes from "./actionTypes";
const apiEndPoint = "/api/displays";

export default function getDisplays(token) {
    return (dispatch) => {
        dispatch(getDisplaysAttempted())   ;
        const displaysRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(displaysRequest)
        .then( res => res.json())
        .then( json => dispatch(getDisplaysSucceeded(json)))
        .catch( err => dispatch(getDisplaysRejected(err)));
    }
}

function getDisplaysAttempted() {
    return {
        type: actionTypes.GET_DISPLAYS_ATTEMPTED
    }
}

function getDisplaysRejected(err) {
    return {
        type: actionTypes.GET_DISPLAYS_REJECTED,
        data: err
    }
}

function getDisplaysSucceeded(data) {
    return {
        type: actionTypes.GET_DISPLAYS_SUCCEEDED,
        data
    }
}