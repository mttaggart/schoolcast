const Item = (sequelize, DataTypes) => {
    return sequelize.define("Item", {
        name: DataTypes.STRING,
        content: DataTypes.TEXT
    });
}

export default Item;