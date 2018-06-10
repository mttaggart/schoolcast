import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { assignPortalCss } from "../../../lib/functions";


const TextPortal = ({portal, item}) => {
    const styles = assignPortalCss(portal);
    return (
        <div style={styles}>
            {ReactHtmlParser(item.content)}
        </div>
    )
}

export default TextPortal;