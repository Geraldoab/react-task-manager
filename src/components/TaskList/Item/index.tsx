
import { ITask } from '../../../types/task'
import style from './item.module.scss'

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item({
    name, 
    duration, 
    isSelected, 
    isCompleted, 
    id, 
    selectTask
}: Props) {
    return (
        <li 
            className={
                `
                ${style.item} 
                ${isSelected ? style.itemSelecionado : ''} 
                ${isCompleted ? style.itemCompletado : ''} 
                `
            } 
            onClick={() => !isCompleted && selectTask({
                name,
                duration,
                isSelected,
                isCompleted,
                id
            })}
        >
            <h3>{name}</h3>
            <span>{duration}</span>
        </li>
    )
}