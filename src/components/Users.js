import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("/api/users", {
            headers: {"x-access-token": this.props.auth.token}
        })
        .then( res => res.json())
        .then( json => {
            if (json.users) {
                this.setState({users: json.users})
            }
        })
        .catch( err => {
            console.error(err);
        });
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Users</h3>    
                <ul>
                    {
                        this.state.users.map( (user, idx) => {
                            return (<li key={idx}>{user.email}</li>)
                        })
                    }
                </ul>        
            </div>
        );
    }
}

export default Users;