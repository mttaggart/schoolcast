import { connect } from "react-redux";
import authActions  from "../actions/users";
import Users from "../components/Users";

const mapStateToProps = (state) => {
    return Object.assign({},state.users);
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: token => dispatch(authActions.getUsers(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);