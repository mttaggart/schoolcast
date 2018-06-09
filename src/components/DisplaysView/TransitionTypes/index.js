import Fade from "./Fade";
import SlideDown from "./SlideDown";
import SlideUp from "./SlideUp";
import SlideLeft from "./SlideLeft";
import SlideRight from "./SlideRight";

export const getTransition = (portal) => {
    switch (portal.TransitionType.name) {
        case "Fade":
            return Fade;
        case "SlideDown":
            return SlideDown;
        case "SlideUp":
            return SlideUp;
        case "SlideLeft":
            return SlideUp;
        case "SlideRight":
            return SlideRight;
        default:
            return Fade;
    }
}