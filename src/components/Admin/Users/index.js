import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props.authenticated && !this.props.requested) {
            this.props.getUsers(this.props.token);
        }
    }

    render() {
        return (
            <div>
                <h3>Users</h3>    
                <ul>
                    {
                        this.props.users.map( (user, idx) => {
                            return (<li key={idx}>{user.email}</li>)
                        })
                    }
                </ul>        
            </div>
        );
    }
}

    
    

export default Users;