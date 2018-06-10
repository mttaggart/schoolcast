import React from "react";
import { assignPortalCss } from "../../../lib/functions";

class DisplayPreview extends React.Component {

    render() {

        const customCSS = this.props.display.customCSS ? this.props.display.customCSS : {};
        const containerStyle = Object.assign(
            {},
            customCSS,
            {position: "relative", border: "1px solid black"}
        )

        return (
            <div style={containerStyle}>
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