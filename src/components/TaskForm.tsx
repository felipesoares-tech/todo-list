import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './TaskForm.module.css'
import { ITask } from '../interfaces/Task'

interface IAppProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: IAppProps) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = { id, title, difficulty }

        setTaskList!([...taskList, newTask])

        setTitle('')
        setDifficulty(0)

        console.log(taskList)

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }

    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}><label htmlFor="title">Título</label>
                <input value={title} onChange={handleChange} type="text" name='title' placeholder='Título da tarefa' />
            </div>
            <div className={styles.input_container}><label htmlFor="difficulty">Dificuldade:</label>
                <input value={difficulty} onChange={handleChange} type="text" name='difficulty' placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value={btnText} />
        </form>

    )
};

export default TaskForm;
