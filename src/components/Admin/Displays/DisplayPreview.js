import React from "react";
import { assignPortalCss } from "../../../lib/functions";

class DisplayPreview extends React.Component {

    render() {

        return (
            <div style={{position: "relative", border: "1px solid black"}}>
                {this.props.display.Portals.map( (portal, idx) => {

                    const styles = assignPortalCss(portal);

                    return (
                        <div 
                            key={idx}
                            style={styles}
                        >
                            {portal.name}
                        </div>
                    )
                })}
            </div>
        );
    }

}

export default DisplayPreview;