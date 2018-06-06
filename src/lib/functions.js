export function deriveById(nextProps, defaultItem) {
    if (nextProps.match.params.id) {
        const  id = parseInt(nextProps.match.params.id,10);
        const item =  nextProps.assets.find(asset => {
            return asset.id === id;
        });
        return item ? item : defaultItem;
    }
    return defaultItem;
}