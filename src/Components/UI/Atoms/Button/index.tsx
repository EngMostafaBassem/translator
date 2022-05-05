import React from 'react'
import styles from './index.module.scss'
interface ButtonProps{
    title:string,
    onClick:()=>void
}
const Button:React.FC<ButtonProps>=({title,onClick})=>{
    return(
        <button className={styles['btn']} onClick={onClick}>{title}</button>
    )

}
export default Button