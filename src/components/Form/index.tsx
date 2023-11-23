import React from "react";
import Button from "../Button";
import style from './style.module.scss'
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid'; 

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

    state = {
        name: '',
        duration: '00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    ...this.state,
                    isSelected: false,
                    isCompleted: false,
                    id: uuidv4()
                }
            ])
        this.setState({
            name: '',
            duration: '00:00'
        })
    }

    render() {
        return (
            <>
                <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                    <div className={style.inputContainer}>
                        <label htmlFor="task">Add a new study</label>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            placeholder="What do you want to study?"
                            required
                            value={this.state.name}
                            onChange={event => this.setState({...this.state, name: event.target.value})}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="time">Time</label>
                        <input
                            value={this.state.duration}
                            onChange={event => this.setState({...this.state, duration: event.target.value})}
                            type="time"
                            step="1"
                            name="time"
                            id="time"
                            min="00:00:00"
                            max="01:30:00"
                            required
                         />
                    </div>
                    <Button name="Add" />
                </form>
            </>
        )
    }
}

export default Form