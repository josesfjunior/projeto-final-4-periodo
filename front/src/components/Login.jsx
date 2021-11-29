import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let pontosDeValidacao = 0;
  const navigate = useNavigate();
  

  async function Autenticar(event) {
    event.preventDefault();
    if (email == "") {
      alert("Digite seu email");
    } else {
      pontosDeValidacao += 1;
    }

    if (senha == "") {
      alert("digite sua senha");
    } else {
      pontosDeValidacao += 1;
    }

    if (pontosDeValidacao === 2) {
      const req = await axios.post(
        "http://localhost:1001/funcionario/verificar",
        {
          email,
          senha,
        }
      );
      if (req.data == true) {
        localStorage.setItem("auth", true);
        navigate("/");
      } else {
        localStorage.setItem("auth", false);
        alert("Login errado");
      }
    }
  }

  return (
    <>
      <div className="container1">
        <div className="container2">
          <div className="container3">
            <h1>Faça Login Agora</h1>
            <form>
              <label className="Label">Email:</label>
              <input
                type="text"
                className="Input"
                onChange={({ ...e }) => setEmail(e.target.value)}
              ></input>

              <label className="Label">Senha:</label>
              <input
                type="password"
                className="Input"
                onChange={({ ...e }) => setSenha(e.target.value)}
              ></input>

              <button onClick={Autenticar}> Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
