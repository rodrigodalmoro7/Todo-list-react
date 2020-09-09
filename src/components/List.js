import React from "react";

function List() {
  return (
    <>
      <ul>
        {tasks.map((eachTask) => (
          <li key={eachTask.simpleId}>
            <b>{eachTask.owner}: </b>
            {eachTask.newTask}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
