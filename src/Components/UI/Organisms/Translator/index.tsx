import React from 'react'
import Button from '../../Atoms/Button'
import LanguageReverse from '../../Molecules/Language-Reverse'
import TranslateArea from '../../Molecules/Translate-Area'
const Translator=()=>{
    return(
        <>
        <LanguageReverse/>
        <TranslateArea/>
        <div className='d-flex justify-content-center align-items-center'>
          <Button title='Translate'/>
        </div>
        </>
    )

}
export default  Translator