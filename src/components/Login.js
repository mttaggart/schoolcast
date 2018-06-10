import React from "react";
import { Redirect } from "react-router-dom";
import { ButtonGroup, Button, Intent } from "@blueprintjs/core";
import { TextInput } from "./FormControls";

const styles = {
    loginForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    }
}

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
                <form 
                    onSubmit={this.onSubmit.bind(this)}
                    style={styles.loginForm}
                >
                    {this.props.error ? <div>{this.props.error}</div> : null}
                    <TextInput 
                        label="Email"
                        type="email"
                        id="email"
                        changeHandler={this.emailHandler.bind(this)}
                    />
                    <TextInput 
                        label="Password"
                        type="password"
                        id="password"
                        changeHandler={this.pwHandler.bind(this)}
                    />
                    <ButtonGroup large={true}>
                        <Button 
                            type="submit"
                            intent={Intent.PRIMARY}
                            text="Log In"
                            icon="login" 
                        />
                    </ButtonGroup>
                </form>
            </div>
        );
    }
}
    
export default Login;