const TransitionType = (sequelize, DataTypes) => {
    return sequelize.define("TransitionType", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

module.exports = TransitionType;