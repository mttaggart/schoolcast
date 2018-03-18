const Feed = (sequelize, DataTypes) => {
    return sequelize.define("TransitionType", {
        name: DataTypes.STRING,
        description: DataTypes.STRING(1024)
    });
}

export default Feed;