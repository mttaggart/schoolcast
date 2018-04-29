import React from "react";
import Portal from "./Portal";
import moment from "moment-timezone";

const Display = ({displays,items,match}) => {

    const now = moment().tz("America/Los_Angeles");

    const display = displays.find(display => {
        return parseInt(match.params.displayId) === display.id;
    });

    return (
        <div>
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