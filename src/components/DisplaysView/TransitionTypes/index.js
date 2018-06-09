import Fade from "./Fade";

export const getTransition = (portal) => {
    switch (portal.TransitionType.name) {
        case "Fade":
            return Fade;
        default:
            return Fade;
    }
}