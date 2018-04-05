import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portals";

export default function addPortal(token, portal) {
    return (dispatch) => {
        dispatch(addPortalAttempted());
        const portalsRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(portal),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(portalsRequest)
        .then( res => res.json())
        .then( json => dispatch(addPortalSucceeded(token, json)))
        .catch( err => dispatch(addPortalRejected(err)));
    }
}

function addPortalAttempted() {
    return {
        type: actionTypes.ADD_PORTAL_ATTEMPTED
    }
}

function addPortalRejected(err) {
    return {
        type: actionTypes.ADD_PORTAL_REJECTED,
        data: err
    }
}

function addPortalSucceeded(token, data) {
    return {
        type: actionTypes.ADD_PORTAL_SUCCEEDED,
        data
    }
}