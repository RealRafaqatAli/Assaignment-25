
import './App.css'
import { useState } from 'react';
import Header from './Components/Header'
import Showtask from './Components/Showtask'
import Task from './Components/Task'
 
export default function App(){
  const [taskList, setTaskList] = useState([]);
   const [task, setTask] = useState({});

  return (
    <>
      <div className='App'>
        <Header/>
        <Task taskList={taskList}
         setTaskList={setTaskList} 
          task={task}
           setTask={setTask}/>
        <Showtask taskList={taskList}
         setTaskList={setTaskList}
          task={task}
           setTask={setTask}
         />
      </div>
    </>
  )
}