const Portal = (sequelize, DataTypes) => {
    return sequelize.define("Portal", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        top: {
            type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
            allowNull: false
        },
        left: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transitionSpeed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customCSS: DataTypes.JSON
    });
}

module.exports = Portal;