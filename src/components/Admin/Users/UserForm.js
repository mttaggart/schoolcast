import React from "react";
import { 
    Label, 
    Switch, 
    Button, 
    ButtonGroup, 
    Intent 
} from "@blueprintjs/core";
import { deriveById } from "../../../lib/functions";
import FormOverlay from "../FormOverlay";
import AdminForm from "../AdminForm";

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
                    <Label>First Name</Label>
                    <input type="text" id="first-name" className="pt-input" value={this.state.firstName} onChange={this.changeHandler.bind(this)}/>
                    <Label>Last Name</Label>
                    <input type="text" id="last-name" className="pt-input" value={this.state.lastName} onChange={this.changeHandler.bind(this)} />
                    <Label>Email</Label>
                    <input type="email" id="email" className="pt-input" value={this.state.email} onChange={this.changeHandler.bind(this)}/>
                    <Label>Password</Label>
                    <input type="password" id="password" className="pt-input" value={this.state.password} onChange={this.changeHandler.bind(this)} />
                    <Label>Password Confirm</Label>
                    <input type="password" id="password-confirm" className="pt-input" value={this.state.passwordConfirm} onChange={this.changeHandler.bind(this)} />
                    <Switch 
                        id="is-admin" 
                        checked={this.state.isAdmin} 
                        onChange={this.changeHandler.bind(this)}
                        label="Admin?" 
                    />
                    <ButtonGroup>
                        <Button 
                            type="submit" 
                            intent={Intent.SUCCESS}
                            text="Submit"
                        />
                        { this.props.match.params.userId ? 
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