import React, { useState } from "react";

function Body(){

    const [tasks, setTasks] = useState([{newTask:"Estudar React", owner:"Luigi", simpleId:"testeUm1010"}]);
    const [newTask, setNewTask] = useState(""); //string vazia
    const [owner, setOwner] = useState("");

    function addNewTask() {
        const task = { newTask, owner, simpleId: `${Date.now()}`};
  
        setTasks([...tasks, task]);
        // console.log(tasks);
        setNewTask("");
        setOwner("");
    }

    return (
        <>  
            <input value={newTask} placeholder="Digite uma nova tarefa!" type="text" onChange={(e) => setNewTask(e.target.value)} />
            <br />
            <input value={owner} placeholder="Digite o nome do criador!" type="text" onChange={(e) => setOwner(e.target.value)} />
            <br />
            <button type="button" onClick={addNewTask}>
                Criar!
            </button>
            <br />
            
            <h3>{newTask}</h3>
            <h3>{owner}</h3>

            <ul>
                { tasks.map((eachTask) => (
                
                    <li key={eachTask.simpleId}>
                        <b>{ eachTask.owner }: </b>{ eachTask.newTask }.
                    </li>
                
                ))}
            </ul>
        </>
    )
}

export default Body;