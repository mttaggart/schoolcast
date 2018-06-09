import React from "react";
import { Callout } from "@blueprintjs/core"

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Callout title="Welcome to SchoolCast">
                <p>
                    This system is designed for the easy creation of informational signage in educational settings. Use the 
                    <b>Admin</b> section to configure Displays, Feeds, Portals, 
                    and Items. Then, use the <b>Displays</b> section to access
                    your Displays!
                </p>
            </Callout>
        </div>
    )
}

export default Home;