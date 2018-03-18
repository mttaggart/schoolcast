const Display = (sequelize, DataTypes) => {
    return sequelize.define("Display", {
        name: DataTypes.STRING,
        description: DataTypes.STRING(1024),
        customCSS: DataTypes.JSON
    });
}

export default Display;