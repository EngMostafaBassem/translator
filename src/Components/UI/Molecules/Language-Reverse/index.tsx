import React, { useCallback } from 'react'
import LangCode from '../../Atoms/Language-code'
import styles from './index.module.scss'
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { TranslateContext } from '../../../../context/translate-context';
const LanguageReverse=()=>{
    const Context=React.useContext(TranslateContext)
    const handleLanguageSwap=useCallback(()=>{
        Context?.setTo(Context?.to=='de'?'ar':'de')
        Context?.setFrom(Context?.from=='de'?'ar':'de')
        Context?.setQuery('')
        Context?.setTranslated('')
    },[Context])
 return(
     <div className={styles['container']}>
        <LangCode code={Context?.from as string}/>
        <IoSwapHorizontalOutline size={35} color='#764AF1' style={{cursor:'pointer'}} onClick={handleLanguageSwap}/>
        <LangCode code={Context?.to as string}/>
       
     </div>
 )
}
export default LanguageReverse