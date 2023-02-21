import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm btnText='Criar Tarefa'></TaskForm>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
