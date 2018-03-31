import React from "react";

class Login extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null
        }
    }

    login(email, password) {
        const loginRequest = new Request(
          "/api/auth/login",
          {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
              "content-type": "application/json"
            }
          }
        );
        fetch(loginRequest)
        .then(res => {
          if (res.ok) {
            const body = res.json();
            return body;
          }
        })
        .then(body => {
          if(body && body.authenticated) {
              this.props.authHandler(body);
              this.props.history.push("/");
          } else {
              this.setState({error: "Invalid email/password"});
          }
        })
        .catch( err => {
            this.setState({error: "Invalid email/password"});
        })
      }

    onSubmit(e) {
        e.preventDefault();
        this.setState({error:null});
        this.login(this.state.email, this.state.password);
    }

    emailHandler(e) {
        this.setState({email: e.target.value})
    }

    pwHandler(e) {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {this.state.error ? <div>{this.state.error}</div> : null}
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