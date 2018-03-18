const Portal = (sequelize, DataTypes) => {
    return sequelize.define("Portal", {
        name: DataTypes.STRING,
        top: DataTypes.INTEGER,
        left: DataTypes.INTEGER,
        width: DataTypes.INTEGER,
        height: DataTypes.INTEGER,
        transitionSpeed: DataTypes.INTEGER,
        customCSS: DataTypes.JSON
    });
}

module.exports = Portal;