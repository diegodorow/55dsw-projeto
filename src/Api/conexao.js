import axios from "axios";

const clienteApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const adicionarUsuario = (username, tarefa) =>
  clienteApi.post(`/users/${username}`, tarefa);