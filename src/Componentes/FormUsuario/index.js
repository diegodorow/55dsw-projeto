import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import "./formusuario.css";
import { useNavigate } from "react-router-dom";
import { adicionarUsuario, obterUsuario } from "../../Api/conexao";
import ListaSuspensa from "../ListaSuspensa";

const FormUsuario = () => {
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
  const [username, setUserName] = useState("");
  const [senha, setSenha] = useState("");
  const [administrador, setAdministrador] = useState("");
  const [cepEntrega, setCepEntrega] = useState("");
  const [enderecoEntrega, setEnderecoEntrega] = useState("");
  const [numeroEntrega, setNumeroEntrega] = useState("");
  const [complementoEntrega, setComplementoEntrega] = useState("");
  const [bairroEntrega, setBairroEntrega] = useState("");
  const [cidadeEntrega, setCidadeEntrega] = useState("");
  const [ufEntrega, setUfEntrega] = useState("");

  const navigate = useNavigate();

  const [tipos] = useState(["Administrador", "Cliente"]);

  const aoSubmeter = (evento) => {
    evento.preventDefault();
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
      administrador: administrador,
    };

    obterUsuario(usuario)
      .then((resposta) => {})
      .catch((erro) => console.log(erro));

    adicionarUsuario(usuario)
      .then((resposta) => {
        navigate("/inicio");
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Informe os dados para criar o seu usuário :)</h2>
        <ListaSuspensa
          obrigatorio={true}
          label="Tipo do Usuário"
          items={tipos}
          valor={administrador}
          aoAlterado={(valor) => setAdministrador(valor)}
        />
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
      <form className="entrega" onSubmit={aoSubmeter}>
        <h2>Informe os dados para entrega :)</h2>
        <Campo
          obrigatorio={true}
          label="CEP"
          placeholder="Digite o CEP"
          valor={cepEntrega}
          aoAlterado={(valor) => setCepEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Endereço"
          placeholder="Digite o seu endereço"
          valor={enderecoEntrega}
          aoAlterado={(valor) => setEnderecoEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Número"
          placeholder="Digite o número"
          valor={numeroEntrega}
          aoAlterado={(valor) => setNumeroEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Complemento"
          placeholder="Digite o complemento"
          valor={complementoEntrega}
          aoAlterado={(valor) => setComplementoEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Bairro"
          placeholder="Digite o bairro"
          valor={bairroEntrega}
          aoAlterado={(valor) => setBairroEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cidade"
          placeholder="Informe a cidade"
          valor={cidadeEntrega}
          aoAlterado={(valor) => setCidadeEntrega(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Estado"
          placeholder="Digite o estado"
          valor={ufEntrega}
          aoAlterado={(valor) => setUfEntrega(valor)}
        />
      </form>
    </section>
  );
};

export default FormUsuario;
