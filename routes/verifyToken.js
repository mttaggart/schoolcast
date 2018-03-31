const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "supersecret";

function verifyToken(req, res, next) {
    const token =  req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({authenticated: false, message: "No token provided"});
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Authentication failed" 
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;