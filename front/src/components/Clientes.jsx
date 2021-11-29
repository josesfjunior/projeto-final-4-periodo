import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LerUmaLinha from "./lerUmaLinha";
import EditarLinha from "./EditarLinha";
import Index from "./Index";

import "../index.css";
function Clientes() {
  const [dados, setDados] = useState([]);
  const [editarContato, setEdidarContato] = useState(null);
  const [editarForm, setEditarForm] = useState({
    nome: "",
    cpf: "",
    sexo: "",
    idade: "",
    telefone: "",
    descricaoCliente: "",
    preferenciaProduto: "",
    preferenciaCorte: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const Trazer = async () => {
      const valor = await axios.get("http://localhost:1001/clientes");
      await setDados(valor.data);
    };
    const auth = localStorage.getItem("auth");

    if (auth) {
      Trazer();
    } else {
      navigate("/login");
    }
  }, []);

  const eventoClickEditar = (event, item) => {
    event.preventDefault();
    setEdidarContato(item.cpf);

    const valoresForm = {
      nome: item.nome,
      cpf: item.cpf,
      sexo: item.sexo,
      idade: item.idade,
      telefone: item.telefone,
      descricaoCliente: item.descricaoCliente,
      preferenciaProduto: item.preferenciaProduto,
      preferenciaCorte: item.preferenciaCorte,
    };

    setEditarForm(valoresForm);
  };

  return (
    <>
      <Index />
      <div className="clientes">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Sexo</th>
              <th>Idade</th>
              <th>Telefone</th>
              <th>Descrição do Cliente</th>
              <th>Preferência de Produtos</th>
              <th>Estilos de Corte</th>
              <th>Açoes</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((items) => {
              return (
                <>
                  <Fragment>
                    {editarContato === items.cpf ? (
                      <EditarLinha editarForm={editarForm} />
                    ) : (
                      <LerUmaLinha
                        items={items}
                        eventoClick={eventoClickEditar}
                      />
                    )}
                  </Fragment>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Clientes;
