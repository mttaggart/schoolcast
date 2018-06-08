import React from "react";
import { assignPortalCss } from "../../lib/functions";

class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIdx: 0 // start with first item
        }
    }

    updateItem() {
        let nextIdx;
        if (this.state.currentIdx === this.props.items.length - 1) {
            nextIdx = 0;  // Reset to beginning
        } else {
            nextIdx = this.state.currentIdx + 1; // Advance by one
        }
        const timeout = this.props.items[this.state.currentIdx].duration;
        setTimeout(() => this.setState({currentIdx: nextIdx}),timeout);
    }

    componentDidMount() {
        if(this.props.items.length > 0) this.updateItem();
    }

    componentDidUpdate() {
        if(this.props.items.length > 0) this.updateItem();
    }

    render() {

        if(this.props.items.length === 0) return null;

        const currentItem = this.props.items[this.state.currentIdx];
        const portal = this.props.portal;
        const styles = assignPortalCss(portal);

        // Different things for different PortalTypes
        switch(portal.PortalType.name) {
            case "Text":
                return (
                    <div style={styles}>
                        <p>{currentItem.content}</p>
                    </div>
                );
            case "Image":
            return (
                <div style={styles}>
                    <img width="100%" src={currentItem.content} />
                </div>
            );
            case "Embed":
            return (
                <iframe style={styles} src={currentItem.content} />
            );
            case "Video":
            return (

                <iframe 
                    style={styles}
                    src={`${currentItem.content}&autoplay=1`}
                    allow="autoplay"
                    frameBorder="0"
                />
            );
            default:
                return (
                    <div style={styles}>
                        <p>{currentItem.content}</p>
                    </div>
                );
        }

        
        
    }

}

export default Portal;