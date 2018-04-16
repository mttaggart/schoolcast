import actionTypes from "./actionTypes";
const apiEndpoint = "/api/portalTypes";

export default function addPortalType(token, portalType) {
    return (dispatch) => {
        dispatch(addPortalTypeAttempted());
        const portalTypesRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify(portalType),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(portalTypesRequest)
        .then( res => res.json())
        .then( json => dispatch(addPortalTypeSucceeded(token, json)))
        .catch( err => dispatch(addPortalTypeRejected(err)));
    }
}

function addPortalTypeAttempted() {
    return {
        type: actionTypes.ADD_PORTALTYPE_ATTEMPTED
    }
}

function addPortalTypeRejected(err) {
    return {
        type: actionTypes.ADD_PORTALTYPE_REJECTED,
        data: err
    }
}

function addPortalTypeSucceeded(token, data) {
    return {
        type: actionTypes.ADD_PORTALTYPE_SUCCEEDED,
        data
    }
}