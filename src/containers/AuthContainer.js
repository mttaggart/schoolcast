import { connect } from "react-redux";
import authActions  from "../actions/auth";
import App from "../components/App";

const mapStateToProps = (state) => {
    return Object.assign({},state.auth);
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(authActions.login(username,password)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);