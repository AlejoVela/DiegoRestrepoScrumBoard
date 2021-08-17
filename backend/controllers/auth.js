const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req, res) => {
    let user = await User.findOne({email: req.body.email });
    if(!user) return res.status(401).send("Incorrect email or password");

    const hash = await bcrypt.compare(req.body.password, user.password );
    
    if(!hash) return res.status(401).send("Incorrect email or password");
    try {
        const jwToken = user.generateJWT();
        return res.status(201).send({ jwToken })
    } catch (e) {
        return res.status(401).send("Login error");
    }
};

module.exports = { login };