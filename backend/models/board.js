const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "user"},
    nombre: String,
    description: String,
    taskStatus: String,
    imageUrl: String,
    date: { type: Date, default: Date.now}
});

const board = mongoose.models( "board", boardSchema );
module.exports = board;