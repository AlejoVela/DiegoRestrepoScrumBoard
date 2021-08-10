const Role = require("../models/role");

const registerRole = async (req, res) => {
    if(!req.body.name || !req.body.description) 
        return res.status(400).send("Process Failed: Incomplete Data");
    
    const existingRole = await Role.findOne({ name: req.body.name });
    if(existingRole) return res.status(400).send("Process Failed: Role Already exist");
    
    const role = new Role({
        name: req.body.name,
        description: req.body.description,
        dbStatus: true,
    });

    const result = await role.save();
    if (!result) return res.status(401).send("Process faild with DB");

    return res.status(201).send({ role });
};

const listRole = async (req, res) => {
    const role = await Role.find();
    if(!role) return res.status(400).send("There's not roles register now");
    return res.status(200).send({ role });
};

module.exports = { registerRole, listRole };