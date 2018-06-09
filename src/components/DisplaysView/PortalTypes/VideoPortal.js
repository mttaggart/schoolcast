import React from "react";
import { assignPortalCss } from "../../../lib/functions";

const VideoPortal = ({portal, item}) => {
    const styles = assignPortalCss(portal);
    return (
        <iframe 
            style={styles}
            src={`${item.content}&autoplay=1`}
            allow="autoplay"
            frameBorder="0"
        />
    )
}

export default VideoPortal;