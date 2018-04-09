import React from "react";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserForm.defaultUser;
    }

    static defaultUser = {
        email: "",
        password: "",
        passwordConfirm:"",
        firstName: "",
        lastName: "",
        isAdmin: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {
            return nextProps.user;
        }
        return UserForm.defaultUser;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            this.props.submitHandler(this.props.token, this.state);
            this.setState(UserForm.defaultUser);
        } else {
            alert("Passwords do not match");
        } 
    }

    changeHandler(e) {
        const className = e.target.className;
        const val = e.target.value;

        switch(className) {
            case "first-name":
                this.setState({firstName: val});
                break;
            case "last-name":
                this.setState({lastName: val});
                break;
            case "email":
                this.setState({email: val});
                break;
            case "password":
                this.setState({password: val});
                break;
            case "password-confirm":
                this.setState({passwordConfirm: val});
                break;
            case "is-admin":
                this.setState({isAdmin: e.target.checked});
                break;

        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>First Name</label>
                    <input type="text" className="first-name" value={this.state.firstName} onChange={this.changeHandler.bind(this)}/>
                    <label>Last Name</label>
                    <input type="text" className="last-name" value={this.state.lastName} onChange={this.changeHandler.bind(this)} />
                    <label>Email</label>
                    <input type="email" className="email" value={this.state.email} onChange={this.changeHandler.bind(this)}/>
                    <label>Password</label>
                    <input type="password" className="password" value={this.state.password} onChange={this.changeHandler.bind(this)} />
                    <label>Password Confirm</label>
                    <input type="password" className="password-confirm" value={this.state.passwordConfirm} onChange={this.changeHandler.bind(this)} />
                    <label>Admin?</label>
                    <input type="checkbox" className="is-admin" checked={this.state.isAdmin} onChange={this.changeHandler.bind(this)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default UserForm;