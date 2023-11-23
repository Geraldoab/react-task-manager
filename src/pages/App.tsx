import React from 'react';
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import style from './style.module.scss';
import Timer from '../components/Timer';
import { useState } from 'react'
import { ITask } from '../types/task';

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([])
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTasks(oldTask => oldTask.map(task => ({
      ...task,
      isSelected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined)
      setTasks(t =>
        t.map(t => {
          if(t.id === selected.id) {
            return {
              ...t,
              isSelected: false,
              isCompleted: true
            }
          }
          else {
            return t
          }
        })  
      )
    }
  }

  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks} />
        <TaskList tasks={tasks} selectTask={selectTask} />
        <Timer 
          finishTask={finishTask}
          selected={selected}
         />
    </div>
  );
}

export default App;
