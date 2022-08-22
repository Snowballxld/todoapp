import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL ?? "https://localhost:8000"}`
class TodoDataService {
    getAll(token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`${baseUrl}/api/todos/`);
    }
    createTodo(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post(`${baseUrl}/api/todos/`, data);
    }
    updateTodo(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`${baseUrl}/api/todos/${id}`, data);
    }
    deleteTodo(id, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`${baseUrl}/api/todos/${id}`);
    }
    completeTodo(id, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`${baseUrl}/api/todos/${id}/complete`);
    }
    login(data) {
        return axios.post(`${baseUrl}/api/login/`, data);
    }
    signup(data) {
        return axios.post(`${baseUrl}/api/signup/`, data);
    }
}
export default new TodoDataService();