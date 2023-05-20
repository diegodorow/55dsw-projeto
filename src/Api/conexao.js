import axios from "axios";

const clienteApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const adicionarUsuarioApi = (usuario) =>
  clienteApi.post(`/users`, usuario);

export const obterUsuarioApi = () => clienteApi.get(`/users`);

export const obterUsuarioLogadoApi = (username) => clienteApi.get(`/users/${username}`);

export const autenticarApi = (credencial) =>
  clienteApi.post(`/autenticar`, credencial);

export const validaradminconexao = (credencial) =>
  clienteApi.post(`/validaradm`, credencial);

export const validaraclienteconexao = (credencial) =>
  clienteApi.post(`/validarcliente`, credencial);

export const adicionarProdutoApi = (produto) =>
  clienteApi.post(`/produtos`, produto);

export const obterProdutosApi = () => clienteApi.get(`/produtos`);

export const excluirCamisaApi = (idCamisa) =>
  clienteApi.delete(`/produtos/${idCamisa}`);

export const adicionarEstoqueApi = (id, estoque) =>
  clienteApi.post(`/addestoque/${id}`, estoque);

export const obterClientesApi = () => clienteApi.get(`/clientes`);

export const bloquearClientesApi = (id, bloqueio) =>
  clienteApi.post(`/bloquearclientes/${id}`, bloqueio);

export const obterPedidosApi = () => clienteApi.get(`/pedidos`);

export const confirmarPedidosApi = (id, bloqueio) =>
  clienteApi.post(`/confirmarpedidos/${id}`, bloqueio);

  export const adicionarPedidoApi = (pedido, carrinho) =>
  clienteApi.post(`/pedidos`, pedido, carrinho);

  export const obterPedidosClienteApi = (id) => clienteApi.get(`/pedidos/${id}`);