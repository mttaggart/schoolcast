export function deriveById(nextProps, prevState, defaultItem) {
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