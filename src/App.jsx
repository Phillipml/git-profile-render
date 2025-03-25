import { useState } from "react";

import Profile from "./components/Profile";
import Form from "./components/Form";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <div className="searchUserName">
        <h2>Pesquise o nome do seu usuário Github</h2>
        <input
          type="text"
          className="userName"
          onBlur={(e) => setNomeUsuario(e.target.value)}
        />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Profile nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  );
}

export default App;
