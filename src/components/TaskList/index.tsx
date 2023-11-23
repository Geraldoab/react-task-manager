import Item from './Item'
import style from './style.module.scss'
import { ITask } from '../../types/task'

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function TaskList({tasks, selectTask}: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
             Daily tasks
            </h2>
            <ul>
                {tasks.map((item, index)=> {
                    return (
                        <Item 
                            selectTask={selectTask}
                            key={item.id} 
                            {...item} />
                     )
                })}
            </ul>
        </aside>
    )
}

export default TaskList