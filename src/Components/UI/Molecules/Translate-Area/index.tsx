import React from 'react'
import { TranslateContext } from '../../../../context/translate-context'
import styles from './index.module.scss'
const TranslateArea=()=>{
    const Context=React.useContext(TranslateContext)
    return(
        <div className='d-flex flex-column'>
           <textarea className={styles['input']} value={Context?.query} onChange={(e)=>Context?.setQuery(e.target.value)} dir={Context?.from=='de'?'ltr':'rtl'} ></textarea>
           <div className={styles['output']} dir={Context?.to=='de'?'ltr':'rtl'}>{Context?.translated} </div>
        </div>
    )

}
export default  TranslateArea