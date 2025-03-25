import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [times, setTimes] = useState(0);

  const studentName = (event) => {
    setName(event.target.value);
    return setName;
  };
  const resultRender = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    return media >= 7 ? <p>aprovado(a)</p> : <p>reprovado(a)</p>;
  };

  function alterou() {
    return `Alterou ${times} vezes`;
  }
  useEffect(() => {
    setTimes(times + 1);
    alterou();
  }, [name, materiaA, materiaB, materiaC]);

  return (
    <>
      <form>
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input type="text" placeholder="Seu nome" onChange={studentName} />
        <input
          type="number"
          placeholder="Nota matéria A"
          onChange={(event) => setMateriaA(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Nota matéria B"
          onChange={(event) => setMateriaB(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder="Nota matéria C"
          onChange={(event) => setMateriaC(Number(event.target.value))}
        />
        <p>{alterou()}</p>
        <p>
          O(A) estudante {name} foi {resultRender()}
        </p>
      </form>
    </>
  );
};

export default Form;
