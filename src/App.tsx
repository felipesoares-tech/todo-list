import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styles from './App.module.css'
import { ITask } from './interfaces/Task'
import Modal from './components/Modal';

function App() {

  const [tasklist, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      tasklist.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={tasklist} task={taskToUpdate} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm
            btnText='Criar Tarefa'
            setTaskList={setTaskList}
            taskList={tasklist} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={tasklist} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
