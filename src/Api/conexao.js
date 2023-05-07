import axios from "axios";

const clienteApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const adicionarUsuario = (usuario) => clienteApi.post(`/users`, usuario);

export const obterUsuario = (usuario) => clienteApi.get(`/users`);

export const autenticarApi = (credencial) =>
  clienteApi.post(`/autenticar`, credencial);

export const validaradminconexao = (credencial) =>
  clienteApi.post(`/validaradm`, credencial);

export const validaraclienteconexao = (credencial) =>
  clienteApi.post(`/validarcliente`, credencial);

export const adicionarProduto = (produto) =>
  clienteApi.post(`/produtos`, produto);

export const obterProdutosApi = () => clienteApi.get(`/produtos`);

export const excluirCamisaApi = (idCamisa) =>
  clienteApi.delete(`/produtos/${idCamisa}`);
