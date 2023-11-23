import React from "react";
import style from './style.module.scss'


class Button extends React.Component<{
    name:string, 
    onClick?: () => void
}> {
    render() {
        return (
            <button onClick={this.props.onClick} className={style.botao}>
                {this.props.name}
            </button>
        )
    }
}

export default Button