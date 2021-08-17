const Board = require("../models/board");

const saveBoard = async (req, res) => {
    if(!req.body.name || !req.body.description)
        return res.status(401).send("Process Failed: There'r empty fields");
    
    const board = new Board({
        userId: req.user._id,
        name: req.body.name,
        description: req.body.description,
        taskStatus: "to-do",
    });

    const result = await board.save();

    if(!result) return res.status(400).send("Process Failed: Failed to register task");

    return res.status(201).send({ result });
};


module.exports = { saveBoard };