const ListaClientes = () => {
  return (
    <div className="container">
      <h1>Lista de Clientes</h1>  
      <table className="table">
        <thead>
          <tr>
            <td>Código</td>
            <td>Nome Cliente</td>
            <td>Última Compra</td>
            <td>Bloquear</td>
            <td>Editar</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ListaClientes;
