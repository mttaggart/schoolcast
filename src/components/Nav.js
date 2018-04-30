import React from "react";
import { Link } from "react-router-dom";
import { 
    Button, 
    Popover,
    Navbar, 
    NavbarGroup, 
    NavbarDivider, 
    NavbarHeading 
} from "@blueprintjs/core";
import AdminMenu from "./AdminMenu";

const Nav = ({authenticated,logout,user,history}) => {
    return (
        <Navbar>
            <NavbarGroup>
            <NavbarHeading>SchoolCast</NavbarHeading>
            <NavbarDivider />
                <Link to="/">
                    <Button icon="home" text="Home" />
                </Link>
                {user && user.isAdmin ? 
                    <Popover content={<AdminMenu />}>
                        <Button icon="settings" text="Admin"/>
                    </Popover> : 
                    null 
                }
                <Button icon="desktop"><Link to="/displays">Displays</Link></Button>
                {
                    authenticated ? 
                    <Button 
                        icon="log-out" 
                        onClick={logout} 
                        text={`${user.email}`}
                    /> 
                    : <Link to="/login"><Button icon="log-in" text="Log In"/></Link>
                }                
            </NavbarGroup>
        </Navbar>
    )
}

export default Nav;