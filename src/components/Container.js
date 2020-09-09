import React, { useState } from "react";

function Container() {
  const [scraps, setScraps] = useState([
    { newScrap: "", owner: "", simpleId: "teste" },
  ]); //valor inicial da variável
  const [newScrap, setNewScrap] = useState("");
  const [owner, setOwner] = useState("");

  function addNewScrap() {
    const scrap = { newScrap, owner, simpleId: `${Date.now()}` };

    setScraps([...scraps, scrap]);

    setNewScrap("");
    setOwner("");

    // setScraps([...scraps, `Novo scrap ${Date.now()}`]); //renderiza a função novamente, alterando o estado
  }

  return (
    <div id="container">
      <input
        value={newScrap}
        placeholder="Tarefa"
        type="text"
        onChange={(e) => setNewScrap(e.target.value)}
      />

      <br />

      <input
        value={owner}
        placeholder="Quem"
        type="text"
        onChange={(e) => setOwner(e.target.value)}
      />

      <br />

      <div className="previewScrap">
        <h3>{newScrap}</h3>
        <h3>{owner}</h3>
      </div>

      <button type="button" onClick={addNewScrap}>
        Adicionar Scrap
      </button>

      <ul>
        {scraps.map((eachScrap) => (
          <li key={eachScrap.simpleId}>
            {eachScrap.owner}: {eachScrap.newScrap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Container;
