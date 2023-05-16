import { useState } from "react";
import { adicionarProdutoApi } from "../../Api/conexao";
import { useNavigate } from "react-router-dom";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./cadastroproduto.css";
import MenuAdmin from "../MenuAdmin";

const CadastroProduto = () => {
  const [descricao, setDescricao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [cor, setCor] = useState("");
  const [tamanhos] = useState(["P", "M", "G", "GG", "XG"]);
  const [cores] = useState(["azul", "branca", "preta", "vermelha"]);

  const navigate = useNavigate();

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    const produto = {
      descricao: descricao,
      tamanho: tamanho,
      valor: valor,
      quantidade: quantidade,
      cor: cor,
      imagem: "imagens/" + cor + ".jpg",
      carrinho: false,
    };
    adicionarProduto(produto);
  };

  function adicionarProduto(produto) {
    adicionarProdutoApi(produto)
      .then((resposta) => {
        console.log(resposta);
        navigate("/listaproduto");
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar-cadproduto">
        <div className="formulario-container-cadproduto">
          <h1>Cadastro de produtos</h1>
          <form className="formulario" onSubmit={aoSubmeter}>
            <h2>Preencha os dados para cadastrar o produto.</h2>
            <Campo
              obrigatorio={true}
              label="Descrição"
              placeholder="Informe a descrição "
              valor={descricao}
              aoAlterado={(valor) => setDescricao(valor)}
            />
            <Campo
              obrigatorio={true}
              label="Valor"
              placeholder="Informe o valor"
              valor={quantidade}
              aoAlterado={(valor) => setQuantidade(valor)}
            />
            <Campo
              obrigatorio={true}
              label="Quantidade"
              placeholder="Informe a quantidade"
              valor={valor}
              aoAlterado={(valor) => setValor(valor)}
            />
            <ListaSuspensa
              obrigatorio={true}
              label="Tamanho"
              items={tamanhos}
              valor={tamanho}
              aoAlterado={(valor) => setTamanho(valor)}
            />
            <ListaSuspensa
              obrigatorio={true}
              label="Cor"
              items={cores}
              valor={cor}
              aoAlterado={(valor) => setCor(valor)}
            />
            <Botao texto="Cadastrar produto" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;
