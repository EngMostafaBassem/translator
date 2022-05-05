import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { TranslateContext } from '../../../../context/translate-context'
import Button from '../../Atoms/Button'
import Spinner from '../../Atoms/Spinner'
import LanguageReverse from '../../Molecules/Language-Reverse'
import TranslateArea from '../../Molecules/Translate-Area'
const Translator=()=>{
    const Context=React.useContext(TranslateContext)
    const handleTranslate=useCallback(async()=>{
        Context?.setLoading(true)
        const respnose=await axios.post(
             'https://translate-ar-de.herokuapp.com/translator',
             {from:Context?.from,to:Context?.to,query:Context?.query})
        Context?.setLoading(false)
        Context?.setTranslated(respnose.data)      
    },[Context])
    return(
        <>
        {Context?.loading&&<Spinner/>} 
        <LanguageReverse/>
        <TranslateArea/>
        <div className='d-flex justify-content-center align-items-center'>
          <Button title='Translate' onClick={handleTranslate}/>
        </div>
        </>
    )

}
export default  Translator