const PortalType = (sequelize, DataTypes) => {
    return sequelize.define("PortalType", {
        name: DataTypes.STRING
    });
}

export default PortalType;