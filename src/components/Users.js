import React from "react";

const Users = ({users}) => {

    return (
        <div>
            <h3>Users</h3>    
            <ul>
                {
                    // this.props.users.map( (user, idx) => {
                    //     return (<li key={idx}>{user.email}</li>)
                    // })
                }
            </ul>        
        </div>
    );
    
}

export default Users;