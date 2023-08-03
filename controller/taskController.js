const Tasks = require("../models/task");

// get all tasks

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json({ success: true, tasks});
    } catch (error) {
        res.json(error);
    }
}
//get a getTask
const getTasks = async (req, res) => {
    const { tasksId } = req.params;
    try {
        const tasks = await Tasks.findById({ _id: tasksId });
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.json(error);
    }
}
//createTask
const createTasks = async (req, res) => {
    const { title, description } = req.body

    if (!title || !description) {
        return res.status(400).json({success: false, message: "Please fill all the input feilds"})
    }
   try {
    const tasks = await Tasks.create({ ...req.body });
    res.status(201).json({success: true, tasks });
   } catch (error) {
    res.json(error);
   }
}
//updateTask
const updateTasks = async (req, res) => {
    const { tasksId } = req.params;
   try {
    const tasks = await Tasks.findByIdAndUpdate({ _id: tasksId }, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.json(error);
    }
       
}
//deleteTask
const deleteTasks = async (req, res) => {
    const { tasksId } = req.params;
    try {
        const goal = await Tasks.findByIdAndDelete({ _id: tasksId });
        res.status(200).json({ success: true });
    } catch (error) {
        res.json(error);
    }
}


module.exports = { getAllTasks, getTasks, createTasks, updateTasks, deleteTasks};