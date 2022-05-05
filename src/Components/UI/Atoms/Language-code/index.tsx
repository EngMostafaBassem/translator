import React from 'react'
import styles from './index.module.scss'
interface  LangCodeProps{
    code:string
}
const LangCode:React.FC<LangCodeProps>=({code})=>{
    return(
        <div className={styles['container']} >
          {code}
        </div>
    )

}
export default LangCode