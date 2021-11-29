import axios from 'axios';

function Ler({ items, eventoClick }) {

  const deletarCliente = async () => {
    await axios.delete(`http://localhost:1001/clientes/${items.cpf}`);
    window.location.reload();
  };

  return (
    <tr key={items.cpf}>
      <td>{items.nome}</td>
      <td>{items.cpf}</td>
      <td>{items.sexo}</td>
      <td>{items.idade}</td>
      <td>{items.telefone}</td>
      <td>{items.descricaoCliente}</td>
      <td>{items.preferenciaProduto}</td>
      <td>{items.preferenciaCorte}</td>
      <button className ="salvar" onClick={(event) => eventoClick(event, items) }>Editar</button>
      <button className ="excluir" onClick={(_event) =>deletarCliente}>Excluir</button>
    </tr>
  );
}

export default Ler;
