import React from "react";
import { assignPortalCss } from "../../../lib/functions";

const TextPortal = ({portal, item}) => {
    const styles = assignPortalCss(portal);
    return (
        <div style={styles}>
            <p>{item.content}</p>
        </div>
    )
}

export default TextPortal;