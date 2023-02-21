import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styles from './App.module.css'
import { ITask } from './interfaces/Task'

function App() {

  const [tasklist, setTaskList] = useState<ITask[]>([])


  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm
            setTaskList={setTaskList}
            btnText='Criar Tarefa'
            taskList={tasklist} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={tasklist} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
