const MaisVendidos = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Código</td>
            <td>Descrição do Produto</td>
            <td>Quantidade</td>
            <td>Valor</td>
            <td>Última Compra</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default MaisVendidos;
