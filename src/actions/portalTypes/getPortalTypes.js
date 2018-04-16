import actionTypes from "./actionTypes";
const apiEndPoint = "/api/portaltypes";

export default function getPortalTypes(token) {
    return (dispatch) => {
        dispatch(getPortalTypesAttempted())   ;
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
        .then( json => dispatch(getPortalTypesSucceeded(json)))
        .catch( err => dispatch(getPortalTypesRejected(err)));
    }
}

function getPortalTypesAttempted() {
    return {
        type: actionTypes.GET_PORTALTYPES_ATTEMPTED
    }
}

function getPortalTypesRejected(err) {
    return {
        type: actionTypes.GET_PORTALTYPES_REJECTED,
        data: err
    }
}

function getPortalTypesSucceeded(data) {
    return {
        type: actionTypes.GET_PORTALTYPES_SUCCEEDED,
        data
    }
}