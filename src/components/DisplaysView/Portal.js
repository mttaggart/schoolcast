import React from "react";

class Portal extends React.Component {

    render() {
        const portal = this.props.portal;
        const customCSS = JSON.parse(portal.customCSS);
        const styles = Object.assign(
            {
                verticalAlign: "middle",
                textAlign: "center",
            },
            {
                position: "absolute",
                top: `${window.innerHeight * (portal.top / 100)}px`,
                left: `${window.innerWidth * (portal.left / 100)}px`,
                width: `${window.innerWidth * (portal.width / 100)}px`,
                height: `${window.innerHeight * (portal.height / 100)}px`,
            },
            customCSS,
        );
        console.log(this.props);
        return (
            <div style={styles}>
                {portal.name}
            </div>
        )
        
    }

}


export default Portal;