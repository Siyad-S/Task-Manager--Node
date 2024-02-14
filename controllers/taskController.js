const asyncHandler = require("express-async-handler");
const taskModel = require("../models/taskManager")

// POST 
const postTask = asyncHandler(async (req, res) => {
    try {
        const { title, tasks, pin, type } = req.body;

        const savedTaskBlock = await taskModel.create({
            title,
            type,
            tasks,
            pin
        });

        res.status(201).json({message: "Successfully added the task", savedTaskBlock});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})




module.exports = {
    postTask
};
