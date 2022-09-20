import axios from 'axios';

const apiUrl = "http://localhost:9999/tasks";

const taskService = {
    getAllTasks: () => axios.get(apiUrl),
    getTaskById: id => axios.get(`${apiUrl}/${id}`),
    deleteTaskById: id => axios.delete(`${apiUrl}/${id}`),
    addTask: task => axios.post(apiUrl, task),
    updateTask: task => axios.put(`${apiUrl}/${task.id}`, task)
};

export default taskService;