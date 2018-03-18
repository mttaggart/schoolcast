const TransitionType = (sequelize, DataTypes) => {
    return sequelize.define("TransitionType", {
        name: DataTypes.STRING
    });
}

module.exports = TransitionType;