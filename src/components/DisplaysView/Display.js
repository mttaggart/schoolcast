import React from "react";
import Portal from "./Portal";
import moment from "moment-timezone";

const Display = ({displays,items,match}) => {

    const now = moment().tz("America/Los_Angeles");

    const display = displays.find(display => {
        return parseInt(match.params.displayId, 10) === display.id;
    });

    const customCSS = display.customCSS ? JSON.parse(display.customCSS) : {};

    const styles = Object.assign(
        {},
        customCSS,
        {
            width: "100vw", 
            height: "100vh", 
            position: "absolute",
            top: 0,
            left: 0
        }
    );

    return (
        <div style={styles}>
            {
                display ?
                display.Portals.map( (portal, idx) => {
    
                    const filteredItems = items.filter( item => { 
                        const startDate = moment(item.startDate);
                        const endDate = moment(item.endDate);
                        return (
                            portal.FeedId === item.FeedId && // Match items to feed
                            now.isSameOrAfter(startDate) && // Date comparison
                            now.isSameOrBefore(endDate)
                        );
                    });
    
                    return (
                        <Portal 
                            key={idx}
                            portal={portal}
                            items={filteredItems}
                        />
                    );
                })
                : null
            }
        </div>
    );

}

export default Display;