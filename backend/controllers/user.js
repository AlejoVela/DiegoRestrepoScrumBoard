const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password)
        return res.status(401).send("Failed: There are empty fields");
    let existingUser = await User.findOne({ email: req.body.email });
    if(existingUser) return res.status(401).send("Failed: User already exist");

    let role = await Role.findOne({ name: "user" });
    if(!role || role.length === 0) return res.status(401).send("Failed: User dons't exist");

    let hash = await bcrypt.hash(req.body.password, 10);
    
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: role._id,
    });
    
    let result = await user.save();
    if(!result) return res.status(400).send("Failed: Error to register User");
    try {
        let jwt = user.generateJWT();
        return res.status(200).send({ jwt });
    } catch (error) {
        return res.status(400).send("Failed: Failed to get JWT");
    }
};

const listUser = async (req, res) => {
    let user = await User.find({ name: new RegExp(req.params["name"], "i") }).populate("roleId").exec();
    if(!user || user.length === 0) return res.status(400).send("Failed: There aren't user in DB");
    return res.status(200).send({ user });
};

module.exports = { registerUser, listUser };