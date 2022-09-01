import React, { useState, useRef } from "react";
import styles from "./Projects.module.css";
import TaskColumn from "../../components/task-column/TaskColumn";
import TopBar from "../top-bar";

const tasks = [
  {
    id: "1",
    owner: {
      id: "1",
      name: "ankit singh",
      email: "ankit@gmail.com",
    },
    title: "Design-app",
    description: "mojvjvjsdvj s vjs js s  js jsj js jsj scmsmcksmc",
    status: "todo",
  },
  {
    id: "2",
    owner: {
      id: "2",
      name: "gulzar s",
      email: "gulzar@gmail.com",
    },
    title: "write song",
    description: "sksnv djjsd jsd  jd j sjsj jdjdjdsjncd",
    status: "todo",
  },
  {
    id: "3",
    owner: {
      id: "3",
      name: "bob b",
      email: "bob@gmail.com",
    },
    title: "prototyping",
    description: "sksnv djjsd jsd  jd j sjsj jdjdjdsjncd",
    status: "inprogress",
  },
  {
    id: "4",
    owner: {
      id: "3",
      name: "bob b",
      email: "bob@gmail.com",
    },
    title: "copywriting",
    description: "sksnvffsfsf fsf jdjdjdsjncd",
    status: "completed",
  },
];

const Projects = () => {
  const [Tasks, setTasks] = useState(tasks);

  const draggedItemId = useRef();
  const draggedOverColumn = useRef();

  const dragEnter = (e) => {
    draggedOverColumn.current = e.target.attributes["data"]?.nodeValue;
  };

  const dragStart = (e) => {
    draggedItemId.current = e.target.attributes["id"]?.nodeValue;
  };

  const drop = (e) => {
    if (draggedItemId.current && draggedOverColumn.current) {
      let currentStatus = "";
      const _Tasks = [...Tasks];
      switch (draggedOverColumn.current) {
        case "To do": {
          currentStatus = "todo";
          break;
        }
        case "in-Progress": {
          currentStatus = "inprogress";
          break;
        }
        case "Completed": {
          currentStatus = "completed";
          break;
        }
        default : {
          currentStatus = "";
        }
      }

      if(currentStatus === ""){
        return;
      }

      for (let i = 0; i < _Tasks.length; i++) {
        const task = _Tasks[i];
        if (task.id === draggedItemId.current) {
          task.status = currentStatus;
          break;
        }
      }

      setTasks(_Tasks);
    }
  };
  return (
    <div className={styles.mainWrapper}>
      <TopBar />

      <div className={styles.flexCenter}>
        <h2>Projects</h2>
        <span>Filter</span>
      </div>

      <div className={`${styles.flexCenter} ${styles.taskColumnWrapper}`}>
        <TaskColumn
          type="To do"
          tasks={Tasks}
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
        />
        <TaskColumn
          type="in-Progress"
          tasks={Tasks}
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
        />
        <TaskColumn
          type="Completed"
          tasks={Tasks}
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
        />
      </div>
    </div>
  );
};

export default Projects;
