import React, { useState } from "react";
import styles from "./Task.module.css";

const Task = ({ task, dragStart }) => {
  const [isEditable, setIsEditable] = useState(false);

  const getInitials = (name) => {
    let initials = "";
    const fullName = name.split(" ");
    fullName.forEach((name) => {
      initials += name.charAt(0).toUpperCase();
    });
    return initials;
  };

  return (
    <div
      id={task.id}
      className={styles.cardWrapper}
      draggable
      onDragStart={(e) => dragStart(e)}
      contentEditable={isEditable}
      onBlur={() => setIsEditable(false)}
    >
      <div
        onDoubleClick={() => setIsEditable(true)}
        className={`${styles.card}`}
      >
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <div contentEditable="false">
          <span id={styles.owner}>{getInitials(task.owner.name)}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
