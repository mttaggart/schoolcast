import React from "react";
import Transition from "react-transition-group/Transition";


const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1},
    exited: { opacity: 0}
};

const Fade = ({ in: inProp, duration, transitionSpeed, transitionTrigger, children}) => {
    const defaultStyle = {
        transition: `opacity ${transitionSpeed}ms ease-in-out`,
        opacity: 0,
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

export default Fade;