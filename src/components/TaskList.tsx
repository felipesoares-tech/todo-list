import * as React from 'react';
import { ITask } from '../interfaces/Task';
import styles from './TaskList.module.css'

interface IAppProps {
    taskList: ITask[]
}

const TaskList = ({ taskList }: IAppProps) => {
    return (
        <>
        {taskList.length > 0 ? (
            taskList.map((task)=> (
                <div key={task.id}>
                    <p>{task.title}</p>
                </div>
            ))
        ): (
            <p>Não há tarefas cadastradas</p>
        )}
        </>
    )
};

export default TaskList;
