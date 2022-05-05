import React from 'react'
import LangCode from '../../Atoms/Language-code'
import styles from './index.module.scss'
import { IoSwapHorizontalOutline } from "react-icons/io5";
const LanguageReverse=()=>{
 return(
     <div className={styles['container']}>
        <LangCode code='Ar'/>
        <IoSwapHorizontalOutline size={35} color='#764AF1' style={{cursor:'pointer'}}/>
        <LangCode code='De'/>
       
     </div>
 )
}
export default LanguageReverse