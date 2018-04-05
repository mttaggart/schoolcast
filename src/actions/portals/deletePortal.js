import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portals/";

export default function deletePortal(token, id) {
    return (dispatch) => {
        dispatch(deletePortalAttempted());
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
        .then( json => dispatch(deletePortalSucceeded(json)))
        .catch( err => dispatch(deletePortalRejected(err)));
    }
}


function deletePortalAttempted() {
    return {
        type: actionTypes.DELETE_PORTAL_ATTEMPTED
    }
}

function deletePortalRejected(err) {
    return {
        type: actionTypes.DELETE_PORTAL_REJECTED,
        data: err
    }
}

function deletePortalSucceeded(token, data) {
    return {
        type: actionTypes.DELETE_PORTAL_SUCCEEDED,
        data
    }
}