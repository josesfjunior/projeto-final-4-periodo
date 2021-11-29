import "../index.css";
import { useState } from "react";

import axios from "axios";
function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState(Number);
  const [telefone, setTelefone] = useState("");
  const [descricaoCliente, setDescricaoCliente] = useState("");
  const [preferenciaProduto, setPreferenciaProduto] = useState("");
  const [preferenciaCorte, setPreferenciaCorte] = useState("");
  let pontosDeValidacao = 0;

  async function Cadastro(event) {
    event.preventDefault();

    if (nome == "") {
      alert("Coloque um nome");
    } else {
      pontosDeValidacao += 1;
    }

    if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf)) {
      alert("Digite um CPF no formato: xxx.xxx.xxx-xx");
    } else {
      pontosDeValidacao += 1;
    }

    if (sexo == "M" || sexo == "F") {
      pontosDeValidacao += 1;
    } else {
      alert("selecione o sexo");
    }

    if (idade >= 0 && idade <= 120) {
      pontosDeValidacao += 1;
    } else {
      alert("Coloque uma data valida");
    }

    if (!/^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(telefone)) {
      alert("Digite um telefone no formato (DD)91234-5678");
    } else {
      pontosDeValidacao += 1;
    }
    if (!preferenciaCorte == "") {
      alert("Digite uma preferencia de corte, se não tiver coloque 'Nenhuma' ");
    } else {
      pontosDeValidacao += 1;
    }

    if (!descricaoCliente == "") {
      alert("Digite a descrição do Cliente");
    } else {
      pontosDeValidacao += 1;
    }

    if (!preferenciaProduto == "") {
      alert(
        "Digite uma preferencia de produto, se não tiver coloque 'Nenhuma' "
      );
    } else {
      pontosDeValidacao += 1;
    }

    if (pontosDeValidacao == 8) {
      const cliente = {
        cpf,
        nome,
        sexo,
        idade,
        telefone,
        descricaoCliente,
        preferenciaProduto,
        preferenciaCorte,
      };
      const response = await axios.post(
        "http://localhost:1001/clientes",
        cliente
      );
      if (response.status == 200) {
        const mudarCorBotao = document.getElementById("botao");
        mudarCorBotao.style.backgroundColor = "green";
        alert("Cadastro realizado com sucesso!");
      } else {
        const mudarCorBotao = document.getElementById("botao");
        mudarCorBotao.style.backgroundColor = "red";
        alert("oops, deu algum error");
      }
    }
  }

  return (
    <>
      <div className="container2">
        <div className="container3">
          <h1>Cadastro do Cliente</h1>
          <form>
            <label className="nome Label">Nome :</label>
            <input
              className="Input"
              type="text"
              placeholder="Nome"
              onChange={({ ...e }) => setNome(e.target.value)}
            ></input>

            <label className="cpf Label">Cpf :</label>
            <input
              className="Input"
              type="text"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              title="Digite um CPF no formato: xxx.xxx.xxx-xx"
              min="14"
              max="14"
              placeholder="xxx.xxx.xxx-xx"
              onChange={({ ...e }) => setCpf(e.target.value)}
            ></input>

            <div className="divSexo">
              <label className="sexo Label">Sexo :</label>
              <select
                onChange={({ ...e }) => setSexo(e.target.value)}
                value={sexo}
              >
                <option>Selecione o Sexo</option>
                <option>M</option>
                <option>F</option>
              </select>
            </div>

            <label className="idade Label">Idade :</label>
            <input
              className="Input"
              type="number"
              min="0"
              max="120"
              placeholder="0"
              onChange={({ ...e }) => setIdade(e.target.value)}
            ></input>

            <label className="telefone Label">Telefone :</label>
            <input
              className="Input"
              type="text"
              placeholder="(DD)91234-5678"
              onChange={({ ...e }) => setTelefone(e.target.value)}
            ></input>

            <label className="descricaoCliente Label">
              Descrição do cliente :
            </label>
            <input
              className="Input"
              type="text"
              placeholder="Descrição do cliente"
              onChange={({ ...e }) => setDescricaoCliente(e.target.value)}
            ></input>

            <label className="preferenciaProduto Label">
              Preferencia de Produtos :
            </label>
            <input
              className="Input"
              type="text"
              placeholder="Preferencia de Produtos"
              onChange={({ ...e }) => setPreferenciaProduto(e.target.value)}
            ></input>

            <label className="preferenciaCorte Label">
              Preferencia de Corte :
            </label>
            <input
              className="Input"
              type="text"
              placeholder="Preferencia de Corte"
              onChange={({ ...e }) => {
                setPreferenciaCorte(e.target.value);
              }}
            ></input>

            <button id="botao" onClick={Cadastro}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
