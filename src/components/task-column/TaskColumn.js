import React, { useState } from "react";
import Tasks from "../all-tasks/Tasks";
import styles from "./TaskColumn.module.css";
import TasksHOC from "../../HOC/TasksHOC";
import TaskForm from "../task-form/TaskForm";

const TaskColumn = (props) => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        if(showForm){
            return;
        }
        setShowForm(true);
    }

    const handleAddTask = (data) => {
        // network call 
        setShowForm(false);
    }
  return (
    <div
      data={props.type}
      className={styles.mainWrapper}
      onDragEnter={(e) => props.dragEnter(e)}
      onDragEnd={(e) => props.drop(e)}
    >
      <div className={styles.flexBetween}>
        <h5>{props.type}</h5>
        <span className={styles.count}>{props.tasks.length}</span>
      </div>

      <div onClick={handleShowForm} className={styles.addTaskBtn}>+</div>

      {
        showForm && <TaskForm handleAddTask={handleAddTask} />
      }

      <Tasks tasks={props.tasks} dragStart={props.dragStart} />
    </div>
  );
};

export default TasksHOC(TaskColumn);
