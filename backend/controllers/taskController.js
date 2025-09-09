const TaskLog = require("../models/TaskLog");

const getTasks = async (req, res) => {
  const tasks = await TaskLog.find();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { userId, task } = req.body;
  const newTask = new TaskLog({ userId, task });
  await newTask.save();
  res.json(newTask);
};

module.exports = { getTasks, createTask };
