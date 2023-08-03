const express = require("express");
const router = express.Router();
const{
    getAllTasks, getTasks, createTasks, updateTasks, deleteTasks
} = require("../controller/taskController");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:tasksId").patch(updateTasks).delete(deleteTasks).get(getTasks);




module.exports = router;