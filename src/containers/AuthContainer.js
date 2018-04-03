import { connect } from "react-redux";
import { login } from "../actions/login";
import App from "../components/App";

const mapStateToProps = (state) => {
    return Object.assign({},state.auth);
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username,password)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);