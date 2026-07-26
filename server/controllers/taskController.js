const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      authorId: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET ALL MY TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      authorId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET SINGLE TASK
exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.authorId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.authorId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.status = req.body.status ?? task.status;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.authorId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    await task.deleteOne();

    res.json({
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};