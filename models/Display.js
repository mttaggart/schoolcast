const Display = (sequelize, DataTypes) => {
    return sequelize.define("Display", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        customCSS: {
            type: DataTypes.JSON,
            allowNull: false
        },
    });
}

module.exports = Display;