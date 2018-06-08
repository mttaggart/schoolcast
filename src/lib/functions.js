export function deriveById(nextProps, prevState, defaultItem) {

    // Let state pass through on new form
    if(nextProps.match.path.endsWith("new")) return prevState;

    // If editing an existing asset, check if it exists
    if (nextProps.match.params.id) {
        const  id = parseInt(nextProps.match.params.id,10);
        if(id === prevState.id) return prevState;
        const item =  nextProps.assets.find(asset => {
            return asset.id === id;
        });
        return item ? item : defaultItem;
    }

    return defaultItem;
}

export function assignPortalCss(portal) {
    const customCSS = portal.customCSS ? JSON.parse(portal.customCSS) : {};
    return Object.assign(
        {
            verticalAlign: "middle",
            textAlign: "center",
        },
        {
            position: "absolute",
            top: `${window.innerHeight * (portal.top / 100)}px`,
            left: `${window.innerWidth * (portal.left / 100)}px`,
            width: `${window.innerWidth * (portal.width / 100)}px`,
            height: `${window.innerHeight * (portal.height / 100)}px`,
        },
        customCSS,
    );
}