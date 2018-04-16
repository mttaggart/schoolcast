import { connect } from "react-redux";
import portalActions  from "../actions/portals";
import portalTypeActions  from "../actions/portalTypes";
import Portals from "../components/Admin/Portals";

const mapStateToProps = (state) => {
    return Object.assign({},state.portals,{portalTypes: state.portalTypes.portalTypes});
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPortals: token => dispatch(portalActions.getPortals(token)),
        getPortalTypes: token => dispatch(portalTypeActions.getPortalTypes(token)),
        addPortal: (token, portal) => dispatch(portalActions.addPortal(token, portal)),
        deletePortal: (token, id) => dispatch(portalActions.deletePortal(token, id)),
        updatePortal: (token, portal) => dispatch(portalActions.updatePortal(token, portal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Portals);