const PortalType = (sequelize, DataTypes) => {
    return sequelize.define("PortalType", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

module.exports = PortalType;