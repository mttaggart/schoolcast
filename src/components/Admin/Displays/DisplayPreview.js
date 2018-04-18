import React from "react";

class DisplayPreview extends React.Component {

    componentDidMount() {
        console.log(`Getting portals for ${this.props.display.name}`)
        this.props.getDisplayPortals(this.props.token, this.props.display.id);
    }

    render() {

        if (!this.props.displayPortals) return null;

        return (
            <div style={{position: "relative", border: "1px solid black"}}>
                {this.props.displayPortals.map( (portal, idx) => {

                    const customCSS = JSON.parse(portal.customCSS);

                    const styles = Object.assign(
                        {
                            border: "1px solid black",
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