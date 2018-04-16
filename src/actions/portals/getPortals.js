import actionTypes from "./actionTypes";
const apiEndPoint = "/api/portals";

export default function getPortals(token) {
    return (dispatch) => {
        dispatch(getPortalsAttempted())   ;
        const portalsRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(portalsRequest)
        .then( res => res.json())
        .then( json => dispatch(getPortalsSucceeded(json)))
        .catch( err => dispatch(getPortalsRejected(err)));
    }
}

function getPortalsAttempted() {
    return {
        type: actionTypes.GET_PORTALS_ATTEMPTED
    }
}

function getPortalsRejected(err) {
    return {
        type: actionTypes.GET_PORTALS_REJECTED,
        data: err
    }
}

function getPortalsSucceeded(data) {
    return {
        type: actionTypes.GET_PORTALS_SUCCEEDED,
        data
    }
}