const Item = (sequelize, DataTypes) => {
    return sequelize.define("Item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
}

module.exports = Item;