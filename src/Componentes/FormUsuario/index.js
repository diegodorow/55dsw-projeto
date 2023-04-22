import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import "./formusuario.css";

const FormUsuario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cartao, setCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [numerocvv, setNumerocvv] = useState("");
  const [cep, setCep] = useState("");
  const [endUsuario, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [endEntrega, setEnderecoEntrega] = useState("");
  
  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cpf, cartao, endUsuario, endEntrega);
    aoCadastrar({
      nome,
      cpf,
      cartao,
      endUsuario,
      endEntrega,
    });
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
          valor={endUsuario}
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
        <Botao texto="Criar usuário" />
        
      </form>
    </section>
  );
};

export default FormUsuario;
