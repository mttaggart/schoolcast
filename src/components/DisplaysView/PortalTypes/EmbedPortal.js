import React from "react";
import { assignPortalCss } from "../../../lib/functions";

const EmbedPortal = ({portal, item}) => {
    const styles = assignPortalCss(portal);
    return (
        <iframe style={styles} src={item.content} />
    )
}

export default EmbedPortal;