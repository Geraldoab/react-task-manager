import style from './clock.module.scss'

interface Props {
    time: number | undefined
}

export default function Clock({time = 0 }:Props) {
    
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minutePart1, minutePart2] = String(minutes)
        .padStart(2, '0')
    const [secondPart1, secondPart2] = String(seconds)
        .padStart(2, '0')

    return (
        <>
            <span className={style.relogioNumero}>{minutePart1}</span>
            <span className={style.relogioNumero}>{minutePart2}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondPart1}</span>
            <span className={style.relogioNumero}>{secondPart2}</span>
        </>
    )
}