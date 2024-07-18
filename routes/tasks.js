const taskController = require('../controllers/taskController');

module.exports = [
    {
        method: 'GET',
        path: '/tasks',
        handler: taskController.getTasks
    },
    {
        method: 'GET',
        path: '/tasks/{id}',
        handler: taskController.getTask
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: taskController.createTask
    },
    {
        method: 'PUT',
        path: '/tasks/{id}',
        handler: taskController.updateTask
    },
    {
        method: 'DELETE',
        path: '/tasks/{id}',
        handler: taskController.deleteTask
    }
];


