import React from 'react'
import styles from './index.module.scss'
interface HeadProps{
    text:string
}
const Head:React.FC<HeadProps>=({text})=>{
 return(
     <h1 className={styles['head']}>{text}</h1>
 )
}
export default Head