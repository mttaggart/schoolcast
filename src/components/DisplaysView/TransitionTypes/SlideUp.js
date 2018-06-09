import React from "react";
import Transition from "react-transition-group/Transition";

const SlideUp = ({ in: inProp, portal, duration, transitionSpeed, transitionTrigger, children}) => {

    const transitionStyles = {
        entering: { top: portal.top + 1000, opacity: 0 },
        entered: { top: portal.top, opacity: 1 },
        exiting: { top: portal.top - 1000, opacity: 0},
        exited: { top: portal.top + 1000, opacity: 0 }
    };

    const defaultStyle = {
        transition: `top ${transitionSpeed}ms ease-in-out, opacity ${transitionSpeed}ms ease-in-out `,
        top: portal.top,
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

export default SlideUp;