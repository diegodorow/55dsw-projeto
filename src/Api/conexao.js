import axios from "axios";

const clienteApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const adicionarUsuario = (usuario) => clienteApi.post(`/users`, usuario);

export const obterUsuario = (usuario) => clienteApi.get(`/users`);

export const autenticarApi = (credencial) =>
  clienteApi.post(`/autenticar`, credencial);
