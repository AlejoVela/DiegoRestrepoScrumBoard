const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    let jwToken = req.header("Authorization");
    if(!jwToken) return res.status(401).send("Autentification Failed: No token");

    jwToken = jwToken.split(" ")[1];
    if(!jwToken || jwToken.length === 0)
        return res.status(401).send("Autentification Failed: No token");

    try {
        const payload = jwt.verify(jwToken, process.env.PRIVATE_KEYWORD_JWT);
        req.user = payload;
        next();
    } catch (e) {
        return res.status(400).send("Autorization Failed: Invalid Token");
    }
};

module.exports = { auth };