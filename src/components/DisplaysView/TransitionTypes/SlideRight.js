import React from "react";
import Transition from "react-transition-group/Transition";

const SlideRight = ({ in: inProp, portal, duration, transitionSpeed, transitionTrigger, children}) => {

    const transitionStyles = {
        entering: { left: portal.left - 1000, opacity: 0 },
        entered: { left: portal.left, opacity: 1 },
        exiting: { left: portal.left + 1000, opacity: 0},
        exited: { left: portal.left - 1000, opacity: 0 }
    };

    const defaultStyle = {
        transition: `left ${transitionSpeed}ms ease-in-out, opacity ${transitionSpeed}ms ease-in-out `,
        left: portal.left,
        opacity: 1,
        position: "absolute"
    }
    
    return (
        <Transition 
            appear={true} 
            in={inProp} 
            timeout={0}
            onEntered={() => setTimeout(transitionTrigger, duration)} 
        >
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                {children}
                </div>
            )}
        </Transition>
    )
}

export default SlideRight;