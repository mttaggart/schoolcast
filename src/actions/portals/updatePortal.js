import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portals/";

export default function updatePortal(token, portal) {
    return (dispatch) => {
        dispatch(updatePortalAttempted());
        const portalsRequest = new Request(
            apiEndpoint + portal.id,
            {
                method: "PUT",
                body: JSON.stringify(portal),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(portalsRequest)
        .then( res => res.json())
        .then( json => dispatch(updatePortalSucceeded(token, json)))
        .catch( err => dispatch(updatePortalRejected(err)));
    }
}

function updatePortalAttempted() {
    return {
        type: actionTypes.UPDATE_PORTAL_ATTEMPTED
    }
}

function updatePortalRejected(err) {
    return {
        type: actionTypes.UPDATE_PORTAL_REJECTED,
        data: err
    }
}

function updatePortalSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_PORTAL_SUCCEEDED,
        data
    }
}