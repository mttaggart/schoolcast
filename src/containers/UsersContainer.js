import { connect } from "react-redux";
import userActions  from "../actions/users";
import Users from "../components/Admin/Users";

const mapStateToProps = (state) => {
    return Object.assign({},state.users);
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: token => dispatch(userActions.getUsers(token)),
        addUser: (token, user) => dispatch(userActions.addUser(token, user)),
        deleteUser: (token, id) => dispatch(userActions.deleteUser(token,id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);