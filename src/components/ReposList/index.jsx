import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setErr(false);
    setRepos([]);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error("Usuário não encontrado");
        return res.json();
      })
      .then((resJson) => {
        setTimeout(() => {
          setIsLoading(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setErr(true);
      });
  }, [nomeUsuario]);

  function renderContent() {
    if (isLoading) return <h1>Carregando...</h1>;
    if (err) return <h1>Usuário não encontrado</h1>;
    return (
      <ul className={styles.list}>
        {repos.map(({ id, name, language, html_url }) => (
          <li className={styles.listItem} key={id}>
            <div className={styles.itemName}>
              <b>Nome:</b>
              {name}
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem:</b>
              {language}
            </div>
            <a className={styles.itemLink} target="_blank" href={html_url}>
              Visitar no Github
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return <div className="container">{renderContent()}</div>;
};

export default ReposList;
