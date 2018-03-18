const TransitionType = (sequelize, DataTypes) => {
    return sequelize.define("TransitionType", {
        name: DataTypes.STRING
    });
}

export default TransitionType;