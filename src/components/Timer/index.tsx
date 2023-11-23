import Button from '../Button'
import Clock from './Clock'
import style from './timer.module.scss'
import { TimeToSeconds } from '../../common/utils/time'
import { ITask } from '../../types/task'
import { useEffect, useState } from 'react'

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Timer ({selected, finishTask}:Props) {

    const [time, setTime] = useState<number>(
        TimeToSeconds(String(selected?.duration)));

    // Components's Life Cycle
    useEffect(() => {
        if(selected?.duration) {
            setTime(TimeToSeconds(selected.duration))
        }
    },[selected])    

    function countDown(count: number = 0) {
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1)
                return countDown(count - 1)
            }
            finishTask()
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button 
                name='Start'
                onClick={ ()=> countDown(time)} />
        </div>
    )
}