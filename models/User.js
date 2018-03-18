const bcrypt = require("bcrypt");

const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

// Hook to encrypt user pws
User.beforeCreate((user, options) => {
    return encryptPassword(user.password)
    .then(success => {
        user.password = success;
    })
    .catch( err => {
        if (err) console.log(err);
    })
});

function encryptPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return reject(err);
            return resolve(hash);
        });
    });
}

export default User;