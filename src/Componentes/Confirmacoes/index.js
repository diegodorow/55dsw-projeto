const Confirmacoes = () => {
    return (
      <div className="container">
        <h1>Confirmações</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Pedido</td>
              <td>Data do pedido</td>
              <td>Nome do cliente</td>
              <td>Número do cartão</td>
              <td>Valor da compra</td>
              <td>Confirmar</td>
              <td>Bloquear</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  };
  
  export default Confirmacoes;
  