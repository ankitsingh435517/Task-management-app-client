import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleShiftKey = (e) => {
    const key = e.code;
    if (key === "ShiftRight" && title.length && description.length) {
        handleAddTask({ title, description });
        return;
    }
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card}`}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
          placeholder="Give your task a title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.descTextarea}
          placeholder="Description"
          onKeyDown={handleShiftKey}
        />
        <div contentEditable="false">
          <span id={styles.owner}>O</span>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
