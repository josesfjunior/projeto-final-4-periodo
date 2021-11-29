import { useState } from "react";
import axios from "axios";
function Editar({ editarForm }) {
  const [nome, setNome] = useState(editarForm.nome);
  const sexo = editarForm.sexo;
  const cpf = editarForm.cpf;
  const [idade, setIdade] = useState(editarForm.idade);
  const [telefone, setTelefone] = useState(editarForm.telefone);
  const [descricaoCliente, setDescricaoCliente] = useState(
    editarForm.descricaoCliente
  );
  const [preferenciaProduto, setPreferenciaProduto] = useState(
    editarForm.preferenciaProduto
  );
  const [preferenciaCorte, setPreferenciaCorte] = useState(
    editarForm.preferenciaCorte
  );

  const criarUsuario = async () => {
    const usuario = {
      nome,
      sexo,
      cpf,
      idade,
      telefone,
      descricaoCliente,
      preferenciaProduto,
      preferenciaCorte,
    };

    await axios.put(
      `http://localhost:1001/clientes/${editarForm.cpf}`,
      usuario
    );
    window.location.reload();
  };

  const deletarCliente = async () => {
    await axios.delete(`http://localhost:1001/clientes/${cpf}`);
    window.location.reload();
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder={editarForm.nome}
          name="nome"
          onChange={(e) => setNome(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="CPF"
          value={editarForm.cpf}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="sexo"
          value={editarForm.sexo}
          
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="idade"
          placeholder={editarForm.idade}
          onChange={({ ...e }) => setIdade(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder={editarForm.telefone}
          name="telefone"
          onChange={({ ...e }) => setTelefone(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder={editarForm.descricaoCliente}
          name="descricaoCliente"
          onChange={({ ...e }) => setDescricaoCliente(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder={editarForm.preferenciaProduto}
          name="preferenciaProduto"
          onChange={({ ...e }) => setPreferenciaProduto(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Insira a preferência de Corte"
          name="preferenciaCorte"
          placeholder={editarForm.preferenciaCorte}
          onChange={({ ...e }) => setPreferenciaCorte(e.target.value)}
        ></input>
      </td>
      <td>
        <button className= "salvar" onClick={criarUsuario}>Salvar</button>
        <button className="excluir" onClick={deletarCliente}>Excluir</button>
      </td>
    </tr>
  );
}

export default Editar;
