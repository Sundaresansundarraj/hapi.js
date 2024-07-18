const Task = require('../models/task');

const getAllTasks = async () => {
    return await Task.findAll();
};

const getTaskById = async (id) => {
    return await Task.findByPk(id);
};

const createTask = async (title, description) => {
    return await Task.create({ title, description });
};

const updateTask = async (id, title, description) => {
    const task = await Task.findByPk(id);
    if (!task) {
        return null;
    }
    task.title = title;
    task.description = description;
    await task.save();
    return task;
};

const deleteTask = async (id) => {
    const task = await Task.findByPk(id);
    if (!task) {
        return null;
    }
    await task.destroy();
    return task;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
