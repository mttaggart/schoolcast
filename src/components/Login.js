import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({error:null});
        this.props.login(this.state.email, this.state.password);
    }

    emailHandler(e) {
        this.setState({email: e.target.value})
    }

    pwHandler(e) {
        this.setState({password: e.target.value})
    }

    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push("/");
        }
    }

    render() {
       
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {this.props.error ? <div>{this.props.error}</div> : null}
                    <label>email</label>
                    <input onChange={this.emailHandler.bind(this)} id="email" type="email" />
                    <label>password</label>
                    <input onChange={this.pwHandler.bind(this)} id="password" type="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
    
export default Login;