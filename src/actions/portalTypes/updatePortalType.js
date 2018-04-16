import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portaltypes/";

export default function updatePortalType(token, portalType) {
    return (dispatch) => {
        dispatch(updatePortalTypeAttempted());
        const portalTypesRequest = new Request(
            apiEndpoint + portalType.id,
            {
                method: "PUT",
                body: JSON.stringify(portalType),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(portalTypesRequest)
        .then( res => res.json())
        .then( json => dispatch(updatePortalTypeSucceeded(token, json)))
        .catch( err => dispatch(updatePortalTypeRejected(err)));
    }
}

function updatePortalTypeAttempted() {
    return {
        type: actionTypes.UPDATE_PORTALTYPE_ATTEMPTED
    }
}

function updatePortalTypeRejected(err) {
    return {
        type: actionTypes.UPDATE_PORTALTYPE_REJECTED,
        data: err
    }
}

function updatePortalTypeSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_PORTALTYPE_SUCCEEDED,
        data
    }
}