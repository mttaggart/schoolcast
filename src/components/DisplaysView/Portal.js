import React from "react";
import { assignPortalCss } from "../../lib/functions";
import PortalTypes from "./PortalTypes";
import { getTransition } from "./TransitionTypes";

class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIdx: 0, // start with first item,
            entered: true
        }
    }


    transitionItem() {
        let nextIdx;
        if (this.state.currentIdx === this.props.items.length - 1) {
            nextIdx = 0;  // Reset to beginning
        } else {
            nextIdx = this.state.currentIdx + 1; // Advance by one
        }
        this.setState({entered: false}, () => {
            setTimeout(() =>    
                this.setState({currentIdx: nextIdx, entered: true}),
                this.props.portal.transitionSpeed
            )
        })
    }

    render() {
        if(this.props.items.length === 0) return null;

        const currentItem = this.props.items[this.state.currentIdx];
        const portal = this.props.portal;
        const PortalTransition = getTransition(portal);

        // Different things for different PortalTypes
        switch(portal.PortalType.name) {
            case "Text":
                return (
                    <PortalTransition 
                        in={this.state.entered}
                        duration={this.props.items[this.state.currentIdx].duration}
                        transitionSpeed={portal.transitionSpeed}
                        transitionTrigger={this.transitionItem.bind(this)}
                        portal={portal}
                    >
                        <PortalTypes.TextPortal 
                            portal={portal}
                            item={currentItem}
                        />
                    </PortalTransition>
                );
            case "Image":
            return (
                <PortalTransition
                    in={this.state.entered}
                    duration={this.props.items[this.state.currentIdx].duration}
                    transitionSpeed={portal.transitionSpeed}
                    transitionTrigger={this.transitionItem.bind(this)}
                    portal={portal}
                >
                    <PortalTypes.ImagePortal
                        portal={portal}
                        item={currentItem}
                    />
                </PortalTransition>

            );
            case "Embed":
            return (
                <PortalTransition
                    in={this.state.entered}
                    duration={this.props.items[this.state.currentIdx].duration}
                    transitionSpeed={portal.transitionSpeed}
                    transitionTrigger={this.transitionItem.bind(this)}
                    portal={portal}
                >
                    <PortalTypes.EmbedPortal 
                        portal={portal}
                        item={currentItem}
                    />
                </PortalTransition>
            );
            case "Video":
            return (
                <PortalTransition
                    in={this.state.entered}
                    duration={this.props.items[this.state.currentIdx].duration}
                    transitionSpeed={portal.transitionSpeed}
                    transitionTrigger={this.transitionItem.bind(this)}
                    portal={portal}
                >
                    <PortalTypes.VideoPortal 
                        portal={portal}
                        item={currentItem}
                    />
                </PortalTransition>
            );
            default:
                return (
                    <div style={assignPortalCss(portal)}>
                        <p>{currentItem.content}</p>
                    </div>
                );
        }

        
        
    }

}

export default Portal;