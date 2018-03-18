const Portal = (sequelize, DataTypes) => {
    return sequelize.define("Portal", {
        name: DataTypes.STRING,
        top: DataTypes.INT,
        left: DataTypes.INT,
        width: DataTypes.INT,
        height: DataTypes.INT,
        transitionSpeed: DataTypes.INT,
        customCSS: DataTypes.JSON
    });
}

export default Portal;