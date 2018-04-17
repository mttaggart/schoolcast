import actionTypes from "./actionTypes";
const apiEndPoint = "/api/displays";

export default function getDisplayPortals(token, id) {
    return (dispatch) => {
        dispatch(getDisplayPortalsAttempted())   ;
        const displaysRequest = new Request(
            `${apiEndPoint}/${id}/portals`,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(displaysRequest)
        .then( res => res.json())
        .then( json => dispatch(getDisplayPortalsSucceeded(json)))
        .catch( err => dispatch(getDisplayPortalsRejected(err)));
    }
}

function getDisplayPortalsAttempted() {
    return {
        type: actionTypes.GET_DISPLAYPORTALS_ATTEMPTED
    }
}

function getDisplayPortalsRejected(err) {
    return {
        type: actionTypes.GET_DISPLAYPORTALS_REJECTED,
        data: err
    }
}

function getDisplayPortalsSucceeded(data) {
    return {
        type: actionTypes.GET_DISPLAYPORTALS_SUCCEEDED,
        data
    }
}