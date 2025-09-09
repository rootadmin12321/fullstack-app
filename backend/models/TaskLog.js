const mongoose = require("mongoose");

const TaskLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  task: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TaskLog", TaskLogSchema);
