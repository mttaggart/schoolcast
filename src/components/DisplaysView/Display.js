import React from "react";

class Display extends React.Component {

    componentDidMount() {
        this.props.getDisplayPortals(
            this.props.token, 
            this.props.match.params.displayId
        );
    }

    render() {
        return (
            <div>
                PORTALS GO HERE
            </div>
        );
    }


}

export default Display;