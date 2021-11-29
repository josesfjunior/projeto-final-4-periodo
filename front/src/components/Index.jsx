import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import "../index.css";
function Index() {
  const auth = localStorage.getItem("auth");
  const navigate = useNavigate();
  function Loggin(){
    navigate("/login")
  }

  function Logoutt(){
    if(auth){
      localStorage.setItem("auth", false);
      navigate("/");
      window.location.reload();
      
    }
  }
  return (
    <>
      <div className="Main">
        <header>
          <nav>
            <Fragment>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cliente">Clientes</Link>
                </li>
                <li>
                  {auth ? (
                    <button onClick={Logoutt}>Sair</button>
                  ) : (
                    <button onClick={Loggin}>Entrar</button>
                  )}
                </li>
              </ul>
            </Fragment>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Index;
