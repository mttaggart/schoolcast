import React from "react";
import Portal from "./Portal";

const Display = ({displays,items,match}) => {

    const display = displays.find(display => {
        console.log(display);
        return match.params.displayId === display.id;
    });

    console.log(display);

    return (
        <div>
            {
                display ?
                display.Portals.map( (portal, idx) => {
    
                    const items = items.filter( item => { 
                        return portal.FeedId === item.FeedId
                    });
    
                    console.log(items);
                    
                    return (
                        <Portal 
                            key={idx}
                            portal={portal}
                            items={items}
                        />
                    );
                })
                : null
            }
        </div>
    );

}

export default Display;