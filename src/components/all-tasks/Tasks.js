import React from "react";
import Task from "../single-task/Task";

const Tasks = ({ tasks, dragStart }) => {
  return (
    <div>
      {tasks.map((task) => {
        return <Task task={task} dragStart={dragStart} />;
      })}
    </div>
  );
};

export default Tasks;
