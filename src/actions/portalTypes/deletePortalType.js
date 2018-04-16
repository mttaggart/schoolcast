import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portalTypes/";

export default function deletePortalType(token, id) {
    return (dispatch) => {
        dispatch(deletePortalTypeAttempted());
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
        .then( json => dispatch(deletePortalTypeSucceeded(json)))
        .catch( err => dispatch(deletePortalTypeRejected(err)));
    }
}


function deletePortalTypeAttempted() {
    return {
        type: actionTypes.DELETE_PORTALTYPE_ATTEMPTED
    }
}

function deletePortalTypeRejected(err) {
    return {
        type: actionTypes.DELETE_PORTALTYPE_REJECTED,
        data: err
    }
}

function deletePortalTypeSucceeded(data) {
    return {
        type: actionTypes.DELETE_PORTALTYPE_SUCCEEDED,
        data
    }
}