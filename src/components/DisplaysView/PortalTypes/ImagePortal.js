import React from "react";
import { assignPortalCss } from "../../../lib/functions";

const ImagePortal = ({portal, item}) => {
    const styles = assignPortalCss(portal);
    return (
        <div style={styles}>
            <img alt={item.content} width="100%" src={item.content} />
        </div>
    )
}

export default ImagePortal;