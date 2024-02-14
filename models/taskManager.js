const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
        title: { type: String},
        tasks: [],
        pin: { type: Number},

    },
{ timestamps: true });

module.exports = mongoose.model('task', taskSchema);
