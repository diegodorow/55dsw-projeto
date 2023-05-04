import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import "./formusuario.css";
import { useNavigate } from "react-router-dom";
import { adicionarUsuario, obterUsuario } from "../../Api/conexao";

const FormUsuario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cartao, setCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [numerocvv, setNumerocvv] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [endEntrega, setEnderecoEntrega] = useState("");
  const [username, setUserName] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cpf, cartao, endereco, endEntrega);
    const usuario = {
      nome: nome,
      cpf: cpf,
      cartao: cartao,
      validade: validade,
      numerocvv: numerocvv,
      cep: cep,
      endereco: endereco,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      usuario: username,
      senha: senha,
    };

    console.log(usuario);

    obterUsuario(usuario)
      .then((resposta) => {})
      .catch((erro) => console.log(erro));

    adicionarUsuario(usuario)
      .then((resposta) => {
        navigate("/tarefas");
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Informe os dados para criar o seu usuário :)</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="CPF"
          placeholder="Digite o seu CPF "
          valor={cpf}
          aoAlterado={(valor) => setCpf(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cartão de crédito"
          placeholder="Digite o número do seu cartão de crédito"
          valor={cartao}
          aoAlterado={(valor) => setCartao(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Validade"
          placeholder="Digite a validade do cartão"
          valor={validade}
          aoAlterado={(valor) => setValidade(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Número CVV"
          placeholder="Digite o número CVV do cartão"
          valor={numerocvv}
          aoAlterado={(valor) => setNumerocvv(valor)}
        />
        <Campo
          obrigatorio={true}
          label="CEP"
          placeholder="Digite o CEP"
          valor={cep}
          aoAlterado={(valor) => setCep(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Endereço"
          placeholder="Digite o seu endereço"
          valor={endereco}
          aoAlterado={(valor) => setEndereco(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Número"
          placeholder="Digite o número"
          valor={numero}
          aoAlterado={(valor) => setNumero(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Complemento"
          placeholder="Digite o complemento"
          valor={complemento}
          aoAlterado={(valor) => setComplemento(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Bairro"
          placeholder="Digite o bairro"
          valor={bairro}
          aoAlterado={(valor) => setBairro(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cidade"
          placeholder="Informe a cidade"
          valor={cidade}
          aoAlterado={(valor) => setCidade(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Estado"
          placeholder="Digite o estado"
          valor={uf}
          aoAlterado={(valor) => setUf(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Endereço para entrega"
          placeholder="Digite o endereço para entrega"
          valor={endEntrega}
          aoAlterado={(valor) => setEnderecoEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Usuário"
          placeholder="Informe o seu usuário"
          valor={username}
          aoAlterado={(valor) => setUserName(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Senha"
          placeholder="Informe sua senha"
          valor={senha}
          aoAlterado={(valor) => setSenha(valor)}
        />
        <Botao texto="Criar usuário" />
      </form>
    </section>
  );
};

export default FormUsuario;
