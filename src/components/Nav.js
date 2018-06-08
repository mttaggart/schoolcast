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
import { StyleSheet, css } from "aphrodite";
import AdminMenu from "./AdminMenu";

const displayNavStyle = StyleSheet.create({
    displayNav: {
        opacity: 0,
        transition: "opacity 0.3s",
        ":hover": {
            opacity: 1
        }
    }
});

// Make the NavBar transparent when actually viewing a display
const viewingDisplay = (path) => {
    const displayPath = /\/displays\/\d+/;
    return displayPath.test(path);
}

const Nav = ({authenticated,logout,user}) => {
    return (
        <Navbar 
            className={viewingDisplay(window.location.pathname) 
            ? css(displayNavStyle.displayNav) : ""}
        >
            <NavbarGroup>
            <NavbarHeading>SchoolCast</NavbarHeading>
            <NavbarDivider />
                <Link to="/">
                    <Button icon="home" text="Home" />
                </Link>
                {user && user.isAdmin ? 
                    <Popover content={<AdminMenu />}>
                        <Button 
                            icon="settings" 
                            text="Admin"
                        />
                    </Popover> : 
                    null 
                }
                <Link to="/displays">
                    <Button 
                        icon="desktop"
                        text="Displays"
                    />
                </Link>
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