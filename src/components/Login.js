import React from "react";
import { Redirect } from "react-router-dom";
import { Label, Button, Intent } from "@blueprintjs/core";

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

    render() {

        if(this.props.authenticated) {
            return (
                <Redirect to="/" from="/login" />
            );
        }
       
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {/* {this.props.error ? <div>{this.props.error}</div> : null} */}
                    <Label>email</Label>
                    <input className="pt-input" onChange={this.emailHandler.bind(this)} id="email" type="email" />
                    <Label>password</Label>
                    <input className="pt-input" onChange={this.pwHandler.bind(this)} id="password" type="password" />
                    <Button 
                        type="submit"
                        intent={Intent.PRIMARY}
                        text="Log In"
                        icon="login" 
                    />
                </form>
            </div>
        );
    }
}
    
export default Login;