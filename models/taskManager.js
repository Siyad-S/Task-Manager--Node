const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
        // title: { type: String},
        // type: {
        //     type: String
        // },
        tasks: [],
        completed: {
            type: Boolean,
            default: false
        },
        pin: { type: Number},

    },
{ timestamps: true });

module.exports = mongoose.model('task', taskSchema);
