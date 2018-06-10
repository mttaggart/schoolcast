import React from "react";
import { 
    Switch, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import { deriveById } from "../../../lib/functions";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";
import {
    TextInput,
} from "../../FormControls";

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
        return deriveById(nextProps, prevState, UserForm.defaultUser);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            this.props.submitHandler(this.props.token, this.state);
            this.setState(UserForm.defaultUser);
            this.props.history.goBack();
        } else {
            alert("Passwords do not match");
        } 
    }

    deleteHandler() {
        const confirm = window.confirm(`Are you sure you want to delete ${this.state.firstName} ${this.state.lastName}?`);
        if (confirm) {
            this.props.deleteHandler(this.props.token, this.state.id);
            this.setState(UserForm.defaultUser);
            this.props.history.goBack();
        }
    }

    changeHandler(e) {
        const id = e.target.id;
        const val = e.target.value;

        switch(id) {
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
            default:
                break;

        }
    }

    render() {
        return (
            <FormOverlay history={this.props.history}>
                <AdminForm 
                    onSubmit={this.onSubmit.bind(this)}
                    title={this.props.title}
                >
                    <TextInput
                        id="first-name"
                        label="First Name"
                        value={this.state.firstName}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        id="last-name"
                        label="Last Name"
                        value={this.state.lastName}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="email"
                        id="email"
                        label="Email"
                        value={this.state.email}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="password"
                        id="password"
                        label="Password"
                        value={this.state.password}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <TextInput
                        type="password"
                        id="password-confirm"
                        label="Password"
                        value={this.state.passwordConfirm}
                        changeHandler={this.changeHandler.bind(this)}
                    />
                    <Switch 
                        id="is-admin" 
                        checked={this.state.isAdmin} 
                        onChange={this.changeHandler.bind(this)}
                        label="Admin?" 
                    />
                    <ButtonGroup large={true}>
                        <Button 
                            type="submit" 
                            intent={Intent.SUCCESS}
                            text="Submit"
                        />
                        { this.props.match.params.id ? 
                            <Button 
                            type="button"
                            onClick={this.deleteHandler.bind(this)} 
                            text="Delete"
                            intent={Intent.DANGER}
                            />
                            : null
                        }
                    </ButtonGroup>
                </AdminForm>
            </FormOverlay>
        )
    }

}

export default UserForm;