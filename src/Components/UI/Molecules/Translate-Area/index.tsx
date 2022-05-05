import React from 'react'
import styles from './index.module.scss'
const TranslateArea=()=>{
    return(
        <div className='d-flex flex-column'>
           <textarea className={styles['input']}></textarea>
           <div className={styles['output']}></div>
        </div>
    )

}
export default  TranslateArea