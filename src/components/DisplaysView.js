import React from "react";
import { Redirect } from "react-router-dom";

class DisplaysView extends React.Component {

    componentDidMount() {
        this.props.getDisplays(this.props.token);
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/" from="/displays" />
            );
        }

        return (
            <div>
                <h2>Displays</h2>
                {
                    this.props.displays ?
                    this.props.displays.map( (display, idx) => {
                        return (
                            <h3 key={idx}>{display.name}</h3>
                        )
                    })
                    : null
                }
            </div>
        )
    }
}

export default DisplaysView;