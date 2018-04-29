import React from "react";
import Portal from "./Portal";

const Display = ({displays,items,match}) => {

    const display = displays.find(display => {
        return parseInt(match.params.displayId) === display.id;
    });

    console.log(items);


    return (
        <div>
            {
                display ?
                display.Portals.map( (portal, idx) => {
    
                    const filteredItems = items.filter( item => { 
                        return portal.FeedId === item.FeedId
                    });
    
                    console.log(filteredItems);
                    
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