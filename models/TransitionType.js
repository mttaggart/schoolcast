const TransitionType = (sequelize, DataTypes) => {
    return sequelize.define("TransitionType", {
        name: { 
            type: DataTypes.STRING,
            isIn: [["Fade","Slide","None"]]
        }
    })
}

export default TransitionType;