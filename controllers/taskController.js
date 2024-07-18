const taskService = require('../services/taskService');

const getTasks = async (request, h) => {
    const tasks = await taskService.getAllTasks();
    return tasks;
};

const getTask = async (request, h) => {
    const task = await taskService.getTaskById(request.params.id);
    if (!task) {
        return h.response({ message: 'Task not found' }).code(404);
    }
    return task;
};

const createTask = async (request, h) => {
    const { title, description } = request.payload;
    const task = await taskService.createTask(title, description);
    return h.response(task).code(201);
};

const updateTask = async (request, h) => {
    const { title, description } = request.payload;
    const task = await taskService.updateTask(request.params.id, title, description);
    if (!task) {
        return h.response({ message: 'Task not found' }).code(404);
    }
    return h.response(task).code(200);
};

const deleteTask = async (request, h) => {
    const task = await taskService.deleteTask(request.params.id);
    if (!task) {
        return h.response({ message: 'Task not found' }).code(404);
    }
    return h.response({ message: 'Task deleted' }).code(200);
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};
