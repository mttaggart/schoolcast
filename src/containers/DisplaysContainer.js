import { connect } from "react-redux";
import displayActions  from "../actions/displays";
import Displays from "../components/Admin/Displays";

const mapStateToProps = (state) => {
    return Object.assign({},state.displays);
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDisplays: token => dispatch(displayActions.getDisplays(token)),
        getDisplayPortals: (token, id) => dispatch(displayActions.getDisplayPortals(token, id)),
        addDisplay: (token, display) => dispatch(displayActions.addDisplay(token, display)),
        deleteDisplay: (token, id) => dispatch(displayActions.deleteDisplay(token, id)),
        updateDisplay: (token, display) => dispatch(displayActions.updateDisplay(token, display))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Displays);